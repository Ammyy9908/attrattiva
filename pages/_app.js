import "@/styles/globals.css";
import DefaultSEO from "./DefaultSEO";

export default function App({ Component, pageProps }) {
  return (
    <>
      <DefaultSEO />
      <Component {...pageProps} />
    </>
  );
}
