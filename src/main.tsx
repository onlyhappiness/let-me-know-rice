import React from "react";
import ReactDOM from "react-dom/client";
import App from "./client/App";

import { Provider } from "react-redux";
import { store } from "./redux/store";
// import { ThemeProvider } from "@mui/material";
// import theme from "./theme/theme";
import ScrollToTop from "./utils/ScrollToTop";
import ThemeProvider from "./theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Provider>
);
