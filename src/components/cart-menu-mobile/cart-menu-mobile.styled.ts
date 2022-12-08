import { createTheme } from "@mui/material";

export const cartMenuMobileTheme = createTheme({
  components: {
    MuiDialog: {
      defaultProps: {
        sx: {
          width: "100%",
          display: {
            xs: "block",
            md: "none",
          },
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          display: "flex",
          justifyContent: "center",
          fontFamily: "Inter, sans-serif",
          color: "#1976d2",
          fontWeight: "700",
        },
      },
    },
    MuiList: {
      defaultProps: {
        sx: {
          py: 2,
          px: 2,
        },
      },
    },
  },
});
