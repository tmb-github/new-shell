import Head from "../components/MacroHead";
import Header from "../components/Header";
import Footer from "../components/Footer";
//import Script from "next/script";

//console.info(process.env.generatedNonce);
const generatedNonce = process.env.generatedNonce;

// https://stackoverflow.com/questions/59318263/how-can-i-use-application-ldjson-in-nextjs

export default function RootLayout({ children }) {
  return (
    <html lang="en-us">
      <Head nonce={generatedNonce}></Head>
      <body>
        <Header />
        {children}
        <Footer />
        <script
          id="schema-web-page"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              description: "Shell application: a sample SPA.",
              name: "John Q. Public",
              url: "https://shell.com/",
              dateModified: "2022-10-30T16:43:58+00:00",
            }),
          }}
        />
        <script
          id="schema-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            "@context": "https://schema.org",
            "@type": "Person",
            name: "John Q. Public",
            image:
              "https://localhost/shell/images/head/shell-1071px.20220913070857.jpg",
            url: "https://localhost/shell/dummy-1/",
            sameAs: [
              "https://www.facebook.com/shell/",
              "https://www.instagram.com/shell/",
              "https://www.pinterest.com/shell/",
              "https://twitter.com/shell",
            ],
          }}
        />
      </body>
    </html>
  );
}
