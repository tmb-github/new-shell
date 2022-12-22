//import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SiteHead from "../components/SiteHead";
import SchemaWebPage from "../components/SchemaWebPage";
import SchemaPerson from "../components/SchemaPerson";
import Script from "next/script";
import "../styles/individual-imports.css";
//import { getNamedRouteRegex } from "next/dist/shared/lib/router/utils/route-regex";
/*
export default function MyApp({ Component, pageProps }) {
  return (
    <main className={cabin.className}></main>
*/

import localFont from "@next/font/local";
const cabin = localFont({
  variable: "--cabin-font",
  src: [
    {
      path: "../fonts/Cabin-Roman-400.woff2",
      weight: "400",
      style: "normal",
      display: "swap",
    },

    {
      path: "../fonts/Cabin-Italic-400.woff2",
      weight: "400",
      style: "italic",
      display: "swap",
    },

    {
      path: "../fonts/Cabin-Bold-700.woff2",
      weight: "700",
      style: "normal",
      display: "swap",
    },

    {
      path: "../fonts/Cabin-Bold-Italic-700.woff2",
      weight: "700",
      style: "italic",
      display: "swap",
    },
  ],
});

const Layout = ({ children }) => (
  <>
    <SiteHead />
    <Header />
    <Script src="/scripts/common.js" strategy="beforeInteractive"></Script>
    {children}
    <Footer />
    <SchemaWebPage />
    <SchemaPerson />
  </>
);

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <style jsx global>{`
        html {
          font-family: ${cabin.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
