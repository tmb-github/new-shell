import React from "react";
import Head from "components/MicroHead";
import SchemaBreadcrumbs from "components/SchemaBreadcrumbs";
import parse from "html-react-parser";
import Link from "next/link";

// Edit per page:
import CustomStyle from "custom-style/PageTheme";

// { params, searchParams }
export default function Main({ params }) {
  const theme = params.slug[0];
  const work = params.slug[1];
  /*
  console.log("theme: " + theme);
  console.log("work: " + work);
*/
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

  // Get the theme.mjs, which will hold an array of the works in the theme:
  return import(`./${theme}.mjs`).then(function ({ default: themeObject }) {
    // work is redefined below, so save it here:
    let displayWork = work;
    let displayWorkHtml = "";
    let workNav = [];

    let jsonStorage = `<section className="artwork-json-storage"><h2 className="screen-reader">JSON scripts (for internal use)</h2>`;

    // Use .map(), not .forEach() in Promise.all()
    // See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import
    return Promise.all(
      themeObject.works.map(function (work, index) {
        import(`../../../works/${work}.mjs`).then(function ({
          default: workObject,
        }) {
          workNav.push(
            <li className="display-inline" key={work + index}>
              <Link
                className="display-inline work-anchor"
                href={"/theme/" + theme + "/" + work}
                data-artwork-slug={work}
              >
                {work}
              </Link>
            </li>
          );

          jsonStorage +=
            `<script type="application/json" className="artwork-json" data-json-index="0" data-artwork-slug="${work}" data-artwork-title="${work}">{"article": "` +
            workObject.html +
            `"}</script>`;
          if (work === displayWork) {
            displayWorkHtml = workObject.html;
          }
        });
      })
    ).then(function () {
      jsonStorage += `</section>`;
      let artworkDisplay = `<section className="artwork-display display-noneX"><article className="selected-work">${displayWorkHtml}</article></section>`;
      return (
        <>
          <Head
            canonical={canonical}
            title={title}
            metaDescription={metaDescription}
            nonce={generatedNonce}
          ></Head>

          <main className={mainClasses} data-mjs={dataMjs}>
            <h1 tabIndex="-1" className="screen-reader">
              Theme Navigation and Display
            </h1>
            <section className="theme-display">
              <h2 className="theme-title" tabIndex="0" id="main-content">
                {theme}
              </h2>
              <nav
                className="theme-nav"
                aria-labelledby="image-based-artwork-navigation"
              >
                <h3
                  tabIndex="-1"
                  className="screen-reader"
                  id="image-based-artwork-navigation"
                >
                  Image-based Artwork Navigation
                </h3>
                <ul className="text-align-center">{workNav}</ul>
              </nav>
            </section>
            <CustomStyle></CustomStyle>
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
