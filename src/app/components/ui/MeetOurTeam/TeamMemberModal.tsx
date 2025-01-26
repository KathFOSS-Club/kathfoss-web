import React from "react";
import { Box, Typography, Modal, IconButton, Grow } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import Image from "next/image";
import { TeamMemberProps } from "@/type/team-memeber";

interface TeamMemberModalProps {
  open: boolean;
  handleClose: () => void;
  member: TeamMemberProps | null;
}

const TeamMemberModal: React.FC<TeamMemberModalProps> = ({
  open,
  handleClose,
  member,
}) => {
  if (!member) return null;

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          maxWidth: "800px",
          height: "600px",
          outline: "none",
          p: 2,
        }}
      >
        <Grow in={open} timeout={300}>
          <Box
            sx={{
              background:
                "linear-gradient(to bottom right, #0E1322 0%, #1A2138 100%)",
              color: "#FFF",
              borderRadius: "16px",
              padding: "3rem",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              position: "relative",
              display: "flex",
              gap: "2rem",
              height: "100%",
            }}
          >
            <IconButton
              onClick={handleClose}
              sx={{
                position: "absolute",
                top: 24,
                right: 24,
                color: "white",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                },
              }}
            >
              <CloseIcon />
            </IconButton>

            <Box
              sx={{
                flex: 1,
                minWidth: "300px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "400px",
                  borderRadius: "12px",
                  overflow: "hidden",
                  position: "relative",
                  mb: 3,
                }}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                  priority
                />
              </Box>

              <Box sx={{ display: "flex", gap: 2 }}>
                {member.socialMedia.linkedin && (
                  <IconButton
                    onClick={() =>
                      window.open(member.socialMedia.linkedin, "_blank")
                    }
                    sx={{
                      color: "#FFF",
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                      },
                    }}
                  >
                    <LinkedInIcon fontSize="large" />
                  </IconButton>
                )}
                {member.socialMedia.github && (
                  <IconButton
                    onClick={() =>
                      window.open(member.socialMedia.github, "_blank")
                    }
                    sx={{
                      color: "#FFF",
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                      },
                    }}
                  >
                    <GitHubIcon fontSize="large" />
                  </IconButton>
                )}
              </Box>
            </Box>

            <Box
              sx={{
                flex: 2,
                textAlign: "left",
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  mb: 1,
                  fontSize: "2.5rem",
                  lineHeight: 1.2,
                }}
              >
                {member.name}
              </Typography>

              <Typography
                variant="subtitle1"
                sx={{
                  color: "#7F8EA3",
                  mb: 3,
                  fontSize: "1.25rem",
                  fontWeight: 500,
                }}
              >
                {member.role}
              </Typography>

              <Box
                sx={{
                  flex: 1,
                  overflowY: "auto",
                  pr: 2,
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: "#B0B7C3",
                    fontSize: "1.1rem !important",
                    lineHeight: 1.8,
                    whiteSpace: "pre-line",
                  }}
                >
                  {member.description}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grow>
      </Box>
    </Modal>
  );
};

export default TeamMemberModal;
