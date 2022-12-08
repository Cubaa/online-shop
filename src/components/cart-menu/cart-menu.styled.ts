import { createTheme, Theme } from "@mui/material";
import { IProduct } from "../products/products.interface";

export const getCartMenuTheme = (shoppingCart: IProduct[]): Theme => {
  const theme = createTheme({
    components: {
      MuiStack: {
        defaultProps: {
          sx: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
        },
      },
      MuiGrid: {
        styleOverrides: {
          root: {
            height: "300px",
            overflowY: "scroll",
            boxShadow:
              "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
          },
        },
        defaultProps: {
          sx: {
            height: shoppingCart.length > 0 ? "200px" : "auto",
            backgroundColor: "#f1f5f9",
            py: 2,
            px: 2,
            overflowY: shoppingCart.length > 0 ? "scroll" : " auto",
          },
        },
      },
      MuiPopper: {
        defaultProps: {
          sx: {
            display: {
              xs: "none",
              md: "flex",
            },
          },
        },
      },
    },
    typography: {
      body1: {
        fontFamily: "'Inter', sans-serif",
        color: "#1976d2",
        fontWeight: "700",
      },
      body2: {
        fontFamily: "'Inter', sans-serif",
        color: "#1976d2",
        fontWeight: "700",
      },
    },
  });
  return theme;
};
