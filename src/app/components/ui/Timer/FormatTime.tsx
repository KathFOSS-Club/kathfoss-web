import { Typography } from "@mui/material";
import React from "react";

export default function FormatTime({ value }: { value: number }) {
  const formattedValue = String(value).padStart(2, "0"); // Ensures two digits
  return (
    <>
      <Typography
        variant="h1"
        sx={{
          textAlign: "center",
          lineHeight: "4rem",
          backgroundColor: "secondary.main",
          fontFamily: "DS-Digital",
          width: "6rem",
          paddingBottom: "12px",
        }}
      >
        {formattedValue}
      </Typography>
    </>
  );
}
