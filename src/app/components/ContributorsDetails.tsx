"use client";

import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Box, Typography, IconButton } from "@mui/material";
import { GitHub, Twitter, Language, ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
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
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Box sx={{ position: "relative", width: "100%", overflow: "hidden" }}>
      <IconButton
        onClick={scrollLeft}
        sx={{
          position: "absolute",
          left: 0,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 1,
          color: "#64ffda",
          backgroundColor: "rgba(25, 22, 49, 0.8)",
          "&:hover": {
            backgroundColor: "rgba(25, 22, 49, 1)",
          },
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
        }}
      >
        <ArrowBackIos />
      </IconButton>

      <Box
        ref={scrollContainerRef}
        sx={{
          display: "flex",
          gap: 2,
          padding: 2,
          overflowX: "hidden",
          scrollBehavior: "smooth",
        }}
      >
        {contributors.map((contributor, index) => (
          <Box
            key={index}
            sx={{
              flex: "0 0 auto",
              width: "200px",
              backgroundColor: "rgb(35, 32, 59)",
              borderRadius: "12px",
              padding: 2,
              textAlign: "center",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
              transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
              "&:hover": {
                transform: "translateY(-10px)",
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.5)",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "16px",
              }}
            >
              <Image
                src={contributor.avatar_url}
                alt={contributor.name || contributor.login}
                width={100}
                height={100}
                style={{ borderRadius: "50%", border: "2px solid #64ffda" }}
              />
            </Box>
            <Typography
              variant="h6"
              sx={{
                color: "#64ffda",
                marginBottom: 1,
                fontWeight: "bold",
                fontSize: "1.1rem",
              }}
            >
              {contributor.name || contributor.login}
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
              <IconButton
                href={contributor.html_url}
                target="_blank"
                sx={{ color: "#64ffda", "&:hover": { color: "#47e1a5" } }}
              >
                <GitHub />
              </IconButton>
              {contributor.twitter_username && (
                <IconButton
                  href={`https://twitter.com/${contributor.twitter_username}`}
                  target="_blank"
                  sx={{ color: "#64ffda", "&:hover": { color: "#47e1a5" } }}
                >
                  <Twitter />
                </IconButton>
              )}
              {contributor.blog && (
                <IconButton
                  href={contributor.blog}
                  target="_blank"
                  sx={{ color: "#64ffda", "&:hover": { color: "#47e1a5" } }}
                >
                  <Language />
                </IconButton>
              )}
            </Box>
          </Box>
        ))}
      </Box>

      <IconButton
        onClick={scrollRight}
        sx={{
          position: "absolute",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 1,
          color: "#64ffda",
          backgroundColor: "rgba(25, 22, 49, 0.8)",
          "&:hover": {
            backgroundColor: "rgba(25, 22, 49, 1)",
          },
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
        }}
      >
        <ArrowForwardIos />
      </IconButton>
    </Box>
  );
};

export default ContributorsDetails;