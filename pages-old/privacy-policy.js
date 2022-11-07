import PageHead from "../components/PageHead";
import SchemaBreadcrumbs from "../components/SchemaBreadcrumbs";
import React, { useEffect, useRef } from "react";
import CustomStyle from "../custom-style/PagePrivacyPolicy";
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
    id: "https://localhost:3000/privacy-policy",
    name: "Privacy Policy",
    imgUrl:
      "https://localhost/shell/images/head/shell-115x35.20220913070722.jpg",
  },
];

const mainClasses = "main privacy-policy";

export default function SiteMap() {
  const page = "privacy-policy";
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
        canonical="https://localhost/shell/privacy-policy/"
        title="Privacy Policy | Shell"
        metaDescription="Privacy Policy description for SHELL application [70 characters are best here]."
      ></PageHead>
      <main className={mainClasses}>
        <h1 id="main-content" tabIndex="0">
          Privacy Policy
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
