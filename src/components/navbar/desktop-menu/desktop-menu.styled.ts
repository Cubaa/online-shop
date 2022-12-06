import { createTheme } from "@mui/material";

export const desktopMenuTheme = createTheme({
  components: {
    MuiPaper: {
      defaultProps: {
        sx: {
          flexGrow: 1,
          display: { xs: "none", md: "flex" },
          justifyContent: "flex-end",
          gap: "10px",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        sx: {
          my: 2,
          color: "#0074D9",
          display: "block",
        },
      },
    },
  },
  typography: {
    button: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: "700",
      fontSize: "0.8rem",
    },
  },
});
