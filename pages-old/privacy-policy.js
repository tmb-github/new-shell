import PageHead from "../components/PageHead";
import SchemaBreadcrumbs from "../components/SchemaBreadcrumbs";
import React, { useEffect, useRef } from "react";
import { default as common } from "../modules/common.mjs";
// EDIT:
import CustomStyle from "../custom-style/PagePrivacyPolicy";
const pageName = "Privacy Policy";
const pageCssName = "privacy-policy";
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
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit
          dolor. Sed non quam. In vel mi sit amet augue congue elementum. Morbi
          in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra
          nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada
          tellus. Ut ultrices ultrices enim. Curabitur sit amet mauris. Morbi in
          dui quis est pulvinar ullamcorper. Nulla facilisi. Integer lacinia
          sollicitudin massa.
        </p>
        <SchemaBreadcrumbs
          breadcrumbArray={breadcrumbArray}
        ></SchemaBreadcrumbs>
      </main>
    </>
  );
}
