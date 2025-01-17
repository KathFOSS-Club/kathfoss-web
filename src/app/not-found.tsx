import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";

const NotFound = () => {
  return (
    <Box
      sx={{
        position: "relative",
        zIndex: 1,
        textAlign: "center",
        marginTop: "20%",
      }}
    >
      <Typography variant="h1">404</Typography>
      <Typography variant="h5">Page Not Found</Typography>
      <Link href="/" passHref>
        <Button variant="contained" color="primary" sx={{ marginTop: "20px" }}>
          Go to Home
        </Button>
      </Link>
    </Box>
  );
};

export default NotFound;
