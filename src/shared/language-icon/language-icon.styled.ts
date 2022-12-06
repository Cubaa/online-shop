import { createTheme } from "@mui/material";

export const languageIconTheme = createTheme({
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "#0074D9",
        },
      },
    },
  },
});
