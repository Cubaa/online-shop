import React, { FC } from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Logo: FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      component="img"
      sx={{
        content: "url(/os-small-logo.svg)",
        cursor: "pointer",
      }}
      alt="logo"
      width="50px"
      onClick={() => navigate("/")}
    ></Box>
  );
};
