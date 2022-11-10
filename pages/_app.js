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

const Layout = ({ children }) => (
  <>
    <SiteHead />
    <Header />
    <Script src="scripts/common.js" strategy="beforeInteractive"></Script>
    {children}
    <Footer />
    <SchemaWebPage />
    <SchemaPerson />
  </>
);

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
