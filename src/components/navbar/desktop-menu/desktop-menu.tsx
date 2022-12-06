import React, { FC } from "react";
import { Button, Paper, ThemeProvider, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { SharedLanguageIcon } from "../../../shared/language-icon/language-icon";
import { navMenuItems } from "../navbar.data";
import { INavMenuItem } from "../navbar.interface";
import { desktopMenuTheme } from "./desktop-menu.styled";

export const DesktopMenu: FC = () => {
  return (
    <ThemeProvider theme={desktopMenuTheme}>
      <Paper elevation={0}>
        {navMenuItems.map((item: INavMenuItem, index: number) => {
          return (
            <Button key={index} component={Link} to={item.href} disableRipple>
              <Typography variant="button">{item.title}</Typography>
            </Button>
          );
        })}
        <SharedLanguageIcon />
      </Paper>
    </ThemeProvider>
  );
};
