/* eslint-disable @next/next/no-sync-scripts */

import Head from "../components/MacroHead";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SchemaWebPage from "../components/SchemaWebPage";
import SchemaPerson from "../components/SchemaPerson";
/*
import localFont from "@next/font/local";
const cabinRoman = localFont({
  src: "../fonts/Cabin-Roman-400.woff2",
  weight: "400",
  style: "normal",
  display: "swap",
});
const cabinItalic = localFont({
  src: "../fonts/Cabin-Italic-400.woff2",
  weight: "400",
  style: "italic",
  display: "swap",
});
const cabinBold = localFont({
  src: "../fonts/Cabin-Bold-700.woff2",
  weight: "700",
  style: "normal",
  display: "swap",
});
const cabinBoldItalic = localFont({
  src: "../fonts/Cabin-Bold-Italic-700.woff2",
  weight: "700",
  style: "italic",
  display: "swap",
});
*/

//import Script from "next/script";
// https://github.com/vercel/next.js/discussions/41745
// className={myFont.className}
import "../styles/individual-imports.css";

//console.info(process.env.generatedNonce);
const generatedNonce = process.env.generatedNonce;
/*
console.info([
  cabinRoman.className,
  cabinItalic.className,
  cabinBold.className,
  cabinBoldItalic.className,
]);
*/
// https://stackoverflow.com/questions/59318263/how-can-i-use-application-ldjson-in-nextjs

/*
import { Cabin } from "@next/font/google";

const cabin = Cabin({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});
*/

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
