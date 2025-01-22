import { Box, Typography } from "@mui/material";
import Carousel from "@/app/components/ui/carousel";
import { eventHighlights } from "@/app/data/event-highlights";

export const EventsHighlight = () => {
  return (
    <Box
      sx={{
        display: "block",
      }}
    >
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <Typography
          variant="h2"
          component="h2"
          align="center"
          gutterBottom
          sx={{ fontWeight: "600", marginBottom: 3 }}
        >
          EVENT{" "}
          <Typography
            variant="h2"
            component="span"
            sx={{ color: "#009FE3", fontWeight: "600" }}
          >
            HIGHLIGHTS
          </Typography>
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <Box>
          <Carousel slides={eventHighlights} />
        </Box>
      </Box>
    </Box>
  );
};
