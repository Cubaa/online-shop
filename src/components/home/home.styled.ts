import { responsiveFontSizes, createTheme } from "@mui/material";

export const homeTheme = responsiveFontSizes(
  createTheme({
    components: {
      MuiGrid: {
        defaultProps: {
          sx: {
            flexDirection: {
              xs: "column",
              sm: "row",
            },
          },
        },
      },
    },
    typography: {
      h3: {
        fontFamily: "'Inter', sans-serif",
      },
    },
  })
);
