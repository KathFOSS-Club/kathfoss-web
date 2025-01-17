"use client";
import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import highlightBoxStyle from "./HighlightStyle";

export const EventsHighlight = () => {
  const imgs = [
    "/Images/home2.png",
    "/Images/search.png",
    "/Images/icons8-marketplace-48.png",
    "/Images/RAIN.png",
    "/Images/menu.png",
  ];
  const eventImages = [
    "/Images/home2.png",
    "/Images/search.png",
    "/Images/icons8-marketplace-48.png",
    "/Images/RAIN.png",
    "/Images/menu.png",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imgs.length);
    }, 3000); //  3 seconds

    return () => clearInterval(interval);
  }, [imgs.length]);

  return (
    <Box
      sx={{
        height: "150vh",
        width: "100vw",
        backgroundColor: "#0E1322",
        marginTop: "10vh",
        display: "flex-col",
      }}
    >
      {/* for "event highlight" */}
      <Box sx={{ width: "100%", height: "10vh", display: "flex" }}>
        <Typography
          sx={{
            margin: "auto",
            fontSize: "7vh",
            fontWeight: "400",
            fontFamily: "",
          }}
        >
          Event Highlights
        </Typography>
      </Box>

      {/* actual event highlights and horizontally scrolling pics */}
      <Box sx={{ height: "120vh", display: "flex-col" }}>
        <Box sx={{ height: "90vh", display: "flex-col" }}>
          <Box
            sx={{
              height: "45vh",
              width: "70vw",
              margin: "auto",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Box sx={highlightBoxStyle}>
              <Image
                src={eventImages[0]}
                width={500}
                height={500}
                alt="random image"
              />
            </Box>
            <Box sx={highlightBoxStyle}>
              <Image
                src={eventImages[1]}
                width={500}
                height={500}
                alt="random image"
              />
            </Box>
            <Box sx={highlightBoxStyle}>
              <Image
                src={eventImages[2]}
                width={500}
                height={500}
                alt="random image"
              />
            </Box>
          </Box>

          <Box
            sx={{
              height: "45vh",
              width: "70vw",
              margin: "auto",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Box sx={highlightBoxStyle}>
              <Image
                src={eventImages[3]}
                width={500}
                height={500}
                alt="random image"
              />
            </Box>
            <Box sx={highlightBoxStyle}>
              <Image
                src={eventImages[4]}
                width={500}
                height={500}
                alt="random image"
              />
            </Box>
          </Box>
        </Box>

        {/* Bottom-most box with self-sliding images */}
        <Box
          sx={{
            height: "60vh",
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              height: "40vh",
              width: "35vw",
              borderRadius: "10px",
              backgroundColor: "#111114",
              display: "flex",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <Box
              sx={{
                display: "flex",
                width: `${imgs.length * 100}%`,
                height: "100%",
                transform: `translateX(-${currentIndex * 100}%)`,
                transition: "transform 1s ease-in-out",
              }}
            >
              {imgs.map((src, index) => (
                <Box
                  key={index}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    flexShrink: "0",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src={src}
                    alt="random image"
                    height={500}
                    width={500}
                    style={{ transform: "scale(0.5,0.5)" }}
                  />
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

