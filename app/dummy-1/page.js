import Head from "../../components/MicroHead";
import SchemaBreadcrumbs from "../../components/SchemaBreadcrumbs";
const breadcrumbArray = [
  {
    id: "https://localhost:3000/",
    name: "home",
    imgUrl:
      "https://localhost/shell/images/head/shell-115x35.20220913070722.jpg",
  },
  {
    id: "https://localhost:3000/dummy-1",
    name: "dummy-1",
    imgUrl:
      "https://localhost/shell/images/head/shell-115x35.20220913070722.jpg",
  },
];

export default function Dummy1() {
  return (
    <>
      <Head
        canonical="https://localhost/shell/dummy-1"
        title="Dummy 1 | Shell"
        metaDescription="Dummy 1 page description for SHELL application [70 characters are best here]."
      ></Head>

      <main>
        <h1>Dummy 1</h1>
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
