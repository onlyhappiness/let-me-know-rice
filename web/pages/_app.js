import FullLayout from "../components/layouts/FullLayout";
// import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <FullLayout>
        <Component {...pageProps} />
      </FullLayout>
    </>
  );
}

export default MyApp;
