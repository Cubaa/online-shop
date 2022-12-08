import React, { FC } from "react";
import { CircularProgress, Grid } from "@mui/material";

export const CircularLoader: FC = () => {
  return (
    <Grid
      container
      bgcolor="#f1f5f9"
      height="100%"
      width="100%"
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <CircularProgress />
    </Grid>
  );
};
