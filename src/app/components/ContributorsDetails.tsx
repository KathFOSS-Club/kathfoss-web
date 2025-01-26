"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Typography, IconButton } from "@mui/material";
import { GitHub, Twitter, Language } from "@mui/icons-material";
import Image from "next/image";

interface Contributor {
  login: string;
  avatar_url: string;
  html_url: string;
  contributions: number;
  name?: string;
  blog?: string;
  twitter_username?: string;
}

const ContributorsDetails = () => {
  const [contributors, setContributors] = useState<Contributor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContributors = async () => {
      try {
        const response = await axios.get("/contributors.json");
        setContributors(response.data);
      } catch (error) {
        console.error("Error fetching contributors:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchContributors();
  }, []);

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Box
      sx={{
        display: "flex",
        overflowX: "auto",
        gap: 2,
        padding: 2,
        "&::-webkit-scrollbar": {
          height: "8px",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#64ffda",
          borderRadius: "4px",
        },
      }}
    >
      {contributors.map((contributor, index) => (
        <Box
          key={index}
          sx={{
            flex: "0 0 auto",
            width: "200px",
            backgroundColor: "rgb(25, 22, 49)",
            borderRadius: "8px",
            padding: 2,
            textAlign: "center",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          <Image
            src={contributor.avatar_url}
            alt={contributor.name || contributor.login}
            width={100}
            height={100}
            style={{ borderRadius: "50%", marginBottom: "16px" }}
          />
          <Typography variant="h6" sx={{ color: "#64ffda", marginBottom: 1 }}>
            {contributor.name || contributor.login}
          </Typography>
          <Typography variant="body2" sx={{ color: "#8892b0", marginBottom: 2 }}>
            Contributions: {contributor.contributions}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
            <IconButton
              href={contributor.html_url}
              target="_blank"
              sx={{ color: "#64ffda" }}
            >
              <GitHub />
            </IconButton>
            {contributor.twitter_username && (
              <IconButton
                href={`https://twitter.com/${contributor.twitter_username}`}
                target="_blank"
                sx={{ color: "#64ffda" }}
              >
                <Twitter />
              </IconButton>
            )}
            {contributor.blog && (
              <IconButton
                href={contributor.blog}
                target="_blank"
                sx={{ color: "#64ffda" }}
              >
                <Language />
              </IconButton>
            )}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default ContributorsDetails;