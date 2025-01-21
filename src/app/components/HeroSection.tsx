import { Box, Typography } from "@mui/material";
import Timer from "./ui/Timer/Timer";

export default function HeroSection() {
  return (
    <Box
      sx={{
        textAlign: "center",
        my: "8rem",
      }}
    >
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
      <Typography
        sx={{
          fontSize: { sm: "18px !important", xs: "10px" },
          fontWeight: "bold",
          letterSpacing: { sm: "6px", xs: "5px" },
          color: "#898686",
        }}
      >
        “Code, Collaborate, Contribute”
      </Typography>
      <Timer />
    </Box>
  );
}
