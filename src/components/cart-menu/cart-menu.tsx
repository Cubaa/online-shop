import React, { FC, useCallback, useEffect, useRef } from "react";
import {
  Box,
  Grid,
  Grow,
  IconButton,
  Popper,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useShoppingCart } from "../../hooks/shopping-cart.hook";
import { getCartMenuTheme } from "./cart-menu.styled";
import { ListProducts } from "../../shared/list-products/list-products";

export const CartMenu: FC = () => {
  const { total, shoppingCart, openShopppingCart } = useShoppingCart();
  const anchorRef = useRef<HTMLButtonElement>(null);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const isOpen = Boolean(anchorEl);
  const prevOpen = useRef(isOpen);

  useEffect(() => {
    if (prevOpen.current === true && isOpen === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = isOpen;
  }, [isOpen]);

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(anchorEl ? null : event.currentTarget);
      openShopppingCart();
    },
    [anchorEl]
  );

  return (
    <ThemeProvider theme={getCartMenuTheme(shoppingCart)}>
      <Stack direction="row" spacing={2}>
        <Box>
          <IconButton
            ref={anchorRef}
            id="composition-button"
            aria-controls={isOpen ? "cart-menu" : undefined}
            aria-expanded={isOpen ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <ShoppingCartIcon sx={{ color: "#0074D9" }} />
          </IconButton>
          {isOpen && (
            <Popper
              open={isOpen}
              anchorEl={anchorEl}
              role={undefined}
              placement="bottom-start"
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === "bottom-start" ? "left top" : "left bottom",
                  }}
                >
                  <Grid container item>
                    <Box>
                      <ListProducts />
                      <Box>
                        {shoppingCart.length > 0 ? (
                          <Box>
                            <Typography variant="body1">
                              Suma: {total.toFixed(2)}
                            </Typography>
                          </Box>
                        ) : (
                          <Typography variant="body1">
                            Brak produktów
                          </Typography>
                        )}
                      </Box>
                    </Box>
                  </Grid>
                </Grow>
              )}
            </Popper>
          )}
          )
        </Box>
      </Stack>
    </ThemeProvider>
  );
};
