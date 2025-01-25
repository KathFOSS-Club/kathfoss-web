"use client";

import React from "react";
import { Box, Typography, Button, Divider } from "@mui/material";
import Timer from "./ui/Timer/Timer";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const router = useRouter();

  return (
    <Box
      sx={{
        textAlign: "center",
        my: "8rem",
      }}
    >
      {/* Main Heading */}
      <Typography
        variant="h1"
        sx={{
          fontSize: { sm: "72px", xs: "45px" },
          fontWeight: "bold",
          letterSpacing: "4px",
          textTransform: "uppercase",
        }}
      >
        KATHFOSS
      </Typography>

      {/* Subtitle */}
      <Typography
        sx={{
          fontSize: { sm: "20px", xs: "12px" },
          fontWeight: "600",
          letterSpacing: "3px",
          color: "#898686",
          mt: "1rem",
        }}
      >
        “Code, Collaborate, Contribute”
      </Typography>

      {/* Timer */}
      <Timer />

      {/* Additional Section */}
      <Box
        sx={{
          mt: "6rem",
          textAlign: "center",
          px: "2rem",
        }}
      >
        {/* Description */}
        <Typography
          sx={{
            fontSize: { sm: "25px", xs: "20px" },
            fontWeight: "500",
            color: "#666",
            lineHeight: "1.8",
            mb: "2rem",
          }}
        >
          A community for open-source enthusiasts fostering collaboration and
          contribution.
        </Typography>

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

        {/* Statistics */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "3rem",
            flexWrap: "wrap",
          }}
        >
          {[
            { label: "Projects", value: "50+" },
            { label: "Contributors", value: "500+" },
            { label: "Events Organized", value: "40+" },
            { label: "Years Active", value: "15+" },
            { label: "Community Members", value: "500+" },
          ].map((stat, index) => (
            <Box key={index} sx={{ textAlign: "center" }}>
              <Typography
                variant="h4"
                sx={{
                  fontSize: { sm: "40px", xs: "28px" },
                  fontWeight: "bold",
                  color: "#333",
                }}
              >
                {stat.value}
              </Typography>
              <Typography
                sx={{
                  fontSize: { sm: "20px", xs: "16px" },
                  fontWeight: "500",
                  color: "#666",
                }}
              >
                {stat.label}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Call-to-Action Button */}
        <Button
          variant="contained"
          sx={{
            mt: "2rem",
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
          onClick={() => router.push("/about")}
        >
          ABOUT KATHFOSS
        </Button>
      </Box>
    </Box>
  );
}
