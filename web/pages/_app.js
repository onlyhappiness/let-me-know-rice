import { ThemeProvider } from "@mui/material";
import FullLayout from "../components/layouts/FullLayout";
// import "../styles/globals.css";
import theme from "../theme/theme";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <FullLayout>
          <Component {...pageProps} />
        </FullLayout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
