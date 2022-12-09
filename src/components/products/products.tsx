import React, { FC, useCallback, useState } from "react";
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
import { useQuery } from "react-query";
import { IProduct } from "./products.interface";
import { AxiosError } from "axios";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { useShoppingCart } from "../../hooks/shopping-cart.hook";
import { getProducts } from "../../utils/get-products";
import { CircularLoader } from "../../shared/circular-loader/circular-loader";
import { ErrorScreen } from "../../shared/error-screen/error-screen";
import { ProductModal } from "../product-modal/product-modal";

export const Products: FC = () => {
  const {
    error,
    isLoading,
    data: products,
  } = useQuery<IProduct[], AxiosError>("products", getProducts);
  const { addProductToCart } = useShoppingCart();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [product, setProduct] = useState<IProduct | undefined>();

  const addProduct = useCallback((product: IProduct) => {
    addProductToCart(product);
  }, []);

  const handleOpenModal = useCallback((product: IProduct) => {
    setIsModalOpen(true);
    setProduct(product);
  }, []);

  const handleCloseModal = useCallback((): void => {
    setIsModalOpen(false);
  }, []);

  if (isLoading) {
    return <CircularLoader />;
  }

  if (error) {
    return <ErrorScreen message={error.message} />;
  }

  return (
    <>
      <ProductModal
        open={isModalOpen}
        handleCloseModal={handleCloseModal}
        product={product}
      />
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
                <CardActionArea onClick={() => handleOpenModal(product)}>
                  <CardMedia
                    component="img"
                    height="174"
                    image={product.image}
                    alt="product"
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
                  <Button
                    variant="contained"
                    onClick={() => addProduct(product)}
                    endIcon={<AddOutlinedIcon />}
                  >
                    <Typography
                      variant="button"
                      fontFamily="'Inter', sans-serif"
                    >
                      Dodaj
                    </Typography>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};
