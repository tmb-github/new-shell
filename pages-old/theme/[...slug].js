import React, { useState, useEffect } from "react";
import PageHead from "components/PageHead";
import SchemaBreadcrumbs from "components/SchemaBreadcrumbs";
import Link from "next/link";
import Image from "next/legacy/image";

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
  const [artworkHtml, setArtworkHtml] = useState([]);
  const [artworkImg, setArtworkImg] = useState([]);
  const [windowInfo, setWindowInfo] = useState([]);
  const [contentChange, setContentChange] = useState(false);

  // If navigating directly to this page, we cannot use window.location.href
  // If navigating here from a different page, window object will be available:
  let href = typeof window === "undefined" ? "" : window.location.href;
  const [windowLocationHref, setWindowLocationHref] = useState(href); //useState([]);

  // set to true to log info to console
  let testing = false;

  // Update windowLocationHref if the URL has changed
  // This will trigger useEffect()
  useEffect(() => {
    if (windowLocationHref !== window.location.href) {
      if (testing) {
        console.clear();
        console.log(window.location.href);
      }
      setWindowLocationHref(window.location.href);
      setContentChange(false);
    }
  });

  useEffect(() => {
    if (testing) {
      console.log("useEffect");
    }

    const workNavTemp = [];
    const jsonStorageTemp = [];
    const artworkHtmlTemp = [];
    const artworkImgTemp = [];
    const windowInfoTemp = [];

    const urlParts = window.location.href.split("/").reverse();
    const theme = urlParts[2] === "theme" ? urlParts[1] : urlParts[0];
    const urlWork = urlParts[2] === "theme" ? urlParts[0] : "";
    const displayWork = urlWork;
    if (testing) {
      console.log("displayWork: " + displayWork);
    }
    windowInfoTemp.push(theme, displayWork);

    // default to no artwork display:
    artworkHtmlTemp[0] = "";
    artworkImgTemp[0] = "";

    let previousTheme;
    let revise = true;
    if (document.querySelector("MAIN")?.hasAttribute("data-theme")) {
      previousTheme = document.querySelector("MAIN").getAttribute("data-theme");
      if (theme === previousTheme) {
        revise = false;
      } else {
        document.querySelector("MAIN").setAttribute("data-theme", theme);
      }
    } else {
      document.querySelector("MAIN")?.setAttribute("data-theme", theme);
    }

    let previousDisplayWork;

    if (document.querySelector("MAIN")?.hasAttribute("data-display-work")) {
      previousDisplayWork = document
        .querySelector("MAIN")
        .getAttribute("data-display-work");

      if (displayWork !== previousDisplayWork) {
        document
          .querySelector("MAIN")
          .setAttribute("data-display-work", displayWork);
      }
    } else {
      document
        .querySelector("MAIN")
        ?.setAttribute("data-display-work", displayWork);
    }

    if (revise) {
      if (testing) {
        console.log("useEffect: imports");
      }
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
                  data-json-index={index}
                  data-artwork-slug={work}
                  data-artwork-title={work}
                  key={"json" + work + index}
                >
                  {`{"article": "${workObject.html}", "image": 
                    {
                      "src": "${workObject.img.src}",
                      "alt": "${workObject.img.alt}",
                      "width": "${workObject.img.width}",
                      "height": "${workObject.img.height}",
                    }
                  }`}
                </script>
              );

              // If the url endpoint matches the work, use that for the display content:
              if (work === displayWork) {
                artworkHtmlTemp[0] = workObject.html;
                artworkImgTemp[0] = workObject.img;
              }
            });
          })
        ).then(() => {
          setWorkNav(workNavTemp);
          setJsonStorage(jsonStorageTemp);
          setArtworkHtml(artworkHtmlTemp);
          setArtworkImg(artworkImgTemp);
          setWindowInfo(windowInfoTemp);
          setContentChange(true);
        });
      });
    } else {
      // If staying on same theme but swapping item display, just get JSON content:
      if (displayWork !== "") {
        let jsonScript = document.querySelector(
          '.artwork-json[data-artwork-slug="' + displayWork + '"]'
        );
        if (jsonScript) {
          artworkHtmlTemp[0] = JSON.parse(jsonScript.textContent)["article"];
          artworkImgTemp[0] = JSON.parse(jsonScript.textContent)["image"];
        }
      }
      setArtworkHtml(artworkHtmlTemp);
      setArtworkImg(artworkImgTemp);
      setWindowInfo(windowInfoTemp);
    }
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
    console.log(contentChange);
  }

  const artworkImage = (artworkImg) => {
    if (artworkImg[0] && artworkImg[0].src) {
      return (
        <Image
          src={artworkImg[0].src}
          alt={artworkImg[0].alt}
          width={artworkImg[0].width}
          height={artworkImg[0].height}
          priority
        />
      );
    } else {
      return <></>;
    }
  };

  if (!contentChange) {
    return <></>;
  } else {
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
            {artworkImage(artworkImg)}
            <article
              className="selected-work"
              dangerouslySetInnerHTML={{ __html: artworkHtml[0] }}
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
}
