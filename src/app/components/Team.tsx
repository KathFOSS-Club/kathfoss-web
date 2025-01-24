"use client";

import React, { useState } from "react";
import { Box, Typography, Button, Grid2 } from "@mui/material";
import Link from "next/link";
import { teamMembers } from "../data/meet-our-team";
import TeamMemberModal from "@/components/ui/MeetOurTeam/TeamMemberModal";
import { TeamMemberProps } from "@/type/team-memeber";
import TeamMember from "./ui/MeetOurTeam/TeamMember";

const Team = () => {
  const [open, setOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<TeamMemberProps | null>(
    null
  );

  const handleOpen = (member: TeamMemberProps) => {
    setSelectedMember(member);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedMember(null);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        padding: "2rem",
      }}
      id="team"
    >
      <Box sx={{ width: "100%", maxWidth: "1200px", margin: "0 auto" }}>
        <Typography
          variant="h2"
          component="h2"
          align="center"
          gutterBottom
          sx={{ fontWeight: "600", marginBottom: 3 }}
        >
          MEET OUR{" "}
          <Typography
            variant="h2"
            component="span"
            sx={{ color: "#009FE3", fontWeight: "600" }}
          >
            TEAM
          </Typography>
        </Typography>

        {/* Main Committee Section */}
        <Box sx={{ marginTop: 4 }}>
          <Grid2
            container
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(1, 1fr)",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
              },
              gap: { xs: 2, md: 2 },
              justifyItems: "center",
              padding: { xs: "0.5rem", md: "1rem" },
            }}
          >
            {teamMembers.mainCommittee.map((member, index) => (
              <TeamMember
                key={index}
                member={member}
                handleOpen={() => handleOpen(member)}
              />
            ))}
          </Grid2>
        </Box>

        <Box textAlign="center" mt={4}>
          <Link href="/team" passHref>
            <Button variant="contained" color="secondary">
              See More
            </Button>
          </Link>
        </Box>
      </Box>
      <TeamMemberModal
        open={open}
        handleClose={handleClose}
        member={selectedMember}
      />
    </Box>
  );
};

export default Team;
