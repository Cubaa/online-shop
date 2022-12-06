import React, { FC, useCallback, useState } from "react";
import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import { MobileMenu } from "../mobile-menu/mobile-menu";
import { Navbar } from "../navbar/navbar";

export const Layout: FC = () => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const handleDrawerToggle = useCallback(() => {
    setMobileOpen(!mobileOpen);
  }, [mobileOpen]);

  return (
    <>
      <Navbar handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} />
      <MobileMenu mobileOpen={mobileOpen} />
      <Grid container component="main">
        <Outlet />
      </Grid>
    </>
  );
};
