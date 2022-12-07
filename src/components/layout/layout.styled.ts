import { createTheme } from "@mui/material";

export const layoutTheme = createTheme({
  components: {
    MuiGrid: {
      styleOverrides: {
        root: {
          minHeight: "calc(100vh - 66.36px)",
          backgroundColor: "#f1f5f9",
        },
      },
    },
  },
});
