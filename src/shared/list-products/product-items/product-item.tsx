import React, { FC } from "react";
import { Box, ListItem, ThemeProvider, Typography } from "@mui/material";
import { productItemTheme } from "./product-item.styled";
import { IProductItemProps } from "./product-items.interface";

export const ProductItem: FC<IProductItemProps> = (props) => {
  const { product } = props;

  return (
    <ThemeProvider theme={productItemTheme}>
      <ListItem>
        <Box
          sx={{
            width: {
              xs: "100px",
              md: "40%",
            },
            height: {
              xs: "100%",
              md: "100px",
            },
          }}
        >
          <Box
            component="img"
            src={product.image}
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          ></Box>
        </Box>
        <Box p={2} width="100%">
          <Typography variant="body2">{product.title}</Typography>
          <Typography variant="body1">Cena: {product.price}</Typography>
        </Box>
        <Box sx={{ display: "flex", width: "auto" }}>
          <Typography variant="body1">x</Typography>
          <Typography variant="body1">{product.quantity}</Typography>
        </Box>
      </ListItem>
    </ThemeProvider>
  );
};
