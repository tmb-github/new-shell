import Head from "components/MicroHead";
import SchemaBreadcrumbs from "components/SchemaBreadcrumbs";
import { default as u } from "public/scripts/modules/utilities";
import Link from "next/link";

// Edit per page:
import CustomStyle from "custom-style/PageTheme";
const pageName = "Theme Listing";

// definitions:
const appName = "Shell";
const baseHref = "https://localhost:3000/";
const pageCssName = "theme-listing"; //u.kebabCase(pageName);
const dataMjs = "theme"; //u.camelCase(pageName);
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

// Routines specific to this page:

let propsThemeNavUL = {
  classes: "theme-nav-ul",
};

let propsThemeOne = {
  name: "Theme One",
  href: "./theme/one",
  classes: "menu-side-one",
  dataPage: "theme-one",
  dataHref: "theme-one",
};

let propsThemeTwo = {
  name: "Theme Two",
  href: "./theme/two",
  classes: "menu-side-one",
  dataPage: "theme-two",
  dataHref: "theme-two",
};

let propsThemeThree = {
  name: "Theme Three",
  href: "./theme/three",
  classes: "menu-side-one",
  dataPage: "theme-three",
  dataHref: "theme-three",
};

let propsThemeAAA = {
  name: "Theme AAA",
  href: "./theme/aaa",
  classes: "menu-side-one",
  dataPage: "theme-aaa",
  dataHref: "theme-aaa",
};

let propsThemeBBB = {
  name: "Theme BBB",
  href: "./theme/bbb",
  classes: "menu-side-one",
  dataPage: "theme-bbb",
  dataHref: "theme-bbb",
};

function TmbUL(props) {
  return <ul className={props.classes}>{props.children}</ul>;
}

function TmbLI(props) {
  let component;

  component = (
    <li
      key={props.name}
      className={props.classes}
      tabIndex="0"
      data-page={props.dataPage}
      data-href={props.dataHref}
    >
      <Link className="internal-anchor" href={props.href} tabIndex="-1">
        {props.name}
      </Link>
    </li>
  );
  return component;
}

function ThemeNavList() {
  return (
    <TmbUL {...propsThemeNavUL}>
      {/*
      <TmbLI {...propsThemeOne}>One</TmbLI>
      <TmbLI {...propsThemeTwo}>Two</TmbLI>
      <TmbLI {...propsThemeThree}>Three</TmbLI>
    */}
      <TmbLI {...propsThemeAAA}>AAA</TmbLI>
      <TmbLI {...propsThemeBBB}>BBB</TmbLI>
    </TmbUL>
  );
}
const ThemeNavbar = () => {
  return (
    <nav
      className="nav"
      id="theme-nav"
      aria-labelledby="theme-navigation-heading"
    >
      <h2 className="screen-reader" id="theme-navigation-heading">
        Theme Navigation
      </h2>
      <ThemeNavList />
    </nav>
  );
};

export default function Main() {
  return (
    <>
      <Head
        canonical={canonical}
        title={title}
        metaDescription={metaDescription}
        nonce={generatedNonce}
      ></Head>

      <main className={mainClasses} data-mjs={dataMjs}>
        <h1 id="main-content" tabIndex="0">
          {pageName}
        </h1>
        <CustomStyle></CustomStyle>
        <ThemeNavList />

        <SchemaBreadcrumbs
          breadcrumbArray={breadcrumbArray}
        ></SchemaBreadcrumbs>
      </main>
    </>
  );
}
