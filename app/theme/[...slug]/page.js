import React from "react";
import Head from "components/MicroHead";
import SchemaBreadcrumbs from "components/SchemaBreadcrumbs";
import parse from "html-react-parser";

// Edit per page:
import CustomStyle from "custom-style/PageTheme";

// { params, searchParams }
export default function Main({ params }) {
  const theme = params.slug[0];
  const work = params.slug[1];

  console.log("theme: " + theme);
  console.log("work: " + work);

  const pageName = work ? `${work} | ${theme} | Theme` : `${theme} | Theme`;
  let pageHeading = work ? `${work}` : `${theme}`;

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

  // NB: We must use relative parths in import() statements.
  // We cannot rely on jsconfig.json absolute path to be resolved in those functions:

  return import(`./${theme}.mjs`).then(function ({ default: themeObject }) {
    let workNav = `<ul>`;
    let artworkDisplay = `<section class="artwork-display display-noneX"><article class="selected-work"></article></section>`;
    let jsonStorage = `<section class="artwork-json-storage"><h2 class="screen-reader">JSON scripts (for internal use)</h2>`;

    // Use .map(), not .forEach() in Promise.all()
    // See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import
    return Promise.all(
      themeObject.works.map(function (work) {
        import(`../../works/${work}.mjs`).then(function ({
          default: workObject,
        }) {
          workNav += `<li><a href="${theme}/${work}" class="work-anchor" data-artwork-slug="${work}">${work}</a></li>`;
          jsonStorage +=
            `<script type="application/json" class="artwork-json" data-json-index="0" data-artwork-slug="${work}" data-artwork-title="${work}">{"article": "` +
            workObject.html +
            `"}</script>`;
        });
      })
    ).then(function () {
      workNav += `</ul>`;
      jsonStorage += `</section>`;
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
              {pageHeading}
            </h1>
            <CustomStyle></CustomStyle>
            {parse(workNav)}
            {parse(artworkDisplay)}
            {parse(jsonStorage)}
            <SchemaBreadcrumbs
              breadcrumbArray={breadcrumbArray}
            ></SchemaBreadcrumbs>
          </main>
        </>
      );
    });
  });
}
