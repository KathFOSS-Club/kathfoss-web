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
} from "./components";

import React from "react";

export default async function Home() {
  return (
    <Box>
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

      {/* Highlighted Projects */}
      <HighlightedProjects />

      {/* Footer */}
      <Footer />
    </Box>
  );
}
