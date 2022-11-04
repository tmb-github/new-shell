import Head from "../components/MicroHead";
import SchemaBreadcrumbs from "../components/SchemaBreadcrumbs";

const generatedNonce = process.env.generatedNonce;
const breadcrumbArray = [
  {
    id: "https://localhost:3000/",
    name: "home",
    imgUrl:
      "https://localhost/shell/images/head/shell-115x35.20220913070722.jpg",
  },
];
export default function Home() {
  return (
    <>
      <Head
        canonical="https://localhost/shell/"
        title="Home | Shell"
        metaDescription="Home page description for SHELL application [70 characters are best here]."
        nonce={generatedNonce}
      ></Head>
      <main>
        <h1>Home</h1>
        <p>Home page of Shell application</p>
        <SchemaBreadcrumbs
          breadcrumbArray={breadcrumbArray}
        ></SchemaBreadcrumbs>
      </main>
    </>
  );
}
