import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import { navMenuGuestItems, navMenuUserItems } from "../navbar/navbar.data";
import { INavMenuItem } from "../navbar/navbar.interface";
import { IMobileMenuProps } from "./mobile-menu.interface";
import { getDrawerTheme } from "./mobile-menu.styled";
import { SharedLanguageIcon } from "../../shared/language-icon/language-icon";
import { useAuth } from "../../hooks/auth.hook";

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
        <SharedLanguageIcon />
      </Drawer>
    </ThemeProvider>
  );
};
