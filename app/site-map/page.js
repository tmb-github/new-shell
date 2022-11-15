import Head from "../../components/MicroHead";
import SchemaBreadcrumbs from "../../components/SchemaBreadcrumbs";
import {default as u} from "../../public/scripts/modules/utilities"; 

// Edit per page:
import CustomStyle from "../../custom-style/PageSiteMap";
const pageName = "Site Map";

// definitions:
const appName = "Shell";
const baseHref = "https://localhost:3000/";
const pageCssName = u.kebabCase(pageName);
const dataMjs = u.camelCase(pageName);
// check this:
const urlSlug = pageCssName;

// derived definitions:
const appNameUC = appName.toUpperCase();
const canonical = baseHref + urlSlug;
const mainClasses = "main " + pageCssName;
const metaDescription = `${pageName} page description for ${appNameUC} application [70 characters are best here].`;
const title = `${pageName} | Shell`;

const breadcrumbArray = [
  {
    id: baseHref,
    name: "Home",
    imgUrl: `${baseHref}images/head/shell-115x35.jpg`,
  },
  {
    id: canonical,
    name: pageName,
    imgUrl: `${baseHref}images/head/shell-115x35.jpg`,
  },
];

const generatedNonce = process.env.generatedNonce;

export default function Main() {
  return (
    <>
      <Head
        canonical={canonical}
        title={title}
        metaDescription={metaDescription}
        nonce={generatedNonce}
      ></Head>

      <main className={mainClasses} data-mjs={dataMjs}>
        <h1 id="main-content" tabIndex="0">
          {pageName}
        </h1>
        <CustomStyle></CustomStyle>
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
