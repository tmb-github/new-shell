import Head from "../../components/MicroHead";
import SchemaBreadcrumbs from "../../components/SchemaBreadcrumbs";
import { default as u } from "../../public/scripts/modules/utilities";

// Edit per page:
import CustomStyle from "../../custom-style/PageDummy4";
const pageName = "Dummy 4";

// definitions:
const appName = "Shell";
const baseHref = "https://localhost:3000/";
const pageCssName = u.kebabCase(pageName);
const dataMjs = u.camelCase(pageName);
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
        <p>
          Morbi quis commodo odio aenean sed. Faucibus nisl tincidunt eget
          nullam. Ultrices dui sapien eget mi proin. Amet nulla facilisi morbi
          tempus iaculis urna id. Adipiscing elit ut aliquam purus sit amet.
          Rhoncus urna neque viverra justo nec ultrices dui sapien. Gravida
          neque convallis a cras semper auctor neque. Nunc lobortis mattis
          aliquam faucibus purus in massa tempor. Consectetur lorem donec massa
          sapien faucibus. Aliquam sem fringilla ut morbi tincidunt augue
          interdum. Imperdiet nulla malesuada pellentesque elit eget. Mauris
          pellentesque pulvinar pellentesque habitant morbi tristique senectus
          et. Tincidunt praesent semper feugiat nibh sed pulvinar proin.
        </p>
        <SchemaBreadcrumbs
          breadcrumbArray={breadcrumbArray}
        ></SchemaBreadcrumbs>
      </main>
    </>
  );
}
