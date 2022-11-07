import Head from "../components/MicroHead";
import SchemaBreadcrumbs from "../components/SchemaBreadcrumbs";

const generatedNonce = process.env.generatedNonce;
const breadcrumbArray = [
  {
    id: "https://localhost:3000/",
    name: "Home",
    imgUrl:
      "https://localhost/shell/images/head/shell-115x35.20220913070722.jpg",
  },
];

const mainClasses = "main home";

export default function Home() {
  return (
    <>
      <Head
        canonical="https://localhost/shell/"
        title="Home | Shell"
        metaDescription="Home page description for SHELL application [70 characters are best here]."
        nonce={generatedNonce}
      ></Head>
      <main className={mainClasses}>
        <h1 id="main-content" tabIndex="0">
          Home
        </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <SchemaBreadcrumbs
          breadcrumbArray={breadcrumbArray}
        ></SchemaBreadcrumbs>
      </main>
    </>
  );
}
