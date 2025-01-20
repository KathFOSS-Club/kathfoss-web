"use client";
import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Image from "next/image";
import highlightBoxStyle from "./HighlightStyle";
import Carousel from "@/components/ui/carousel";
import { title } from "process";
import { relative } from "path";
import { text } from "stream/consumers";

export const EventsHighlight = () => {
  const membersImages = [
    "/images/EventsHighlights/event-1.png",
    "/images/EventsHighlights/event-2.png",
    "/images/EventsHighlights/event-3.png",
    "/images/EventsHighlights/event-4.png",
    "/images/EventsHighlights/event-6.png",
  ];
  const imgs = [
    {
      title: "images",
      src: "/images/EventsHighlights/event-1.png",
      button: "btn",
    },
    {
      title: "images",
      src: "/images/EventsHighlights/event-2.png",
      button: "btn",
    },
    {
      title: "images",
      src: "/images/EventsHighlights/event-3.png",
      button: "btn",
    },
    {
      title: "images",
      src: "/images/EventsHighlights/event-4.png",
      button: "btn",
    },
    {
      title: "images",
      src: "/images/EventsHighlights/event-5.png",
      button: "btn",
    },
    {
      title: "images",
      src: "/images/EventsHighlights/event-6.png",
      button: "btn",
    },
  ];
  const [membersImagesIndex, setmembersImagesIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setmembersImagesIndex(
        (prevIndex) => (prevIndex + 1) % membersImages.length
      );
    }, 3000); //  3 seconds

    return () => clearInterval(interval);
  }, [membersImages.length]);

  return (
    <Box
      sx={{
        height: "150vh",
        marginTop: "10vh",
        display: "flex-col",
      }}
    >
      {/* for "event highlight" */}
      <Box sx={{ width: "100%", height: "10vh", display: "flex" }}>
        <Typography
          variant="h1"
          sx={{
            margin: "auto",
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
              height: "80vh",
              width: "100vw",
              margin: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* Display the 3 images based on current index */}
            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "space-evenly",
                alignItems: "center",
                transition: "transform 1s ease-in-out",
                position: "relative",
                overflow: "hidden",
                paddingY: "80px",
              }}
            >
              <Carousel slides={imgs} />
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
                width: `${membersImages.length * 100}%`,
                height: "100%",
                transform: `translateX(-${membersImagesIndex * 100}%)`,
                transition: "transform 1s ease-in-out",
              }}
            >
              {membersImages.map((src, index) => (
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
                    background: "#0E1322",
                  }}
                >
                  <Image
                    src={src}
                    alt="random image"
                    height={500}
                    width={500}
                    style={{ borderRadius: "50px" }}
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
