"use server";

import { Box } from "@mui/material";
import {
  EventsHighlight,
  Footer,
  Header,
  HeroSection,
  HighlightedProjects,
  Team,
  Contributors,
  UpcomingEvents,
  
} from "./components";
import React from "react";
import ContactUs from "./components/ContactUs";
import Testimonial from "./components/Testimonial";

export default async function Home() {
  return (
    <Box
      sx={{
        overflowX: "hidden",
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": {
          display: "none",
        },
        scrollBehavior: "smooth",
      }}
    >
      {/* Hero Section */}
      <HeroSection />

      {/* Event Highlights */}
      <EventsHighlight />

      {/* Upcoming Events */}
      <UpcomingEvents />

      {/* testtimonials */}
      <Testimonial />

      {/* Team */}
      <Team />

      {/* Highlighted Projects */}
      <HighlightedProjects />
    

      {/*contact */}
      <ContactUs />

      {/* Footer */}
      <Footer />
    </Box>
  );
}
