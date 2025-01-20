import { Box, Typography } from "@mui/material";
import Carousel from "@/app/components/ui/carousel";

export const EventsHighlight = () => {
  const imgs = [
    {
      title: "images",
      src: "/images/EventsHighlights/event-1.png",
    },
    {
      title: "images",
      src: "/images/EventsHighlights/event-2.png",
    },
    {
      title: "images",
      src: "/images/EventsHighlights/event-3.png",
    },
    {
      title: "images",
      src: "/images/EventsHighlights/event-4.png",
    },
    {
      title: "images",
      src: "/images/EventsHighlights/event-6.png",
    },
  ];

  return (
    <Box
      sx={{
        height: "150vh",
        marginTop: "10vh",
        display: "flex-col",
      }}
    >
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <Typography variant="h1">EVENT HIGHLIGHTS</Typography>
      </Box>

      <Box sx={{ display: "flex-col", marginTop: "2rem" }}>
        <Box>
          <Carousel slides={imgs} />
        </Box>
      </Box>
    </Box>
  );
};
