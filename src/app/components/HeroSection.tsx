import { Box } from "@mui/material";
import Timer from "./ui/Timer/Timer";

export default function HeroSection() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", marginBottom: 8 }}>
      <Timer />
    </Box>
  );
}
