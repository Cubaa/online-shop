import { createTheme, responsiveFontSizes } from "@mui/material";

export const productsTheme = responsiveFontSizes(
  createTheme({
    typography: {
      body1: {
        fontFamily: "Inter, sans-serif",
        fontWeight: 700,
        color: "#0074D9",
        paddingTop: "1rem",
      },
      body2: {
        fontFamily: "Inter, sans-serif",
        fontWeight: 700,
        color: "#0074D9",
      },
    },
  })
);
