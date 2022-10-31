//import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SiteHead from "../components/SiteHead";

const Layout = ({ children }) => (
  <>
    <SiteHead></SiteHead>
    <Header />
    {children}
    <Footer />
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
