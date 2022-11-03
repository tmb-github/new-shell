import Head from "../components/MicroHead";
const generatedNonce = process.env.generatedNonce;

export default function Home() {
  return (
    <>
      <Head
        canonical="https://localhost/shell/"
        title="Home | Shell"
        metaDescription="Home page description for SHELL application [70 characters are best here]."
        nonce={generatedNonce}
      ></Head>
      <main>
        <h1>Home</h1>
        <p>Home page of Shell application</p>
        <script
          type="application/ld+json"
          id="breadcrumb-list"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              description: "Breadcrumbs list",
              name: "Breadcrumbs",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  item: {
                    "@type": "Thing",
                    "@id": "https://localhost/shell/",
                    name: "Home",
                    image: {
                      "@type": "ImageObject",
                      url: "https://localhost/shell/images/head/shell-115x35.20220913070722.jpg",
                      width: "115",
                      height: "35",
                    },
                  },
                },
              ],
            }),
          }}
        />
      </main>
    </>
  );
}
