import React, { FC } from "react";
import { Button, Paper, ThemeProvider, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { SharedLanguageIcon } from "../../../shared/language-icon/language-icon";
import { navMenuGuestItems, navMenuUserItems } from "../navbar.data";
import { INavMenuItem } from "../navbar.interface";
import { desktopMenuTheme } from "./desktop-menu.styled";
import { useAuth } from "../../../hooks/auth.hook";

export const DesktopMenu: FC = () => {
  const { authenticated, logout } = useAuth();
  return (
    <ThemeProvider theme={desktopMenuTheme}>
      <Paper elevation={0}>
        {authenticated
          ? navMenuUserItems.map((item: INavMenuItem, index: number) => {
              return (
                <Button
                  key={index}
                  component={Link}
                  to={item.href}
                  disableRipple
                >
                  <Typography variant="button">{item.title}</Typography>
                </Button>
              );
            })
          : navMenuGuestItems.map((item: INavMenuItem, index: number) => {
              return (
                <Button
                  key={index}
                  component={Link}
                  to={item.href}
                  disableRipple
                >
                  <Typography variant="button">{item.title}</Typography>
                </Button>
              );
            })}
        {authenticated ? (
          <Button disableRipple onClick={() => logout()}>
            <Typography variant="button">Wyloguj się</Typography>
          </Button>
        ) : null}
        <SharedLanguageIcon />
      </Paper>
    </ThemeProvider>
  );
};
