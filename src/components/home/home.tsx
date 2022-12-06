import React, { FC } from "react";
import { Grid, ThemeProvider } from "@mui/material";
import { Content } from "./content/content";
import { homeTheme } from "./home.styled";
import { Image } from "./image/image";

export const Home: FC = () => {
  return (
    <ThemeProvider theme={homeTheme}>
      <Grid container component="section">
        <Image />
        <Content />
      </Grid>
    </ThemeProvider>
  );
};
