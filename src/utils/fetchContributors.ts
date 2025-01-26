import axios from "axios";
import * as fs from "fs";
import * as dotenv from "dotenv";
import * as path from "path";

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

const ORG_NAME = process.env.ORG_NAME;
const REPO_NAME = process.env.REPO_NAME;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

if (!ORG_NAME || !REPO_NAME) {
  console.error("ORG_NAME or REPO_NAME environment variables are missing.");
  process.exit(1);
}

if (!GITHUB_TOKEN) {
  console.error(
    "GitHub token is missing. Please set the GITHUB_TOKEN environment variable."
  );
  process.exit(1);
}

const BASE_URL: string = "https://api.github.com";

const headers = {
  Accept: "application/vnd.github+json",
  Authorization: `Bearer ${GITHUB_TOKEN}`,
  "X-GitHub-Api-Version": "2022-11-28",
};

interface Contributor {
  login: string;
  avatar_url: string;
  html_url: string;
  contributions: number;
  url: string;
  name?: string;
  blog?: string;
  twitter_username?: string;
}

async function fetchContributors(): Promise<void> {
  try {
    const contributorsUrl: string = `${BASE_URL}/repos/${ORG_NAME}/${REPO_NAME}/contributors`;
    console.log("Fetching contributors from:", contributorsUrl);

    const contributorsResponse = await axios.get(contributorsUrl, { headers });

    console.log("GitHub API Response Status:", contributorsResponse.status);

    if (contributorsResponse.status === 200) {
      const contributors: Contributor[] = contributorsResponse.data;

      const contributorsDetails: Contributor[] = await Promise.all(
        contributors.map(async (contributor: Contributor) => {
          const userResponse = await axios.get(contributor.url, { headers });
          return {
            login: contributor.login,
            avatar_url: contributor.avatar_url,
            html_url: contributor.html_url,
            contributions: contributor.contributions,
            url: contributor.url,
            name: userResponse.data.name || contributor.login,
            blog: userResponse.data.blog,
            twitter_username: userResponse.data.twitter_username,
          };
        })
      );

      // Sort contributors by contributions (descending)
      contributorsDetails.sort(
        (a: Contributor, b: Contributor) => b.contributions - a.contributions
      );

      // Save contributors to a JSON file in the public directory
      const filePath = path.resolve(__dirname, "../../public/contributors.json");

      // Ensure the file is written to the intended directory
      if (!filePath.startsWith(path.resolve(__dirname, "../../public"))) {
        console.error("Invalid file path.");
        process.exit(1);
      }

      fs.writeFileSync(filePath, JSON.stringify(contributorsDetails, null, 2), {
        mode: 0o600,
      });

      console.log("Contributors data saved to contributors.json");
    } else {
      console.error("Failed to fetch contributors:", contributorsResponse.status);
    }
  } catch (error: any) {
    console.error("Error fetching contributors:", error.message);
    if (error.response) {
      console.error("Response status:", error.response.status);
    }
  }
}

fetchContributors();