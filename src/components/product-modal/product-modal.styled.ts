import { createTheme, responsiveFontSizes } from "@mui/material";

export const productModalTheme = responsiveFontSizes(
  createTheme({
    components: {
      MuiModal: {
        styleOverrides: {
          root: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
        },
      },
      MuiCard: {
        defaultProps: {
          sx: {
            width: {
              xl: "40%",
              lg: "60%",
              md: "70%",
              sm: "85%",
              xs: "90%",
            },
            display: "flex",
            alignItems: "center",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            p: 2,
            height: {
              xs: 600,
              md: "auto",
            },
            overflowY: "auto",
          },
        },
      },
      MuiCardMedia: {
        defaultProps: {
          sx: {
            height: {
              xs: "100%",
              md: "200px",
            },
            width: "100%",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            width: "100%",
            padding: "0.5rem 3rem",
          },
        },
      },
      MuiCardActions: {
        defaultProps: {
          sx: {
            width: {
              xs: "90%",
              sm: "70%",
              md: "30%",
            },
          },
        },
      },
    },
    typography: {
      h5: {
        fontFamily: "Inter, sans-serif",
        fontWeight: 700,
        color: "#0074D9",
      },
      body1: {
        fontFamily: "Inter, sans-serif",
        fontWeight: 500,
        color: "#0074D9",
        textTransform: "uppercase",
      },
      body2: {
        fontFamily: "Inter, sans-serif",
        fontWeight: 500,
        color: "#0074D9",
        paddingTop: "1rem",
      },
    },
  })
);
