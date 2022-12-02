import Head from "../../../components/MicroHead";
import SchemaBreadcrumbs from "../../../components/SchemaBreadcrumbs";
import { default as u } from "../../../public/scripts/modules/utilities";

// Edit per page:
import CustomStyle from "../../../custom-style/PageTheme";
const pageName = "Theme One";

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
          Rem possimus voluptate qui voluptas consequatur eos officiis fuga. Ut
          magni quae ut voluptatem quas non optio odio sit galisum facilis et
          iste quia qui asperiores rerum At atque reiciendis.
        </p>
        <SchemaBreadcrumbs
          breadcrumbArray={breadcrumbArray}
        ></SchemaBreadcrumbs>
      </main>
    </>
  );
}
