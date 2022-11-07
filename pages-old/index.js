import PageHead from "../components/PageHead";
import SchemaBreadcrumbs from "../components/SchemaBreadcrumbs";
import React, { useEffect, useRef } from "react";
import CustomStyle from "../custom-style/PageHome";
import { default as common } from "../modules/common.mjs";

const generatedNonce = process.env.generatedNonce;

const breadcrumbArray = [
  {
    id: "https://localhost:3000/",
    name: "home",
    imgUrl:
      "https://localhost/shell/images/head/shell-115x35.20220913070722.jpg",
  },
];

// SEE: https://javascriptarticles.com/nextjs-dynamic-head-for-seo/

const mainClasses = "main home";

export default function Home() {
  const page = "home";
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
        canonical="https://localhost/shell/"
        title="Home | Shell"
        metaDescription="Home page description for SHELL application [70 characters are best here]."
      ></PageHead>
      <main className={mainClasses}>
        <h1 id="main-content" tabIndex="0">
          Home
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
