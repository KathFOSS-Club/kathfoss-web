import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";

const NotFound = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        padding: 4,
      }}
    >
      <Box sx={{ marginTop: "15rem" }}>
        <Typography variant="h1">404</Typography>
        <Typography variant="h5" gutterBottom>
          Page Not Found
        </Typography>
        <Link href="/" passHref>
          <Button variant="contained" color="primary">
            Go to Home
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default NotFound;
