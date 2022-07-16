import Head from "next/head";
import { ThemeProvider } from "@mui/material";
import FullLayout from "../components/layouts/FullLayout";
import theme from "../theme/theme";
// import "../styles/globals.css";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>밥 줘</title>
      </Head>
      <>
        {/* <Script
    			strategy="beforeInterative"
    			src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_MAP_KEY}`}
    		></Script> */}
        <ThemeProvider theme={theme}>
          <FullLayout>
            <Component {...pageProps} />
          </FullLayout>
        </ThemeProvider>
      </>
    </>
  );
}

export default MyApp;
