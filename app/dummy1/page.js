import Head from "../../components/MicroHead";

export default function Dummy1() {
  return (
    <>
      <Head
        canonical="https://localhost/shell/dummy1"
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
                {
                  "@type": "ListItem",
                  position: 2,
                  item: {
                    "@type": "Thing",
                    "@id": "https://localhost/shell/dummy-1/",
                    name: "Dummy 1",
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
