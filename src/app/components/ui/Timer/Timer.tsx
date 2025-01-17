"use client";
import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import FormatTime from "./FormatTime";
import { TimeProps } from "@/type/Timer";

const calculateTimeDifference = (targetDate: Date): TimeProps | null => {
  const now = new Date();
  const difference = targetDate.getTime() - now.getTime();

  if (difference <= 0) return null; // Stop the countdown when the target date is reached

  const remainingDays = Math.floor(difference / (1000 * 60 * 60 * 24));
  const remainingHours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const remainingMinutes = Math.floor(
    (difference % (1000 * 60 * 60)) / (1000 * 60)
  );
  const remainingSeconds = Math.floor((difference % (1000 * 60)) / 1000);

  return {
    days: remainingDays,
    hours: remainingHours,
    minutes: remainingMinutes,
    seconds: remainingSeconds,
  };
};

export default function Timer() {
  const [time, setTime] = useState<TimeProps>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const targetDate = new Date("2025-01-17T17:30:00Z");

  useEffect(() => {
    const interval = setInterval(() => {
      const newTime = calculateTimeDifference(targetDate);
      if (newTime) {
        setTime(newTime);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        marginTop: "5rem",
      }}
    >
      <FormatTime value={time.days} />
      <Typography variant="h2">:</Typography>
      <FormatTime value={time.hours} />
      <Typography variant="h2">:</Typography>
      <FormatTime value={time.minutes} />
      <Typography variant="h2">:</Typography>
      <FormatTime value={time.seconds} />
    </Box>
  );
}
