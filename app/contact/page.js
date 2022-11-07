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
    id: "https://localhost:3000/contact",
    name: "Contact",
    imgUrl:
      "https://localhost/shell/images/head/shell-115x35.20220913070722.jpg",
  },
];

const mainClasses = "main contact";

export default function Contact() {
  return (
    <>
      <Head
        canonical="https://localhost/shell/contact"
        title="Contact | Shell"
        metaDescription="Contact page description for SHELL application [70 characters are best here]."
      ></Head>

      <main className={mainClasses}>
        <h1 id="main-content" tabIndex="0">
          Contact
        </h1>
        <p>Contact page of Shell application</p>

        <SchemaBreadcrumbs
          breadcrumbArray={breadcrumbArray}
        ></SchemaBreadcrumbs>
      </main>
    </>
  );
}
