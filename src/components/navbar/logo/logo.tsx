import { Box } from "@mui/material";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

export const Logo: FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      component="img"
      src="/logo-no-background.svg"
      alt="logo"
      width="150px"
      sx={{ cursor: "pointer" }}
      onClick={() => navigate("/")}
    ></Box>
  );
};
