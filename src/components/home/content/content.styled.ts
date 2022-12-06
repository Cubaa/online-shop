import { createTheme } from "@mui/material";

const theme = createTheme();

export const contentTheme = createTheme({
  typography: {
    body1: {
      fontFamily: "'Inter', sans-serif",
      color: "#686868",
      [theme.breakpoints.down("sm")]: {
        fontSize: "0.9rem",
      },
    },
  },
});
