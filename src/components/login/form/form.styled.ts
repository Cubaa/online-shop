import { responsiveFontSizes, createTheme } from "@mui/material";

export const formTheme = responsiveFontSizes(
  createTheme({
    components: {
      MuiPaper: {
        defaultProps: {
          sx: {
            backgroundColor: "transparent",
            display: {
              xs: "flex",
              sm: "block",
            },
            justifyContent: {
              xs: "center",
              sm: "normal",
            },
            alignItems: {
              xs: "center",
              sm: "normal",
            },
            pt: {
              xs: 0,
              sm: 12,
            },
          },
        },
      },
      MuiFormHelperText: {
        styleOverrides: {
          root: {
            textAlign: "right",
            fontSize: "12px",
            fontFamily: "Inter, sans-serif",
            fontWeight: 500,
            "&.Mui-error": {
              color: "#FF0000",
            },
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            "&.Mui-focused": {
              color: "#0074D9;",
            },
            "&.Mui-error": {
              color: "#000",
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            border: 0,
          },
          root: {
            color: "#000",
            fontFamily: "Inter, sans-serif",
            backgroundColor: "#f1f5f9",
            paddingTop: 0,
            fontWeight: "500",
            "& ::placeholder": {
              fontSize: "0.8rem",
              letterSpacing: "0.1rem",
            },
          },
        },
      },
      MuiFormControlLabel: {
        styleOverrides: {
          root: {
            ".MuiTypography-root": {
              fontFamily: "Inter, sans-serif",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "14px",
            },
          },
        },
      },
      MuiButton: {
        defaultProps: {
          sx: {
            fontFamily: "'Inter', sans-serif",
            fontWeight: "500",
          },
        },
      },
    },
    typography: {
      h6: {
        fontFamily: "Inter, sans-serif",
        fontSize: "20px",
        color: "#0074D9",
        fontWeight: "700",
      },
      button: {
        fontSize: "1rem",
        textTransform: "none",
        fontWeight: "700",
      },
    },
  })
);
