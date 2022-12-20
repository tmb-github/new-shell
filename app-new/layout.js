/* eslint-disable @next/next/no-sync-scripts */

import Head from "components/MacroHead";
import Header from "components/Header";
import Footer from "components/Footer";
import SchemaWebPage from "components/SchemaWebPage";
import SchemaPerson from "components/SchemaPerson";

// The font downloaded by this method does not match the .woff2 cabin font hosted locally:
// NB: You must NOT use a local @fontface definition if using this method.
/*
import { Cabin } from "@next/font/google";
const cabin = Cabin({
  variable: "--cabin-font",
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
  subsets: ["latin"],
  adjustFontFallback: false,
  fallback: ["arial"],
});
console.info(cabin);
*/

/*

// This seems to be the correct way to load fonts using the Next.js method.
// However, it fails to load all fonts.
// Disengaged 2022-12-03
// 
// NB: If used, define the font on the <html> tag, like this:
// <html lang="en-us" className={cabin.variable}>

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
*/

// https://github.com/vercel/next.js/discussions/41745
// className={myFont.className}
import "styles/individual-imports.css";

//console.info(process.env.generatedNonce);
const generatedNonce = process.env.generatedNonce;

// https://stackoverflow.com/questions/59318263/how-can-i-use-application-ldjson-in-nextjs

// className={cabin.variable}

// <html lang="en-us" className={cabin.variable}>

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
        <script src="/scripts/common.js"></script>
      </body>
    </html>
  );
}
