import PageHead from "../components/PageHead";
import SchemaBreadcrumbs from "../components/SchemaBreadcrumbs";

const breadcrumbArray = [
  {
    id: "https://localhost:3000/",
    name: "home",
    imgUrl:
      "https://localhost/shell/images/head/shell-115x35.20220913070722.jpg",
  },
];

/*
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
*/

/* <main className={styles.main}> */

// SEE: https://javascriptarticles.com/nextjs-dynamic-head-for-seo/
/*
 */
export default function Home() {
  return (
    <>
      <PageHead
        canonical="https://localhost/shell/"
        title="Home | Shell"
        metaDescription="Home page description for SHELL application [70 characters are best here]."
      ></PageHead>
      <main>
        <h1>Home</h1>
        <p>Home page of Shell application</p>
        <SchemaBreadcrumbs
          breadcrumbArray={breadcrumbArray}
        ></SchemaBreadcrumbs>
      </main>
    </>
  );
}
