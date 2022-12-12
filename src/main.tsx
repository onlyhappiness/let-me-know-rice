import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ThemeProvider } from "@mui/material";
import theme from "./theme/theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    {/* </React.StrictMode> */}
  </Provider>
);
