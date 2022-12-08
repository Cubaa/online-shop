import { createTheme } from "@mui/material";

export const productItemTheme = createTheme({
  components: {
    MuiListItem: {
      defaultProps: {
        sx: {
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "row",
          },
          justifyContent: "space-between",
          width: {
            xs: "100%",
            md: "400px",
          },
          px: 3,
          py: 2,
          mb: 1,
          backgroundColor: {
            xs: "#f1f5f9",
            md: "#fff",
          },
        },
      },
    },
  },
  typography: {
    body1: {
      fontFamily: "Inter, sans-serif",
      color: "#1976d2",
      fontWeight: "700",
    },
    body2: {
      fontFamily: "Inter, sans-serif",
      color: "#1976d2",
      fontWeight: "700",
    },
  },
});
