import Head from "../components/MacroHead";
import Header from "../components/Header";
import Footer from "../components/Footer";

//console.info(process.env.generatedNonce);
const generatedNonce = process.env.generatedNonce;

export default function RootLayout({ children }) {
  return (
    <html lang="en-us">
      <Head nonce={generatedNonce}></Head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
