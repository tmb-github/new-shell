import PageHead from "../components/PageHead";
import SchemaBreadcrumbs from "../components/SchemaBreadcrumbs";
import React, { useEffect, useRef } from "react";
import { default as common } from "../modules/common.mjs";
// EDIT:
import CustomStyle from "../custom-style/PageDummy1";
const pageName = "Dummy 1";
const pageCssName = "dummy-1";
const pageUrlSlug = pageCssName;
// definitions:
const appName = "Shell";
const baseHref = "https://localhost:3000/";

// derived definitions:
const appNameUC = appName.toUpperCase();
const pageNameLC = pageName.toLowerCase();
const canonical = baseHref + pageUrlSlug;
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

export default function Home() {
  const didMountRef = useRef(false);
  useEffect(() => {
    if (process.env.reactStrictMode) {
      if (didMountRef.current) {
        common.customStyle(pageNameLC, generatedNonce);
      } else {
        didMountRef.current = true;
      }
    } else {
      common.customStyle(pageNameLC, generatedNonce);
    }
  }, []);

  return (
    <>
      <PageHead
        canonical={canonical}
        title={title}
        metaDescription={metaDescription}
        nonce={generatedNonce}
      ></PageHead>

      <main className={mainClasses}>
        <h1 id="main-content" tabIndex="0">
          {pageName}
        </h1>
        <CustomStyle></CustomStyle>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <SchemaBreadcrumbs
          breadcrumbArray={breadcrumbArray}
        ></SchemaBreadcrumbs>
      </main>
    </>
  );
}
