import PageHead from "../components/PageHead";
import SchemaBreadcrumbs from "../components/SchemaBreadcrumbs";
import React, { useEffect, useRef } from "react";
import CustomStyle from "../custom-style/PageSiteMap";
import { default as common } from "../modules/common.mjs";

const generatedNonce = process.env.generatedNonce;

const breadcrumbArray = [
  {
    id: "https://localhost:3000/",
    name: "home",
    imgUrl:
      "https://localhost/shell/images/head/shell-115x35.20220913070722.jpg",
  },
  {
    id: "https://localhost:3000/site-map",
    name: "Site Map",
    imgUrl:
      "https://localhost/shell/images/head/shell-115x35.20220913070722.jpg",
  },
];

const mainClasses = "main site-map";

export default function SiteMap() {
  const page = "site-map";
  const didMountRef = useRef(false);
  useEffect(() => {
    if (process.env.reactStrictMode) {
      if (didMountRef.current) {
        common.customStyle(page, generatedNonce);
      } else {
        didMountRef.current = true;
      }
    } else {
      common.customStyle(page, generatedNonce);
    }
  }, []);

  return (
    <>
      <PageHead
        canonical="https://localhost/shell/site-map/"
        title="Site Map | Shell"
        metaDescription="Site Map description for SHELL application [70 characters are best here]."
      ></PageHead>
      <main className={mainClasses}>
        <h1 id="main-content" tabIndex="0">
          Site Map
        </h1>
        <CustomStyle></CustomStyle>
        <p>
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt
          mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis.
          Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a
          tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam
          ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus.
          Integer euismod lacus luctus magna. Quisque cursus, metus vitae
          pharetra auctor, sem massa mattis sem, at interdum magna augue eget
          diam.
        </p>
        <SchemaBreadcrumbs
          breadcrumbArray={breadcrumbArray}
        ></SchemaBreadcrumbs>
      </main>
    </>
  );
}
