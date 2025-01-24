import React from "react";
import { Box, Typography, Grid2 } from "@mui/material";
import { TeamMemberProps } from "@/type/team-memeber";
import Image from "next/image";

interface TeamMemberTypes {
  member: TeamMemberProps;
  handleOpen: (member: TeamMemberProps) => void;
}

const TeamMember = ({ member, handleOpen }: TeamMemberTypes) => {
  return (
    <Grid2 sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <Box
        onClick={() => handleOpen(member)}
        sx={{
          position: "relative",
          overflow: "hidden",
          width: "90%",
          maxWidth: { xs: 300, sm: 350 },
          cursor: "pointer",
          borderRadius: "8px",
          height: "350px",
          "&:hover img": {
            transform: "scale(1.1)",
          },
          "&:hover .hover-content": {
            opacity: 1,
          },
        }}
      >
        <Image
          src={member.image}
          alt={member.name}
          loading="lazy"
          fill
          style={{
            objectFit: "cover",
            borderRadius: "8px",
            transition: "transform 0.3s ease-in-out",
          }}
        />
        <Box
          className="hover-content"
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            width: "100%",
            background: "rgba(1,1,1, 0.3)",
            opacity: { xs: 1, md: 0 },
            color: "#FFF",
            padding: "1rem",
            textAlign: "center",
            transition: "opacity 0.3s ease-in-out", // Smooth fade-in
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontSize: { xs: "1rem", sm: "1.25rem" } }}
          >
            {member.name}
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem" } }}
          >
            {member.role}
          </Typography>
        </Box>
      </Box>
    </Grid2>
  );
};

export default TeamMember;
