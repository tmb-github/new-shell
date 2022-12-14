import React, { useState, useEffect } from "react";
import PageHead from "components/PageHead";
import SchemaBreadcrumbs from "components/SchemaBreadcrumbs";
import Link from "next/link";

// Edit per page:
import CustomStyle from "custom-style/PageTheme";

// definitions:
const appName = "Shell";
const baseHref = "https://localhost:3000/";
const appNameUC = appName.toUpperCase();
const pageCssName = "theme"; // u.kebabCase(pageName);
const dataMjs = "theme"; // u.camelCase(pageName);
const urlSlug = pageCssName;
const mainClasses = "main " + pageCssName;
const canonical = baseHref + urlSlug;

const generatedNonce = process.env.generatedNonce;

export default function Main() {
  const [workNav, setWorkNav] = useState([]);
  const [jsonStorage, setJsonStorage] = useState([]);
  const [artworkDisplay, setArtworkDisplay] = useState([]);
  const [windowInfo, setWindowInfo] = useState([]);

  useEffect(() => {
    const workNavTemp = [];
    const jsonStorageTemp = [];
    const artworkDisplayTemp = [];
    const windowInfoTemp = [];

    const urlParts = window.location.href.split("/").reverse();
    const theme = urlParts[2] === "theme" ? urlParts[1] : urlParts[0];
    const urlWork = urlParts[2] === "theme" ? urlParts[0] : "";
    const displayWork = urlWork;
    windowInfoTemp.push(theme, urlWork);

    //console.log(theme);
    //console.log(urlWork);

    import(`./${theme}.mjs`).then(function ({ default: themeObject }) {
      return Promise.all(
        themeObject.works.map(function (work, index) {
          import(`../../works/${work}.mjs`).then(function ({
            default: workObject,
          }) {
            workNavTemp.push(
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

            jsonStorageTemp.push(
              <script
                type="application/json"
                className="artwork-json"
                data-json-index="0"
                data-artwork-slug={work}
                data-artwork-title={work}
                key={"json" + work + index}
              >
                {`{"article": "${workObject.html}"}`}
              </script>
            );

            if (!artworkDisplayTemp.length || work === displayWork) {
              artworkDisplayTemp[0] = workObject.html;
            }
          });
        })
      ).then(() => {
        //window.setTimeout(function () {
        setWorkNav(workNavTemp);
        setJsonStorage(jsonStorageTemp);
        setArtworkDisplay(artworkDisplayTemp);
        setWindowInfo(windowInfoTemp);
        //}, 0);
      });
    });
  });

  const theme = windowInfo[0];
  const urlWork = windowInfo[1];

  const pageName = urlWork
    ? `${urlWork} | ${theme} | Theme`
    : `${theme} | Theme`;

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

  return (
    <>
      <PageHead
        canonical={canonical}
        title={title}
        metaDescription={metaDescription}
        nonce={generatedNonce}
      ></PageHead>
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
        <section className="artwork-display">
          <article
            className="selected-work"
            dangerouslySetInnerHTML={{ __html: artworkDisplay[0] }}
          ></article>
        </section>
        <section className="artwork-json-storage">
          <h2 className="screen-reader">JSON scripts (for internal use)</h2>
          {jsonStorage}
        </section>
        <SchemaBreadcrumbs
          breadcrumbArray={breadcrumbArray}
        ></SchemaBreadcrumbs>
      </main>
    </>
  );
}
