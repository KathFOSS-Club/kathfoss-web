"use client";

import React from "react";
import { Box, Typography, Button, Divider } from "@mui/material";
import { ArrowForward as ArrowForwardIcon } from "@mui/icons-material";
import { useRouter } from "next/navigation";

export default function AboutKathfoss() {
  const router = useRouter();

  return (
    <Box
      sx={{
        textAlign: "center",
        my: "8rem",
        px: "2rem",
      }}
    >
      <Typography
        variant="h2"
        component="h2"
        align="center"
        gutterBottom
        sx={{ fontWeight: "600", marginBottom: 2, color: "#64ffda" }}
      >
        <span style={{ color: "#fff", textTransform: "uppercase" }}>about</span>{" "}
        <span style={{ color: "#87CEFA", textTransform: "uppercase" }}>
          kathfoss
        </span>
      </Typography>

      {/* Subtitle */}
      <Typography
        sx={{
          fontSize: { sm: "25px", xs: "14px" },
          fontWeight: "400",
          color: "#fffff",
          lineHeight: "1.8",
          maxWidth: "800px",
          mx: "auto",
          mb: "2rem",
        }}
      >
        KathFOSS is a vibrant community of passionate open-source enthusiasts at
        Kathford International College of Engineering and Management (KICEM). We
        empower students to explore their interests, develop their skills, and
        contribute to the open-source ecosystem through a collaborative and
        supportive environment. We organize workshops, hackathons, and events to
        spread awareness about technologies, support student projects, and guide
        the next generation of developers.
      </Typography>
      <Typography
        sx={{
          fontSize: { sm: "25px", xs: "14px" },
          fontWeight: "400",
          color: "#fffff",
          lineHeight: "1.8",
          maxWidth: "800px",
          mx: "auto",
          mb: "2rem",
        }}
      >
        Join us as we bridge the gap between theory and practice, translating
        classroom knowledge into real-world open-source projects that make a
        difference.
      </Typography>

      {/* New "What Do We Do?" Section */}
      <Typography
        variant="h4"
        sx={{
          fontSize: { sm: "28px", xs: "20px" },
          fontWeight: "bold",
          color: "#e91e63",
          textAlign: "center",
          mb: "2rem",
        }}
      >
        What Do We Do?
      </Typography>

      {/* Point-wise list with Arrow icon */}
      <Box
        sx={{
          maxWidth: "800px",
          mx: "auto",
          textAlign: "left",
          lineHeight: "1.8",
        }}
      >
        <ul style={{ paddingLeft: "1rem" }}>
          <li style={{ display: "flex", alignItems: "center" }}>
            <ArrowForwardIcon sx={{ color: "#e91e63", mr: "0.5rem" }} />
            <Typography sx={{ fontSize: "18px", color: "#fffff" }}>
              Conduct workshops and events to spread awareness about FOSS tools
              and technologies.
            </Typography>
          </li>
          <li style={{ display: "flex", alignItems: "center" }}>
            <ArrowForwardIcon sx={{ color: "#e91e63", mr: "0.5rem" }} />
            <Typography sx={{ fontSize: "18px", color: "#fffff" }}>
              Host KathFOSS Hackathons, where students innovate and learn by
              building open-source solutions.
            </Typography>
          </li>
          <li style={{ display: "flex", alignItems: "center" }}>
            <ArrowForwardIcon sx={{ color: "#e91e63", mr: "0.5rem" }} />
            <Typography sx={{ fontSize: "18px", color: "#fffff" }}>
              Support students in collaborating on open-source projects and
              learning new tools and frameworks.
            </Typography>
          </li>
        </ul>
      </Box>

      {/* Line Divider */}
      <Divider
        sx={{
          my: "2rem",
          width: "80%",
          mx: "auto",
          borderColor: "#ccc",
          borderWidth: "1px",
        }}
      />

      {/* Highlights Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          flexWrap: "wrap",
          mb: "4rem",
        }}
      >
        {[
          {
            title: "Our Mission",
            description:
              "To empower individuals and organizations through open-source collaboration and innovation.",
          },
          {
            title: "Our Vision",
            description:
              "A world where knowledge and technology are freely accessible to everyone.",
          },
          {
            title: "Core Values",
            description: "Collaboration, transparency, and inclusivity.",
          },
        ].map((item, index) => (
          <Box
            key={index}
            sx={{
              maxWidth: "300px",
              textAlign: "left",
              border: "1px solid #ddd",
              borderRadius: "8px",
              p: "1.5rem",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              ":hover": {
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
              },
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "#e91e63",
                mb: "0.5rem",
              }}
            >
              {item.title}
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                color: "#fffff",
              }}
            >
              {item.description}
            </Typography>
          </Box>
        ))}
      </Box>

      <Button
        variant="contained"
        sx={{
          backgroundColor: "#e91e63",
          color: "#fff",
          px: "2rem",
          py: "0.8rem",
          fontSize: { sm: "16px", xs: "14px" },
          borderRadius: "25px",
          textTransform: "uppercase",
          fontWeight: "bold",
          ":hover": {
            backgroundColor: "#d81b60",
          },
        }}
        onClick={() => router.push("/")}
      >
        Go Back Home
      </Button>
    </Box>
  );
}
