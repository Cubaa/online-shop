import React, { FC } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth.hook";
import { navMenuGuestItems, navMenuUserItems } from "../navbar/navbar.data";
import { INavMenuItem } from "../navbar/navbar.interface";
import { IMobileMenuProps } from "./mobile-menu.interface";
import { getDrawerTheme } from "./mobile-menu.styled";

export const MobileMenu: FC<IMobileMenuProps> = (props) => {
  const { mobileOpen } = props;
  const { authenticated, logout } = useAuth();

  return (
    <ThemeProvider theme={getDrawerTheme(mobileOpen)}>
      <Drawer variant="permanent" open={mobileOpen} anchor="top">
        <List>
          {authenticated
            ? navMenuUserItems.map((item: INavMenuItem, index: number) => {
                return (
                  <ListItem
                    component={Link}
                    to={item.href}
                    key={index}
                    disablePadding
                  >
                    <ListItemButton>
                      <Typography variant="button">{item.title}</Typography>
                    </ListItemButton>
                  </ListItem>
                );
              })
            : navMenuGuestItems.map((item: INavMenuItem, index: number) => {
                return (
                  <ListItem
                    component={Link}
                    to={item.href}
                    key={index}
                    disablePadding
                  >
                    <ListItemButton>
                      <Typography variant="button">{item.title}</Typography>
                    </ListItemButton>
                  </ListItem>
                );
              })}
          {authenticated ? (
            <ListItem
              component={Link}
              to="/#"
              disablePadding
              onClick={() => logout()}
            >
              <ListItemButton>
                <Typography variant="button">Wyloguj się</Typography>
              </ListItemButton>
            </ListItem>
          ) : null}
        </List>
      </Drawer>
    </ThemeProvider>
  );
};
