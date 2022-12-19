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
  // If navigating directly to this page, we cannot use window.location.href
  // If navigating here from a different page, window object will be available:
  let href = typeof window === "undefined" ? "" : window.location.href;
  const [windowLocationHref, setWindowLocationHref] = useState(href); //useState([]);

  // set to true to log info to console
  let testing = true;

  // Update windowLocationHref if the URL has changed
  // This will trigger useEffect()
  useEffect(() => {
    if (windowLocationHref !== window.location.href) {
      if (testing) {
        console.log(window.location.href);
      }
      setWindowLocationHref(window.location.href);
    }
  });

  useEffect(() => {
    if (testing) {
      console.log("useEffect: imports");
    }
    const workNavTemp = [];
    const jsonStorageTemp = [];
    const artworkDisplayTemp = [];
    const windowInfoTemp = [];

    const urlParts = window.location.href.split("/").reverse();
    const theme = urlParts[2] === "theme" ? urlParts[1] : urlParts[0];
    const urlWork = urlParts[2] === "theme" ? urlParts[0] : "";
    const displayWork = urlWork;

    windowInfoTemp.push(theme, urlWork);

    import(`./${theme}.mjs`).then(({ default: themeObject }) => {
      Promise.all(
        themeObject.works.map(async function (work, index) {
          // we must use await here to ensure the works are returned in order
          return await import(`../../works/${work}.mjs`).then(function ({
            default: workObject,
          }) {
            if (testing) {
              console.log("useEffect: " + work);
            }
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
        setWorkNav(workNavTemp);
        setJsonStorage(jsonStorageTemp);
        setArtworkDisplay(artworkDisplayTemp);
        setWindowInfo(windowInfoTemp);
      });
    });
  }, [windowLocationHref]);

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

  if (testing) {
    console.log("return");
  }
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
