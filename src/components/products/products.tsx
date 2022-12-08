import React, { FC, useCallback } from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { useQuery } from "react-query";
import { IProduct } from "./products.interface";
import { AxiosError } from "axios";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { useShoppingCart } from "../../hooks/shopping-cart.hook";
import { getProducts } from "../../utils/get-products";
import { CircularLoader } from "../../shared/circular-loader/circular-loader";
import { ErrorScreen } from "../../shared/error-screen/error-screen";

export const Products: FC = () => {
  const {
    error,
    isLoading,
    data: products,
  } = useQuery<IProduct[], AxiosError>("products", getProducts);
  const { addProductToCart } = useShoppingCart();

  const addProduct = useCallback((product: IProduct) => {
    console.log(product);
    addProductToCart(product);
  }, []);

  if (isLoading) {
    return <CircularLoader />;
  }

  if (error) {
    return <ErrorScreen message={error.message} />;
  }

  return (
    <Grid container flexWrap="wrap" width="100%">
      {products?.map((product: IProduct, index: number) => {
        return (
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={3}
            xl={3}
            key={index}
            minHeight="auto"
          >
            <Card sx={{ m: 2 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="174"
                  image={product.image}
                  alt="recommended"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {product.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {product.price}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions
                disableSpacing
                sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}
              >
                <Box>
                  <Typography variant="body2">Dodaj</Typography>
                </Box>
                <IconButton
                  aria-label="share"
                  onClick={() => addProduct(product)}
                >
                  <AddOutlinedIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};
