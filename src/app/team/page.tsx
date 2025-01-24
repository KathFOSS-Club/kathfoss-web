"use client";

import React, { useState } from "react";
import { Header } from "../components";
import { Box, Typography, Grid2 } from "@mui/material";
import { teamMembers } from "../data/meet-our-team";
import { TeamMemberProps } from "@/type/team-memeber";
import TeamMember from "@/components/ui/MeetOurTeam/TeamMember";
import TeamMemberModal from "@/components/ui/MeetOurTeam/TeamMemberModal";

export default function MeetOurTeamPage() {
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
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          padding: "2rem",
        }}
      >
        <Box sx={{ width: "100%", maxWidth: "1400px", margin: "5rem auto" }}>
          <Typography
            variant="h2"
            component="h2"
            align="center"
            gutterBottom
            sx={{ fontWeight: "600", marginTop: 3 }}
          >
            MAIN{" "}
            <Typography
              variant="h2"
              component="span"
              sx={{ color: "#009FE3", fontWeight: "600" }}
            >
              COMMITTEE
            </Typography>
          </Typography>

          {/* Centered First Member */}
          <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
            <TeamMember
              member={teamMembers.mainCommittee[0]}
              handleOpen={handleOpen}
              key={0} // Ensure unique key
            />
          </Box>

          <Grid2
            container
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(1, 1fr)",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
                lg: "repeat(4, 1fr)",
              },
              gap: { xs: 1, md: 2 },
              justifyItems: "center",
              padding: { xs: "0.5rem", md: "1rem" },
            }}
          >
            {teamMembers.mainCommittee.slice(1).map((member, index) => (
              <TeamMember
                key={index + 1}
                member={member}
                handleOpen={handleOpen}
              />
            ))}
          </Grid2>
          <Typography
            variant="h2"
            component="h2"
            align="center"
            gutterBottom
            sx={{ fontWeight: "600", marginTop: 3 }}
          >
            PROJECT{" "}
            <Typography
              variant="h2"
              component="span"
              sx={{ color: "#009FE3", fontWeight: "600" }}
            >
              SUPERVISORS
            </Typography>
          </Typography>
          <br />
          <Grid2
            container
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(1, 1fr)",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
                lg: "repeat(4, 1fr)",
              },
              gap: { xs: 1, md: 2 },
              justifyItems: "center",
              padding: { xs: "0.5rem", md: "1rem" },
            }}
          >
            {teamMembers.projectSupervisors.map((member, index) => (
              <TeamMember key={index} member={member} handleOpen={handleOpen} />
            ))}
          </Grid2>
          <br />
          <Typography
            variant="h2"
            component="h2"
            align="center"
            gutterBottom
            sx={{ fontWeight: "600", marginTop: 3 }}
          >
            SOCIAL{" "}
            <Typography
              variant="h2"
              component="span"
              sx={{ color: "#009FE3", fontWeight: "600" }}
            >
              MEDIA{" "}
            </Typography>
            AND{" "}
            <Typography
              variant="h2"
              component="span"
              sx={{ color: "#009FE3", fontWeight: "600" }}
            >
              COMMUNICATIONS
            </Typography>
          </Typography>
          <br />
          <Grid2
            container
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(1, 1fr)",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
                lg: "repeat(4, 1fr)",
              },
              gap: { xs: 1, md: 2 },
              justifyItems: "center",
              padding: { xs: "0.5rem", md: "1rem" },
            }}
          >
            {teamMembers.socialMedia.map((member, index) => (
              <TeamMember key={index} member={member} handleOpen={handleOpen} />
            ))}
          </Grid2>
          <br />
          <Typography
            variant="h2"
            component="h2"
            align="center"
            gutterBottom
            sx={{ fontWeight: "600", marginTop: 3 }}
          >
            EXECUTIVE{" "}
            <Typography
              variant="h2"
              component="span"
              sx={{ color: "#009FE3", fontWeight: "600" }}
            >
              MEMBERS
            </Typography>
          </Typography>
          <br />
          <Grid2
            container
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(1, 1fr)",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
                lg: "repeat(4, 1fr)",
              },
              gap: { xs: 1, md: 2 },
              justifyItems: "center",
              padding: { xs: "0.5rem", md: "1rem" },
            }}
          >
            {teamMembers.executiveMembers.map((member, index) => (
              <TeamMember key={index} member={member} handleOpen={handleOpen} />
            ))}
          </Grid2>
          <br />
          <TeamMemberModal
            open={open}
            handleClose={handleClose}
            member={selectedMember}
          />
        </Box>
      </Box>
    </>
  );
}
