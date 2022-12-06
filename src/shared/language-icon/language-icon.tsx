import React, { FC } from "react";
import { Box, IconButton, ThemeProvider } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import { languageIconTheme } from "./language-icon.styled";

export const SharedLanguageIcon: FC = () => {
  return (
    <ThemeProvider theme={languageIconTheme}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <IconButton
          size="large"
          aria-label="language icon"
          aria-controls="menu-appbar"
          aria-haspopup="true"
        >
          <LanguageIcon />
        </IconButton>
      </Box>
    </ThemeProvider>
  );
};
