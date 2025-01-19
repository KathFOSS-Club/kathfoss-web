import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import Grid from "@mui/material/Grid2";

const events = [
  {
    title: "Introducing Ucharan AI",
    description: "Event details: 20th Jan, 2025",
    image: "/images/UpcomingEvents/ucharan-ai.png",
    link: "#",
  },
  {
    title: "Hackathon",
    description: "Event details: 28th June, 2025",
    image: "/images/UpcomingEvents/hackathon.png",
    link: "#",
  },
  {
    title: "Git/GitHub Python Workshop",
    description: "Event details: 10th Mar, 2025",
    image: "/images/UpcomingEvents/workshop.png",
    link: "#",
  },
];

const UpcomingEvents = React.memo(() => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography
        variant="h2"
        component="h2"
        align="center"
        gutterBottom
        sx={{ fontWeight: "600", marginBottom: 3 }}
      >
        UPCOMING EVENTS
      </Typography>

      <Grid container spacing={5} justifyContent="center" alignItems="center">
        {events.map(({ title, description, image, link }, index) => (
          <Grid key={index}>
            <Card
              sx={{
                maxWidth: 345,
                margin: "auto",
                borderRadius: "26px",
              }}
            >
              <Box
                component="div"
                sx={{
                  padding: "30px",
                  borderRadius: "20px",
                }}
              >
                <Box sx={{ overflow: "hidden", borderRadius: "inherit" }}>
                  <CardMedia
                    component="img"
                    image={image}
                    alt={title}
                    sx={{
                      transition: "transform 0.3s ease-in-out",
                      cursor: "pointer",
                      "&:hover": {
                        transform: "scale(1.15)",
                      },
                    }}
                  />
                </Box>
              </Box>

              <CardContent sx={{ textAlign: "left", marginBottom: "5px", px: "30px" }}>
                <Typography variant="h4" component="span" sx={{ fontWeight: "600" }}>
                  {title}
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: "500" }} color="text.secondary">
                  {description}
                </Typography>
              </CardContent>
              <Box sx={{ textAlign: "center", marginBottom: "20px" }}>
                <Button variant="outlined" href={link}>
                  REGISTER
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
});

export default UpcomingEvents;