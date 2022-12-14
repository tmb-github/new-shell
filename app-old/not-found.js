import Head from "components/MicroHead";
import SchemaBreadcrumbs from "components/SchemaBreadcrumbs";
import { default as u } from "public/scripts/modules/utilities";
import { notFound } from "next/navigation";

// Edit per page:
import CustomStyle from "custom-style/PageError404";
const pageName = "Error 404";

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

export default function NotFound() {
  return "Couldn't find requested resource";
}
/*

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
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32.
        </p>
        <SchemaBreadcrumbs
          breadcrumbArray={breadcrumbArray}
        ></SchemaBreadcrumbs>
      </main>
    </>
  );
}
*/
