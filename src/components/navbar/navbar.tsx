import React, { FC } from "react";
import {
  AppBar,
  Box,
  Container,
  IconButton,
  ThemeProvider,
  Toolbar,
} from "@mui/material";
import { INavbarProps } from "./navbar.interface";
import { DesktopMenu } from "./desktop-menu/desktop-menu";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { navbarTheme } from "./navbar.styled";
import { Logo } from "./logo/logo";

export const Navbar: FC<INavbarProps> = (props) => {
  const { handleDrawerToggle, mobileOpen } = props;

  return (
    <ThemeProvider theme={navbarTheme}>
      <AppBar elevation={mobileOpen ? 0 : 1}>
        <Container component="nav" maxWidth="xl">
          <Toolbar disableGutters>
            <Logo />
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                justifyContent: "flex-end",
              }}
            >
              <IconButton
                size="large"
                aria-label="close or open mobile menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleDrawerToggle}
              >
                {mobileOpen ? <CloseIcon /> : <MenuOutlinedIcon />}
              </IconButton>
            </Box>
            <DesktopMenu />
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};
