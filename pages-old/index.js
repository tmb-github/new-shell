import PageHead from "../components/PageHead";
import SchemaBreadcrumbs from "../components/SchemaBreadcrumbs";
import React, { useEffect, useRef } from "react";
import { default as common } from "../modules/common.mjs";
// EDIT:
import CustomStyle from "../custom-style/PageHome";
const pageName = "Home";
const pageCssName = "home";
const pageUrlSlug = "";
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
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <SchemaBreadcrumbs
          breadcrumbArray={breadcrumbArray}
        ></SchemaBreadcrumbs>
      </main>
    </>
  );
}
