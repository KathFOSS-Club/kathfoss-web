import { Typography } from "@mui/material";
import React from "react";

export default function FormatTime({ value }: { value: number }) {
  const formattedValue = String(value).padStart(2, "0"); // Ensures two digits
  return (
    <Typography
      sx={{
        fontSize: {
          xs: "2rem", // Smaller font size for extra-small screens
          sm: "3.6rem", // Default font size for small screens and above
        },
        textAlign: "center",
        lineHeight: {
          xs: "2.5rem", // Adjusted line height for smaller screens
          sm: "4rem", // Default line height for larger screens
        },
        backgroundColor: "secondary.main",
        fontFamily: "DS-Digital, sans-serif",
        width: {
          xs: "4rem", // Smaller width for extra-small screens
          sm: "6rem", // Default width for larger screens
        },
        paddingBottom: {
          xs: "8px", // Smaller padding for smaller screens
          sm: "12px", // Default padding for larger screens
        },
        borderRadius: 3,
      }}
    >
      {formattedValue}
    </Typography>
  );
}
