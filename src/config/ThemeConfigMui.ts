"use client";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const MainTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#0E1322", // Correct hex color
    },
    secondary: {
      main: "#2A2936",
    },
    background: {
      default: "#0E1322",
      paper: "#181630",
    },
    text: {
      primary: "#FFFFFF", // Correct hex color
      secondary: "#898686",
    },
  },

  typography: {
    fontFamily: "'DM Sans', 'Arial', 'sans-serif'",
    h1: {
      fontWeight: 500,
      fontSize: "3rem",
      color: "#FFF",
    },
    h2: {
      fontWeight: 600,
      fontSize: "2rem",
      color: "#FFF",
    },
    h3: {
      fontWeight: 400,
      fontSize: "1.5rem",
      color: "#FFF",
    },
    body1: {
      fontSize: "1rem",
      color: "#FFF",
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          backgroundColor: "#120F26",
          color: "#000",
          padding: "16px",
          borderRadius: "8px",
          margin: "0",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          padding: "8px 16px",
        },
        containedPrimary: {
          backgroundColor: "#FFE401",
          color: "#000",
          "&:hover": {
            backgroundColor: "#FFD700",
          },
        },
        outlinedPrimary: {
          borderColor: "#FFE401",
          color: "#FFE401",
          "&:hover": {
            borderColor: "#FFD700",
            color: "#FFD700",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: "8px",
            "& fieldset": {
              borderColor: "#A0A0A0",
            },
            "&:hover fieldset": {
              borderColor: "#FFF",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#FFE401",
            },
          },
          "& .MuiInputLabel-root": {
            color: "#A0A0A0",
            "&.Mui-focused": {
              color: "#FFE401",
            },
          },
        },
      },
    },
  },
});

export const themeConfigMui = responsiveFontSizes(MainTheme, {
  breakpoints: ["xs", "sm", "md", "lg", "xl"],
  disableAlign: true,
  factor: 5,
});
