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
    id: "https://localhost:3000/dummy-2",
    name: "Dummy 2",
    imgUrl:
      "https://localhost/shell/images/head/shell-115x35.20220913070722.jpg",
  },
];

const mainClasses = "main dummy-2";

export default function Dummy2() {
  return (
    <>
      <Head
        canonical="https://localhost/shell/dummy-2"
        title="Dummy 2 | Shell"
        metaDescription="Dummy 2 page description for SHELL application [70 characters are best here]."
      ></Head>

      <main className={mainClasses}>
        <h1 id="main-content" tabIndex="0">
          Dummy 2
        </h1>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur?
        </p>
        <SchemaBreadcrumbs
          breadcrumbArray={breadcrumbArray}
        ></SchemaBreadcrumbs>
      </main>
    </>
  );
}
