import "@/styles/globals.css";
import GlobalStyle from "../src/theme/GlobalStyle";
import Head from "next/head";
export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
      
    </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
