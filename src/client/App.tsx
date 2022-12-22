import React from "react";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import Router from "../routes";
import ThemeProvider from "../theme";
import ScrollToTop from "../utils/ScrollToTop";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <ScrollToTop />
        <Router />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
