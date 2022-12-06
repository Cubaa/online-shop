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
import { navMenuItems } from "../navbar/navbar.data";
import { INavMenuItem } from "../navbar/navbar.interface";
import { IMobileMenuProps } from "./mobile-menu.interface";
import { getDrawerTheme } from "./mobile-menu.styled";
import { SharedLanguageIcon } from "../../shared/language-icon/language-icon";

export const MobileMenu: FC<IMobileMenuProps> = (props) => {
  const { mobileOpen } = props;

  return (
    <ThemeProvider theme={getDrawerTheme(mobileOpen)}>
      <Drawer variant="permanent" open={mobileOpen} anchor="top">
        <List>
          {navMenuItems.map((item: INavMenuItem, index: number) => {
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
        </List>
        <SharedLanguageIcon />
      </Drawer>
    </ThemeProvider>
  );
};
