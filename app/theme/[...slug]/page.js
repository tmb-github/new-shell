import React from "react";
import Head from "../../../components/MicroHead";
import SchemaBreadcrumbs from "../../../components/SchemaBreadcrumbs";
import parse from "html-react-parser";

// Edit per page:
import CustomStyle from "../../../custom-style/PageTheme";

// { params, searchParams }
export default function Main({ params }) {
  const theme = params.slug[0];
  const work = params.slug[1];

  const pageName = work ? `${work} | ${theme} | Theme` : `${theme} | Theme`;

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

  return import(`./${theme}.mjs`).then(function ({ default: themeObject }) {
    let themeHtml = "";
    return Promise.all(
      themeObject.works.map(function (work) {
        import(`../../works/${work}.mjs`).then(function ({
          default: workObject,
        }) {
          themeHtml += workObject.html;
        });
      })
    ).then(function () {
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
              {params.slug}
            </h1>
            <CustomStyle></CustomStyle>
            {parse(themeHtml)}
            <SchemaBreadcrumbs
              breadcrumbArray={breadcrumbArray}
            ></SchemaBreadcrumbs>
          </main>
        </>
      );
    });
  });
}
