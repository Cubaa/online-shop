import { createTheme, responsiveFontSizes, Theme } from "@mui/material";

export const getNavbarTheme = (mobileOpen: boolean): Theme => {
  const theme = responsiveFontSizes(
    createTheme({
      components: {
        MuiPaper: {
          styleOverrides: {
            root: {
              paddingRight: "0 !important",
            },
          },
          defaultProps: {
            sx: {
              boxShadow: {
                xs: mobileOpen
                  ? "none"
                  : "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);",
                md: "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);",
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
              "&.MuiContainer-root": {
                padding: "0 20px",
              },
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
  return theme;
};
