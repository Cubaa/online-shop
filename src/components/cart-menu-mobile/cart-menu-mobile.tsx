import React, { FC } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  List,
  ThemeProvider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useAuth } from "../../hooks/auth.hook";
import { useShoppingCart } from "../../hooks/shopping-cart.hook";
import { ListProducts } from "../../shared/list-products/list-products";
import { cartMenuMobileTheme } from "./cart-menu-mobile.styled";

export const CartMenuMobile: FC = () => {
  const { total, shoppingCart, isOpen, openShopppingCart } = useShoppingCart();
  const { authenticated } = useAuth();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <ThemeProvider theme={cartMenuMobileTheme}>
      <Dialog
        fullScreen={fullScreen}
        open={authenticated && isOpen}
        onClose={openShopppingCart}
        aria-labelledby="responsive-dialog-title"
        transitionDuration={200}
      >
        <DialogTitle id="responsive-dialog-title">
          {shoppingCart.length > 0
            ? `Suma: ${total.toFixed(2)}`
            : "Brak produktów"}
        </DialogTitle>
        <DialogContent>
          <List>
            <ListProducts />
          </List>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={openShopppingCart}
            autoFocus
            fullWidth
            variant="contained"
          >
            Zamknij
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
};
