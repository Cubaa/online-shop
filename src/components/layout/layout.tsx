import React, { FC, useCallback, useEffect, useState } from "react";
import { Grid, ThemeProvider } from "@mui/material";
import { Outlet } from "react-router-dom";
import { MobileMenu } from "../mobile-menu/mobile-menu";
import { Navbar } from "../navbar/navbar";
import { useAuth } from "../../hooks/auth.hook";
import { layoutTheme } from "./layout.styled";

export const Layout: FC = () => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const { authenticate } = useAuth();

  useEffect(() => {
    authenticate();
  }, [authenticate]);

  const handleDrawerToggle = useCallback(() => {
    setMobileOpen(!mobileOpen);
  }, [mobileOpen]);

  return (
    <>
      <Navbar handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} />
      <MobileMenu mobileOpen={mobileOpen} />
      <ThemeProvider theme={layoutTheme}>
        <Grid container component="main">
          <Outlet />
        </Grid>
      </ThemeProvider>
    </>
  );
};
