import React, { FC } from "react";
import { Box, Grid, ThemeProvider } from "@mui/material";
import { imageBox, imageTheme } from "./image.styled";

export const Image: FC = () => {
  const imageUrl = "https://picsum.photos/600/400";

  return (
    <ThemeProvider theme={imageTheme}>
      <Grid item sm={6}>
        <Box
          component="img"
          src={imageUrl}
          alt="random image"
          sx={imageBox}
        ></Box>
      </Grid>
    </ThemeProvider>
  );
};
