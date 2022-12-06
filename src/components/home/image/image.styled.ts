import { createTheme, SxProps } from "@mui/material";

export const imageTheme = createTheme({
  components: {
    MuiGrid: {
      defaultProps: {
        sx: {
          pt: {
            xs: 0,
            sm: 2,
          },
          pl: {
            xs: 0,
            sm: 2,
          },
        },
      },
    },
  },
});

export const imageBox: SxProps = {
  width: "100%",
  height: {
    xs: "auto",
    sm: "500px",
  },
  objectFit: "cover",
  borderRadius: {
    xs: 0,
    sm: "10px",
  },
};
