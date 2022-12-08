import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { globalTheme } from "./global-theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={globalTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
