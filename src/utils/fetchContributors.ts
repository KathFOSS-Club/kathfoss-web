import axios from "axios";
import * as fs from "fs";
import * as dotenv from "dotenv";
import * as path from "path";

// Load environment variables from .env file
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

// Debug: Log the loaded environment variables
console.log("GITHUB_TOKEN:", process.env.GITHUB_TOKEN);
console.log("ORG_NAME:", process.env.ORG_NAME);
console.log("REPO_NAME:", process.env.REPO_NAME);

// Replace with your GitHub repository details
const ORG_NAME: string = process.env.ORG_NAME || "kathFOSS-Club";
const REPO_NAME: string = process.env.REPO_NAME || "kathfoss-web";
const GITHUB_TOKEN: string = process.env.GITHUB_TOKEN || "";

if (!GITHUB_TOKEN) {
console.error("GitHub token is missing. Please set the GITHUB_TOKEN environment variable.");
process.exit(1);
}

const BASE_URL: string = "https://api.github.com";

const headers = {
Accept: "application/vnd.github+json",
Authorization: `Bearer ${GITHUB_TOKEN}`,
"X-GitHub-Api-Version": "2022-11-28",
};

// Define the structure of a contributor object
interface Contributor {
login: string;
avatar_url: string;
html_url: string;
contributions: number;
url: string; // Add the missing 'url' property
name?: string;
blog?: string;
twitter_username?: string;
}

async function fetchContributors(): Promise<void> {
try {
// Fetch contributors for the repository
const contributorsUrl: string = `${BASE_URL}/repos/${ORG_NAME}/${REPO_NAME}/contributors`;
console.log("Fetching contributors from:", contributorsUrl);
console.log("Headers:", headers);

const contributorsResponse = await axios.get(contributorsUrl, { headers });

console.log("GitHub API Response Status:", contributorsResponse.status);
console.log("GitHub API Response Data:", contributorsResponse.data);

if (contributorsResponse.status === 200) {
const contributors: Contributor[] = contributorsResponse.data;

// Fetch additional details for each contributor
const contributorsDetails: Contributor[] = await Promise.all(
contributors.map(async (contributor: Contributor) => {
const userResponse = await axios.get(contributor.url, { headers });
return {
login: contributor.login,
avatar_url: contributor.avatar_url,
html_url: contributor.html_url,
contributions: contributor.contributions,
url: contributor.url, // Use the API URL for additional details
name: userResponse.data.name || contributor.login,
blog: userResponse.data.blog,
twitter_username: userResponse.data.twitter_username,
};
})
);

// Sort contributors by contributions (descending)
contributorsDetails.sort((a: Contributor, b: Contributor) => b.contributions - a.contributions);

// Save contributors to a JSON file in the public directory
const filePath = path.join(__dirname, "../../public/contributors.json"); // Corrected path
fs.writeFileSync(
filePath,
JSON.stringify(contributorsDetails, null, 2) // Pretty-print JSON with 2 spaces
);

console.log("Contributors data saved to contributors.json");
} else {
console.error("Failed to fetch contributors:", contributorsResponse.status);
}
} catch (error: any) {
console.error("Error fetching contributors:", error.message);
if (error.response) {
console.error("Response data:", error.response.data);
console.error("Response status:", error.response.status);
console.error("Response headers:", error.response.headers);
}
}
}

fetchContributors();