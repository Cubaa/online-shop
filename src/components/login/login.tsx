import React, { FC } from "react";
import { Grid } from "@mui/material";
import { Form } from "./form/form";

export const Login: FC = () => {
  return (
    <Grid
      container
      component="section"
      justifyContent="center"
      bgcolor={{
        xs: "#fff",
        sm: "#f1f5f9",
      }}
    >
      <Form />
    </Grid>
  );
};
