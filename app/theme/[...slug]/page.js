import React from "react";
import Head from "components/MicroHead";
import SchemaBreadcrumbs from "components/SchemaBreadcrumbs";
import parse from "html-react-parser";
import Link from "next/link";
import Image from "next/image";

// Edit per page:
import CustomStyle from "custom-style/PageTheme";
import { notFound } from "next/navigation";

let previousTheme = "";
let workNav = [];
let workHtml = {};
let workImg = {};

let displayConsoleLogs = true;
let displayConsoleLogsX = false;

// { params, searchParams }
export default function Main({ params }) {
  // Get current theme and work from URL:
  const theme = params.slug[0];
  const slug = params.slug[1];

  if (displayConsoleLogsX) {
    console.log("==========");
    console.log(params);
    console.log("previousTheme = " + previousTheme);
    console.log("theme = " + theme);
    console.log(workHtml);
    console.log(workImg);
  }
  // Compare existing theme with current/new URL theme:
  // Empty the workNav array and workHtml object when we open a new theme:
  if (previousTheme !== theme) {
    if (displayConsoleLogsX) {
      console.log("clearing workNav and workHtml");
    }
    previousTheme = theme;
    workNav = [];
    workHtml = {};
    workImg = {};
  }

  const pageName = slug ? `${slug} | ${theme} | Theme` : `${theme} | Theme`;
  //let pageHeading = slug ? `${slug}` : `${theme}`;

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

  const returnJSX = function (ignore) {
    let html = "";
    let img = "";
    let artworkDisplay = "";
    let artworkImage = "";
    if (theme && slug && workHtml[theme + "-" + slug]) {
      html = workHtml[theme + "-" + slug];
      img = workImg[theme + "-" + slug];
    }
    artworkDisplay = `<section className="artwork-display"><article className="selected-work">${html}</article></section>`;
    if (img !== "") {
      artworkImage = (
        <Image
          src={img.src}
          alt={img.alt}
          width={img.width}
          height={img.height}
          priority
        />
      );
    } else {
      artworkImage = <></>;
    }

    if (displayConsoleLogsX) {
      console.log("returnJSX: " + ignore);
      console.log(theme);
      console.log(slug);
      console.log(artworkDisplay);
      console.log(artworkImage);
    }
    return (
      <>
        <Head
          canonical={canonical}
          title={title}
          metaDescription={metaDescription}
          nonce={generatedNonce}
        ></Head>

        <main
          className={mainClasses}
          data-mjs={dataMjs}
          data-nextjs-version="13"
        >
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
          {artworkImage}
          {parse(artworkDisplay)}
          <SchemaBreadcrumbs
            breadcrumbArray={breadcrumbArray}
          ></SchemaBreadcrumbs>
        </main>
      </>
    );
  };

  // NB: We must use relative parths in import() statements.
  // We cannot rely on jsconfig.json absolute path to be resolved in those functions:
  if (workNav.length === 0) {
    if (displayConsoleLogsX) {
      console.log("workNav is empty");
    }
    // Get the theme.mjs, which will hold an array of the works in the theme:
    return import(`./${theme}.mjs`)
      .then(function ({ default: themeObject }) {
        // Use .map(), not .forEach() in Promise.all()
        // See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import
        return Promise.all(
          themeObject.works.map(function (work, index) {
            if (displayConsoleLogsX) {
              console.log(work);
            }
            import(`../../../works/${work}.mjs`).then(function ({
              default: workObject,
            }) {
              if (workNav.length !== themeObject.works.length) {
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
                // Load the storage object:
                workHtml[theme + "-" + work] = workObject.html;
                workImg[theme + "-" + work] = workObject.img;
              }
            });
          })
        ).then(function () {
          return returnJSX("1");
        });
      })
      .catch(function (error) {
        console.log(error.message);
        //notFound();
      });
  } else {
    return returnJSX("2");
  }
}
