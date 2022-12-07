import { Box } from "@mui/material";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

export const Logo: FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      component="img"
      sx={{
        content: {
          xs: "url(/os-big-logo.svg)",
          md: "url(/os-small-logo.svg)",
          lg: "url(/os-big-logo.svg)",
        },
        cursor: "pointer",
      }}
      alt="logo"
      width={{
        xs: "150px",
        md: "50px",
        lg: "150px",
      }}
      onClick={() => navigate("/")}
    ></Box>
  );
};
