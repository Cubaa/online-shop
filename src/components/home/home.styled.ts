import { responsiveFontSizes, createTheme } from "@mui/material";

export const homeTheme = responsiveFontSizes(
  createTheme({
    components: {
      MuiGrid: {
        defaultProps: {
          sx: {
            minHeight: "calc(100vh - 66.36px)",
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
