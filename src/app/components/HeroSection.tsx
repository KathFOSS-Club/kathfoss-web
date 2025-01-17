import { Box, Typography } from "@mui/material";
import Timer from "./ui/Timer/Timer";

export default function HeroSection() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Timer />
    </Box>
  );
}
