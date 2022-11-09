import PageHead from "../components/PageHead";
import SchemaBreadcrumbs from "../components/SchemaBreadcrumbs";
import React, { useEffect, useRef } from "react";
import { default as common } from "../modules/common.mjs";
// EDIT:
import CustomStyle from "../custom-style/PageContact";
const pageName = "Contact";
const pageCssName = "contact";
const pageUrlSlug = pageCssName;
// definitions:
const appName = "Shell";
const baseHref = "https://localhost:3000/";

// derived definitions:
const appNameUC = appName.toUpperCase();
const pageNameLC = pageName.toLowerCase();
const canonical = baseHref + pageUrlSlug;
const mainClasses = "main visibility-hidden " + pageCssName;
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
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
        <SchemaBreadcrumbs
          breadcrumbArray={breadcrumbArray}
        ></SchemaBreadcrumbs>
      </main>
    </>
  );
}
