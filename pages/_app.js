//import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SiteHead from "../components/SiteHead";
import SchemaWebPage from "../components/SchemaWebPage";
import SchemaPerson from "../components/SchemaPerson";

const Layout = ({ children }) => (
  <>
    <SiteHead></SiteHead>
    <Header />
    {children}
    <Footer />
    <SchemaWebPage></SchemaWebPage>
    <SchemaPerson></SchemaPerson>
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
