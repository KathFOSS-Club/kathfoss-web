"use client";
import React from "react";
import { Box, Typography } from "@mui/material";

import TestimonialSlider from "./ui/Testimonials/TestimonialSlider";
import Testimonialmembers from "./ui/Testimonials/Testimonialmembers";

export default function Testimonial() {
  return (
    <Box sx={{ height: "120vh", marginTop: "5vh" , marginBottom:"12rem"}}>
      <Box
        sx={{
          height: "10vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h1">TESTIMONIALS</Typography>
      </Box>

      <Testimonialmembers />
      <TestimonialSlider />
    </Box>
  );
}
