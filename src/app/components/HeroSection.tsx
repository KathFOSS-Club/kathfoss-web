import { Box, Typography, Button } from "@mui/material";
// import Timer from "./ui/Timer/Timer";

export default function HeroSection() {
  return (
    <Box
      sx={{
        textAlign: "center",
        marginTop: "8rem",
        padding: { xs: "1rem", sm: "2rem" },
      }}
    >
      {/* Main Heading */}
      <Typography
        variant="h1"
        sx={{
          fontSize: { sm: "72px !important", xs: "45px" },
          fontWeight: "bold",
          letterSpacing: { sm: "20px", xs: "10px" },
          paddingLeft: "16px",
        }}
      >
        KATHFOSS
      </Typography>

      {/* Tagline */}
      <Typography
        sx={{
          fontSize: { sm: "18px !important", xs: "10px" },
          fontWeight: "bold",
          letterSpacing: { sm: "6px", xs: "5px" },
          color: "#898686",
          marginTop: "1rem",
        }}
      >
        “Code, Collaborate, Contribute”
      </Typography>
      {/* Timer Component */}
      {/* <Timer /> */}
      {/* About Us Section */}
      <Box id="about-us" sx={{ marginTop: "4rem" }}>
        <Typography
          variant="h6"
          sx={{
            fontSize: { sm: "24px", xs: "16px" },
            fontWeight: "normal",
            color: "#fff",
            marginTop: "2rem",
            maxWidth: "800px",
            margin: "2rem auto",
            lineHeight: "1.6",
          }}
        >
          A community for open-source enthusiasts fostering collaboration and
          contribution.
        </Typography>
      </Box>

      {/* Statistics Section */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: { xs: "0.75rem", sm: "2rem" },
          marginTop: { xs: "2rem", sm: "4rem" },
          px: { xs: 1, sm: 0 },
        }}
      >
        {/* Projects */}
        <Box
          sx={{
            textAlign: "center",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderRadius: "8px",
            padding: { xs: "0.75rem", sm: "1rem" },
            minWidth: { xs: "calc(50% - 0.75rem)", sm: "120px" },
            maxWidth: { xs: "calc(50% - 0.75rem)", md: "none" },
            boxSizing: "border-box",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "32px", sm: "48px" },
              lineHeight: { xs: 1.2, sm: 1.5 },
              color: "#009FE3",
            }}
          >
            2
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#fff",
              fontSize: { xs: "0.875rem", sm: "1rem" },
              lineHeight: { xs: 1.2, sm: 1.5 },
              whiteSpace: "nowrap",
            }}
          >
            Projects
          </Typography>
        </Box>

        {/* Contributors */}
        <Box
          sx={{
            textAlign: "center",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderRadius: "8px",
            padding: { xs: "0.75rem", sm: "1rem" },
            minWidth: { xs: "calc(50% - 0.75rem)", sm: "120px" },
            maxWidth: { xs: "calc(50% - 0.75rem)", md: "none" },
            boxSizing: "border-box",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "32px", sm: "48px" },
              lineHeight: { xs: 1.2, sm: 1.5 },
              color: "#009FE3",
            }}
          >
            13
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#fff",
              fontSize: { xs: "0.875rem", sm: "1rem" },
              lineHeight: { xs: 1.2, sm: 1.5 },
              whiteSpace: "nowrap",
            }}
          >
            Contributors
          </Typography>
        </Box>

        {/* Events Organized */}
        <Box
          sx={{
            textAlign: "center",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderRadius: "8px",
            padding: { xs: "0.75rem", sm: "1rem" },
            minWidth: { xs: "calc(50% - 0.75rem)", sm: "120px" },
            maxWidth: { xs: "calc(50% - 0.75rem)", md: "none" },
            boxSizing: "border-box",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "32px", sm: "48px" },
              lineHeight: { xs: 1.2, sm: 1.5 },
              color: "#009FE3",
            }}
          >
            50+
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#fff",
              fontSize: { xs: "0.875rem", sm: "1rem" },
              lineHeight: { xs: 1.2, sm: 1.5 },
              whiteSpace: "nowrap",
            }}
          >
            Events Organized
          </Typography>
        </Box>

        {/* Years Active */}
        <Box
          sx={{
            textAlign: "center",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderRadius: "8px",
            padding: { xs: "0.75rem", sm: "1rem" },
            minWidth: { xs: "calc(50% - 0.75rem)", sm: "120px" },
            maxWidth: { xs: "calc(50% - 0.75rem)", md: "none" },
            boxSizing: "border-box",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "32px", sm: "48px" },
              lineHeight: { xs: 1.2, sm: 1.5 },
              color: "#009FE3",
            }}
          >
            15+
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#fff",
              fontSize: { xs: "0.875rem", sm: "1rem" },
              lineHeight: { xs: 1.2, sm: 1.5 },
              whiteSpace: "nowrap",
            }}
          >
            Years Active
          </Typography>
        </Box>

        {/* Community Members */}
        <Box
          sx={{
            textAlign: "center",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderRadius: "8px",
            padding: { xs: "0.75rem", sm: "1rem" },
            minWidth: { xs: "calc(50% - 0.75rem)", sm: "120px" },
            maxWidth: { xs: "calc(50% - 0.75rem)", md: "none" },
            boxSizing: "border-box",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "32px", sm: "48px" },
              lineHeight: { xs: 1.2, sm: 1.5 },
              color: "#009FE3",
            }}
          >
            500+
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#fff",
              fontSize: { xs: "0.875rem", sm: "1rem" },
              lineHeight: { xs: 1.2, sm: 1.5 },
              whiteSpace: "nowrap",
            }}
          >
            Community Members
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
