import React, { FC, useCallback } from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { IProduct } from "../products.interface";
import { useShoppingCart } from "../../../hooks/shopping-cart.hook";

interface IProductDetailsProps {
  products: IProduct[] | undefined;
  handleOpenModal: (product: IProduct) => void;
}

export const ProductDetails: FC<IProductDetailsProps> = (props) => {
  const { products, handleOpenModal } = props;
  const { addProductToCart } = useShoppingCart();

  const addProduct = useCallback((product: IProduct) => {
    addProductToCart(product);
  }, []);

  return (
    <>
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
              <CardActionArea onClick={() => handleOpenModal(product)}>
                <CardMedia
                  component="img"
                  height="174"
                  image={product.image}
                  alt="product"
                />
                <CardContent>
                  <Typography variant="body2">{product.title}</Typography>
                  <Typography variant="body1">Cena: {product.price}</Typography>
                </CardContent>
              </CardActionArea>
              <CardActions
                disableSpacing
                sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}
              >
                <Button
                  variant="contained"
                  onClick={() => addProduct(product)}
                  endIcon={<AddOutlinedIcon />}
                >
                  <Typography variant="button" fontFamily="'Inter', sans-serif">
                    Dodaj
                  </Typography>
                </Button>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </>
  );
};
