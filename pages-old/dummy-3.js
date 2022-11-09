import PageHead from "../components/PageHead";
import SchemaBreadcrumbs from "../components/SchemaBreadcrumbs";
import React, { useEffect, useRef } from "react";
import { default as common } from "../modules/common.mjs";
// EDIT:
import CustomStyle from "../custom-style/PageDummy3";
const pageName = "Dummy 3";
const pageCssName = "dummy-3";
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
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
          distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
          cumque nihil impedit quo minus id quod maxime placeat facere possimus,
          omnis voluptas assumenda est, omnis dolor repellendus. Temporibus
          autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
          eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
          Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
          voluptatibus maiores alias consequatur aut perferendis doloribus
          asperiores repellat.
        </p>
        <SchemaBreadcrumbs
          breadcrumbArray={breadcrumbArray}
        ></SchemaBreadcrumbs>
      </main>
    </>
  );
}
