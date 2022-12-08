import React, { FC, useCallback, useEffect, useState } from "react";
import { Grid, ThemeProvider } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/auth.hook";
import { MobileMenu } from "../mobile-menu/mobile-menu";
import { Navbar } from "../navbar/navbar";
import { layoutTheme } from "./layout.styled";
import { CartMenuMobile } from "../cart-menu-mobile/cart-menu-mobile";

export const Layout: FC = () => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const { authenticate } = useAuth();

  useEffect(() => {
    authenticate();
  }, [authenticate]);

  const handleMobileMenuToggle = useCallback(() => {
    setMobileOpen(!mobileOpen);
  }, [mobileOpen]);

  return (
    <>
      <Navbar
        handleMobileMenuToggle={handleMobileMenuToggle}
        mobileOpen={mobileOpen}
      />
      <MobileMenu mobileOpen={mobileOpen} />
      <CartMenuMobile />
      <ThemeProvider theme={layoutTheme}>
        <Grid container component="main">
          <Outlet />
        </Grid>
      </ThemeProvider>
    </>
  );
};
