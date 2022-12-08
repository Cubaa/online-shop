import { createTheme, Theme } from "@mui/material";

export const getDrawerTheme = (mobileOpen: boolean): Theme => {
  const drawerTheme = createTheme({
    components: {
      MuiDrawer: {
        styleOverrides: {
          root: {
            ".MuiDrawer-paper": {
              position: "fixed",
              boxSizing: "border-box",
              width: "100%",
              top: mobileOpen ? "60px" : "-100%",
              left: "0",
              zIndex: 1,
              transition: "all .3s cubic-bezier(0.4, 0, 0.2, 1) 0ms",
              boxShadow: "rgba(33, 35, 38, 1) 0px 5px 5px -5px",
            },
          },
        },
        defaultProps: {
          sx: {
            display: { xs: "flex", md: "none" },
          },
        },
      },
    },
    typography: {
      button: {
        fontFamily: "Inter",
        fontWeight: 700,
        fontSize: "0.8rem",
        color: "#0074D9",
        textAlign: "center",
      },
    },
  });

  return drawerTheme;
};
