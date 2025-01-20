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

      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}
      >
        <Box
          sx={{
            width: { md: "80%", xs: "100%" },
            overflow: { md: "hidden", xs: "none" },
          }}
        >
          <Carousel slides={imgs} />
        </Box>
      </Box>
    </Box>
  );
};
