import Head from "../../../components/MicroHead";
import SchemaBreadcrumbs from "../../../components/SchemaBreadcrumbs";
import { default as u } from "../../../public/scripts/modules/utilities";

// Edit per page:
import CustomStyle from "../../../custom-style/PageTheme";
const pageName = "Theme Three";

// definitions:
const appName = "Shell";
const baseHref = "https://localhost:3000/";
const pageCssName = "theme"; // u.kebabCase(pageName);
const dataMjs = "theme"; // u.camelCase(pageName);

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
          Eos quidem deleniti et illum repellendus aut voluptatem assumenda est
          quas ullam nam aspernatur quaerat aut mollitia necessitatibus est
          deleniti necessitatibus. Vel dignissimos pariatur ut fugiat totam sit
          galisum nostrum ea aliquam sapiente ea architecto consequatur vel
          fugit nesciunt.
        </p>
        <SchemaBreadcrumbs
          breadcrumbArray={breadcrumbArray}
        ></SchemaBreadcrumbs>
      </main>
    </>
  );
}
