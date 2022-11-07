import Head from "../../components/MicroHead";
import SchemaBreadcrumbs from "../../components/SchemaBreadcrumbs";

const breadcrumbArray = [
  {
    id: "https://localhost:3000/",
    name: "Home",
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

export default function PrivacyPolicy() {
  return (
    <>
      <Head
        canonical="https://localhost/shell/privacy-policy"
        title="Privacy Policy | Shell"
        metaDescription="Privacy Policy page description for SHELL application [70 characters are best here]."
      ></Head>

      <main className={mainClasses}>
        <h1 id="main-content" tabIndex="0">
          Privacy Policy
        </h1>
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
