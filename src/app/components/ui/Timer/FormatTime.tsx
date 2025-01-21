import { Typography } from "@mui/material";
import React from "react";

export default function FormatTime({ value }: { value: number }) {
  const formattedValue = String(value).padStart(2, "0"); // Ensures two digits
  return (
    <Typography
      sx={{
        fontSize: {
          xs: "2rem", 
          sm: "3.6rem",
        },
        textAlign: "center",
        lineHeight: {
          xs: "2.5rem", 
          sm: "4rem"
        },
        backgroundColor: "secondary.main",
        fontFamily: "DS-Digital, sans-serif",
        width: {
          xs: "4rem",
          sm: "6rem", 
        },
        paddingBottom: {
          xs: "8px", 
          sm: "12px",
        },
        borderRadius: 3,
      }}
    >
      {formattedValue}
    </Typography>
  );
}
