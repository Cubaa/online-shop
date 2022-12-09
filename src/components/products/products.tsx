import React, { FC, useCallback, useState } from "react";
import { Grid, ThemeProvider } from "@mui/material";
import { useQuery } from "react-query";
import { IProduct } from "./products.interface";
import { AxiosError } from "axios";
import { getProducts } from "../../utils/get-products";
import { CircularLoader } from "../../shared/circular-loader/circular-loader";
import { ErrorScreen } from "../../shared/error-screen/error-screen";
import { ProductModal } from "../product-modal/product-modal";
import { productsTheme } from "./poducts.styled";
import { ProductDetails } from "./product-details/product-details";

export const Products: FC = () => {
  const {
    error,
    isLoading,
    data: products,
  } = useQuery<IProduct[], AxiosError>("products", getProducts);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [product, setProduct] = useState<IProduct | undefined>();

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
    <ThemeProvider theme={productsTheme}>
      <ProductModal
        open={isModalOpen}
        handleCloseModal={handleCloseModal}
        product={product}
      />
      <Grid container flexWrap="wrap" width="100%">
        <ProductDetails products={products} handleOpenModal={handleOpenModal} />
      </Grid>
    </ThemeProvider>
  );
};
