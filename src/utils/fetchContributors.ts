import { ORG_NAME, REPO_NAME } from "@/lib/constants";

export interface Contributor {
  login: string;
  avatar_url: string;
  html_url: string;
  contributions: number;
  twitter_username?: string;
  blog?: string;
}

export const fetchContributors = async (): Promise<Contributor[]> => {
  const url = `https://api.github.com/repos/${ORG_NAME}/${REPO_NAME}/contributors`;

  try {
    const response = await fetch(url, {
      next: { revalidate: 3600 } // Revalidate the data every hour
    });

    if (!response.ok) {
      throw new Error("Failed to fetch contributors");
    }

    const data = await response.json();
    return data.map((contributor: any) => ({
      login: contributor.login,
      avatar_url: contributor.avatar_url,
      html_url: contributor.html_url,
      contributions: contributor.contributions,
      twitter_username: contributor.twitter_username, // Add the twitter handle
      blog: contributor.blog, // Add the personal website/blog
    }));
  } catch (error) {
    console.error("Error fetching contributors:", error);
    return [];
  }
};
