import React, { FC } from "react";
import { Grid, ThemeProvider, Typography } from "@mui/material";
import { contentTheme } from "./content.styled";

export const Content: FC = () => {
  return (
    <ThemeProvider theme={contentTheme}>
      <Grid item py={2} px={2} sm={6}>
        <Typography variant="h3">What is Lorem Ipsum?</Typography>
        <Typography variant="body1" pt={2}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          gravida fringilla aliquam. Integer id porta tellus. Suspendisse
          consequat interdum quam non auctor. Sed quis urna vitae augue dictum
          feugiat ut nec metus. Curabitur euismod mauris in eros ullamcorper
          hendrerit. Nunc et enim eget nibh cursus aliquam. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas. Curabitur porttitor purus quam, eu suscipit elit
          cursus eu. Phasellus ut nisi sed velit bibendum porta. Vestibulum
          mollis lorem a ipsum imperdiet bibendum. Duis aliquet et ligula
          posuere mollis. Nulla vitae pellentesque enim. In at aliquet erat. In
          maximus massa odio, vel tempus elit varius id. Integer viverra turpis
          vitae leo varius, ut congue orci efficitur. Duis sit amet urna vel
          neque pulvinar scelerisque id aliquam turpis. Quisque mollis sagittis
          erat. Nunc pellentesque nisi ut imperdiet facilisis. Phasellus ut
          turpis magna. Praesent feugiat aliquam libero. Vivamus sit amet ante
          et tellus viverra pretium. Etiam euismod ex ut massa finibus sagittis.
          Cras tempor, augue ac mattis pretium, arcu ipsum ultricies odio, id
          pharetra risus ipsum non urna. Quisque consectetur augue sit amet
          metus blandit aliquet vulputate vel erat. Nulla tincidunt velit eget
          lacus dapibus, quis blandit quam tempus. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Vivamus eu nulla a dui feugiat
          ullamcorper. Nam molestie ex fringilla enim dictum facilisis. In hac
          habitasse platea dictumst. Praesent vehicula, metus quis egestas
          blandit, mi libero accumsan sapien, eget condimentum ante metus sed
          libero. Mauris scelerisque, urna quis auctor pulvinar, purus risus
          egestas velit, sed facilisis leo dolor a magna. Phasellus quis tempus
          justo. Morbi venenatis accumsan sapien sit amet finibus. Mauris a
          justo eu quam imperdiet mollis ac at odio. Duis non urna consequat
          magna luctus tincidunt sit amet in eros. Proin mollis pretium ligula,
          sit amet placerat eros vehicula nec.
        </Typography>
      </Grid>
    </ThemeProvider>
  );
};
