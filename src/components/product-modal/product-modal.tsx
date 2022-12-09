import React, { FC } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Modal,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { productModalTheme } from "./product-modal.styled";
import { IProductModalProps } from "./product-modal.interface";

export const ProductModal: FC<IProductModalProps> = (props) => {
  const { product, open, handleCloseModal } = props;

  return (
    <ThemeProvider theme={productModalTheme}>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card>
          <CardMedia component="img" alt="product" image={product?.image} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <CardContent>
              <Box>
                <Typography gutterBottom variant="h5" component="div">
                  {product?.title}
                </Typography>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems={{
                    xs: "flex-start",
                    md: "center",
                  }}
                  flexDirection={{
                    xs: "column",
                    md: "row",
                  }}
                >
                  <Typography variant="body1">{product?.category}</Typography>
                  <Typography variant="body2" pt={0} fontWeight="700">
                    Ocena: {product?.rating.rate}
                  </Typography>
                  <Typography variant="body2" pt={0} fontWeight="700">
                    {product?.rating.count} szt.
                  </Typography>
                </Box>
              </Box>
              <Typography variant="body2" color="text.secondary">
                {product?.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                onClick={handleCloseModal}
                variant="contained"
              >
                Zamknij
              </Button>
            </CardActions>
          </Box>
        </Card>
      </Modal>
    </ThemeProvider>
  );
};
