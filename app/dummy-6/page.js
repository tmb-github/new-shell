import Head from "../../components/MicroHead";
import SchemaBreadcrumbs from "../../components/SchemaBreadcrumbs";
import {default as u} from "../../public/scripts/modules/utilities"; 

// Edit per page:
import CustomStyle from "../../custom-style/PageDummy1";
const pageName = "Dummy 1";

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
          Dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu. Enim eu turpis egestas pretium aenean pharetra magna ac. Ut etiam sit amet nisl purus in mollis nunc sed. Potenti nullam ac tortor vitae purus faucibus. Viverra nam libero justo laoreet. Maecenas sed enim ut sem. Tellus at urna condimentum mattis pellentesque id nibh. Enim ut tellus elementum sagittis vitae et leo duis ut. Amet consectetur adipiscing elit ut aliquam purus sit. Cras semper auctor neque vitae tempus quam. Condimentum lacinia quis vel eros donec ac odio tempor. Enim eu turpis egestas pretium aenean pharetra magna ac. Tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum. Convallis posuere morbi leo urna molestie at elementum eu facilisis. Vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus. Ut lectus arcu bibendum at. Neque gravida in fermentum et sollicitudin ac orci.
        </p>
        <SchemaBreadcrumbs
          breadcrumbArray={breadcrumbArray}
        ></SchemaBreadcrumbs>
      </main>
    </>
  );
}
