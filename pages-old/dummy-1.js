import PageHead from "../components/PageHead";
import SchemaBreadcrumbs from "../components/SchemaBreadcrumbs";
import React, { useEffect, useRef } from "react";
import CustomStyle from "../custom-style/PageDummy1";
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
    id: "https://localhost:3000/dummy-1",
    name: "Dummy 1",
    imgUrl:
      "https://localhost/shell/images/head/shell-115x35.20220913070722.jpg",
  },
];

const mainClasses = "main dummy-1";

export default function Dummy1() {
  const page = "dummy-1";
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
        canonical="https://localhost/shell/dummy-1/"
        title="Dummy 1 | Shell"
        metaDescription="Dummy 1 description for SHELL application [70 characters are best here]."
      ></PageHead>
      <main className={mainClasses}>
        <h1 id="main-content" tabIndex="0">
          Dummy 1
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
