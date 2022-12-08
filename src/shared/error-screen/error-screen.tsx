import React, { FC } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { IErrorScreenProps } from "./error-screen.interface";

export const ErrorScreen: FC<IErrorScreenProps> = (props) => {
  const { message } = props;

  return (
    <Grid
      container
      bgcolor="#f1f5f9"
      width="100%"
      height="100%"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap={2}
      px={2}
    >
      <Box
        component="img"
        src="/error-image.svg"
        sx={{
          width: "100%",
          height: "400px",
        }}
      ></Box>
      <Typography variant="h5">{message}</Typography>
    </Grid>
  );
};
