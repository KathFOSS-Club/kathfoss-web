import { Box, Typography, Button } from "@mui/material";
import Timer from "./ui/Timer/Timer";

export default function HeroSection() {
  return (
    <Box
      sx={{
        textAlign: "center",
        my: "8rem",
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
          gap: { xs: "1rem", sm: "2rem" },
          marginTop: "4rem",
        }}
      >
        {/* Projects */}
        <Box
          sx={{
            textAlign: "center",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderRadius: "8px",
            padding: "1rem",
            minWidth: "120px",
          }}
        >
          <Typography
            variant="h3"
            sx={{ fontSize: { sm: "48px", xs: "32px" }, color: "#009FE3" }}
          >
            2
          </Typography>
          <Typography variant="h6" sx={{ color: "#fff" }}>
            Projects
          </Typography>
        </Box>

        {/* Contributors */}
        <Box
          sx={{
            textAlign: "center",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderRadius: "8px",
            padding: "1rem",
            minWidth: "120px",
          }}
        >
          <Typography
            variant="h3"
            sx={{ fontSize: { sm: "48px", xs: "32px" }, color: "#009FE3" }}
          >
            13
          </Typography>
          <Typography variant="h6" sx={{ color: "#fff" }}>
            Contributors
          </Typography>
        </Box>

        {/* Events Organized */}
        <Box
          sx={{
            textAlign: "center",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderRadius: "8px",
            padding: "1rem",
            minWidth: "120px",
          }}
        >
          <Typography
            variant="h3"
            sx={{ fontSize: { sm: "48px", xs: "32px" }, color: "#009FE3" }}
          >
            50+
          </Typography>
          <Typography variant="h6" sx={{ color: "#fff" }}>
            Events Organized
          </Typography>
        </Box>

        {/* Years Active */}
        <Box
          sx={{
            textAlign: "center",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderRadius: "8px",
            padding: "1rem",
            minWidth: "120px",
          }}
        >
          <Typography
            variant="h3"
            sx={{ fontSize: { sm: "48px", xs: "32px" }, color: "#009FE3" }}
          >
            15+
          </Typography>
          <Typography variant="h6" sx={{ color: "#fff" }}>
            Years Active
          </Typography>
        </Box>

        {/* Community Members */}
        <Box
          sx={{
            textAlign: "center",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderRadius: "8px",
            padding: "1rem",
            minWidth: "120px",
          }}
        >
          <Typography
            variant="h3"
            sx={{ fontSize: { sm: "48px", xs: "32px" }, color: "#009FE3" }}
          >
            500+
          </Typography>
          <Typography variant="h6" sx={{ color: "#fff" }}>
            Community Members
          </Typography>
        </Box>
      </Box>

      {/* Timer Component */}
      <Timer />
    </Box>
  );
}