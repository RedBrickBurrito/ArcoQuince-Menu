import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";

import App from "./App";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ededed",
    },
  },
});

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  rootElement
);
