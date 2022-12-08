import React, { FC } from "react";
import {
  AppBar,
  Box,
  Grid,
  IconButton,
  ThemeProvider,
  Toolbar,
} from "@mui/material";
import { INavbarProps } from "./navbar.interface";
import { DesktopMenu } from "./desktop-menu/desktop-menu";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { Logo } from "./logo/logo";
import { useAuth } from "../../hooks/auth.hook";
import { CartMenu } from "../cart-menu/cart-menu";
import { SharedLanguageIcon } from "../../shared/language-icon/language-icon";
import { getNavbarTheme } from "./navbar.styled";

export const Navbar: FC<INavbarProps> = (props) => {
  const { handleMobileMenuToggle, mobileOpen } = props;
  const { authenticated } = useAuth();

  return (
    <ThemeProvider theme={getNavbarTheme(mobileOpen)}>
      <AppBar>
        <Grid
          container
          component="nav"
          px={{
            xs: 2,
            md: 3,
          }}
        >
          <Toolbar disableGutters>
            <Logo />
            <DesktopMenu />
            <Grid container item justifyContent="flex-end" width="auto">
              <Box sx={{ display: "flex" }}>
                {authenticated ? <CartMenu /> : null}
                <SharedLanguageIcon />
              </Box>
              <Box
                sx={{
                  display: { xs: "flex", md: "none" },
                  justifyContent: "flex-end",
                }}
              >
                <IconButton
                  size="large"
                  aria-label="close or open mobile menu"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMobileMenuToggle}
                >
                  {mobileOpen ? <CloseIcon /> : <MenuOutlinedIcon />}
                </IconButton>
              </Box>
            </Grid>
          </Toolbar>
        </Grid>
      </AppBar>
    </ThemeProvider>
  );
};
