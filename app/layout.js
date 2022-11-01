import Head from "../components/MacroHead";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en-us">
      <Head></Head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
