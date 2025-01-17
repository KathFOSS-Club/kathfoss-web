import { Typography } from "@mui/material";
import React from "react";

interface FormatTimeProps {
  value: number;
  unit: string;
}
export default function FormatTime({ value, unit }: FormatTimeProps) {
  const formattedValue = String(value).padStart(2, "0"); // Ensures two digits
  return (
    <>
      <Typography variant="h2" sx={{ fontSize: "6vw" }}>
        {formattedValue}
        <Typography variant="body1" sx={{ fontSize: "2vh" }}>
          {value === 1 ? unit : `${unit}s`}
        </Typography>
      </Typography>
    </>
  );
}
