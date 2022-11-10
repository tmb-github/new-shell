/* eslint-disable @next/next/no-sync-scripts */
import Head from "../components/MacroHead";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SchemaWebPage from "../components/SchemaWebPage";
import SchemaPerson from "../components/SchemaPerson";

//import Script from "next/script";
// https://github.com/vercel/next.js/discussions/41745

import "../styles/individual-imports.css";

//console.info(process.env.generatedNonce);
const generatedNonce = process.env.generatedNonce;

// https://stackoverflow.com/questions/59318263/how-can-i-use-application-ldjson-in-nextjs

export default function RootLayout({ children }) {
  return (
    <html lang="en-us">
      <Head nonce={generatedNonce} />
      <body className="body" data-orientation="initial">
        <Header />
        {children}
        <Footer />
        <SchemaWebPage />
        <SchemaPerson />
        <script src="scripts/common.js"></script>
      </body>
    </html>
  );
}
