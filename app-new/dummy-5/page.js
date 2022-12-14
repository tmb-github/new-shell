import Head from "components/MicroHead";
import SchemaBreadcrumbs from "components/SchemaBreadcrumbs";
import { default as u } from "public/scripts/modules/utilities";

// Edit per page:
import CustomStyle from "custom-style/PageDummy5";
const pageName = "Dummy 5";

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
          Sagittis purus sit amet volutpat consequat mauris nunc congue nisi. Id
          donec ultrices tincidunt arcu non sodales neque sodales ut. Pharetra
          sit amet aliquam id diam. Tellus at urna condimentum mattis
          pellentesque id nibh tortor. Turpis massa tincidunt dui ut ornare
          lectus sit amet est. Purus semper eget duis at tellus at. Odio euismod
          lacinia at quis risus sed vulputate. Scelerisque mauris pellentesque
          pulvinar pellentesque habitant. Adipiscing commodo elit at imperdiet
          dui. Ut sem viverra aliquet eget sit amet tellus cras adipiscing. Amet
          massa vitae tortor condimentum lacinia quis vel eros donec. Morbi quis
          commodo odio aenean sed adipiscing diam donec.
        </p>
        <SchemaBreadcrumbs
          breadcrumbArray={breadcrumbArray}
        ></SchemaBreadcrumbs>
      </main>
    </>
  );
}
