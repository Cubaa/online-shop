import { createTheme, responsiveFontSizes } from "@mui/material";

export const navbarTheme = responsiveFontSizes(
  createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            position: "relative",
            height: "100%",
            ":after": {
              content: '""',
              position: "absolute",
              bottom: 0,
              left: 0,
              display: "block",
              height: "2px",
              width: "0%",
              backgroundColor: "#0074D9",
              transition: "width .3s linear",
            },
            ":hover": {
              backgroundColor: "transparent",
            },
            ":hover:after": {
              width: "100%",
            },
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: "#fff",
            zIndex: 2,
            position: "sticky",
            top: 0,
            left: 0,
          },
        },
      },
      MuiContainer: {
        styleOverrides: {
          root: {
            display: "flex",
            flexDirection: "row",
          },
        },
      },
      MuiToolbar: {
        styleOverrides: {
          root: {
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          },
        },
        defaultProps: {
          sx: {
            minHeight: {
              xs: "66.36px",
            },
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            color: "#0074D9",
          },
        },
      },
    },
  })
);
