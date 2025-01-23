"use server";

import { Box } from "@mui/material";
import {
  EventsHighlight,
  Footer,
  Header,
  HeroSection,
  HighlightedProjects,
  Team,
  UpcomingEvents,
  SponsorSection,
} from "./components";

import React from "react";
import ContactUs from "./components/ContactUs";

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
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Event Highlights */}
      <EventsHighlight />

      {/* Upcoming Events */}
      <UpcomingEvents />

      {/* Team */}
      <Team />

      {/* Sponsor Section */}
      <SponsorSection />

      {/* Highlighted Projects */}
      <HighlightedProjects />

      {/*contact */}
      <ContactUs />

      {/* Footer */}
      <Footer />
    </Box>
  );
}
