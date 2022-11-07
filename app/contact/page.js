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
    id: "https://localhost:3000/contact",
    name: "contact",
    imgUrl:
      "https://localhost/shell/images/head/shell-115x35.20220913070722.jpg",
  },
];

export default function Contact() {
  return (
    <>
      <Head
        canonical="https://localhost/shell/contact"
        title="Contact | Shell"
        metaDescription="Contact page description for SHELL application [70 characters are best here]."
      ></Head>

      <main>
        <h1>Contact</h1>
        <p>Contact page of Shell application</p>

        <SchemaBreadcrumbs
          breadcrumbArray={breadcrumbArray}
        ></SchemaBreadcrumbs>
      </main>
    </>
  );
}
