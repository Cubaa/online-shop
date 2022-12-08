import { createTheme } from "@mui/material";

export const globalTheme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          overflow: "auto !important",
          paddingRight: "0 !important",
        },
      },
    },
  },
});
