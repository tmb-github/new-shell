import Head from "../components/MicroHead";
import SchemaBreadcrumbs from "../components/SchemaBreadcrumbs";
import {default as u} from "../public/scripts/modules/utilities"; 

// Edit per page:
import CustomStyle from "../custom-style/PageHome";
const pageName = "Home";

// definitions:
const appName = "Shell";
const baseHref = "https://localhost:3000/";
const pageCssName = u.kebabCase(pageName);
const dataMjs = u.camelCase(pageName);
// check this:
const urlSlug = "";

// derived definitions:
const appNameUC = appName.toUpperCase();
const canonical = baseHref + urlSlug;
const mainClasses = "main " + pageCssName;
const metaDescription = `${pageName} page description for ${appNameUC} application [70 characters are best here].`;
const title = `${pageName} | Shell`;

const breadcrumbArray = [
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

      <main className={mainClasses} data-mjs="home">
        <h1 id="main-content" tabIndex="0">
          {pageName}
        </h1>
        <CustomStyle></CustomStyle>

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

        <p className="roman">The quick brown fox jumped over the lazy dogs.</p>
        <p className="italic">The quick brown fox jumped over the lazy dogs.</p>
        <p className="bold">The quick brown fox jumped over the lazy dogs.</p>
        <p className="bold-italic">
          The quick brown fox jumped over the lazy dogs.
        </p>
        <SchemaBreadcrumbs
          breadcrumbArray={breadcrumbArray}
        ></SchemaBreadcrumbs>
      </main>
    </>
  );
}
