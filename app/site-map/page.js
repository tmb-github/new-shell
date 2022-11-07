import Head from "../../components/MicroHead";
import SchemaBreadcrumbs from "../../components/SchemaBreadcrumbs";
const breadcrumbArray = [
  {
    id: "https://localhost:3000/",
    name: "Home",
    imgUrl:
      "https://localhost/shell/images/head/shell-115x35.20220913070722.jpg",
  },
  {
    id: "https://localhost:3000/site-map",
    name: "Site Map",
    imgUrl:
      "https://localhost/shell/images/head/shell-115x35.20220913070722.jpg",
  },
];

const mainClasses = "main site-map";

export default function SiteMap() {
  return (
    <>
      <Head
        canonical="https://localhost/shell/site-map"
        title="Site Map | Shell"
        metaDescription="Site Map page description for SHELL application [70 characters are best here]."
      ></Head>

      <main className={mainClasses}>
        <h1 id="main-content" tabIndex="0">
          Site Map
        </h1>
        <p>
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt
          mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis.
          Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a
          tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam
          ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus.
          Integer euismod lacus luctus magna. Quisque cursus, metus vitae
          pharetra auctor, sem massa mattis sem, at interdum magna augue eget
          diam.
        </p>
        <SchemaBreadcrumbs
          breadcrumbArray={breadcrumbArray}
        ></SchemaBreadcrumbs>
      </main>
    </>
  );
}
