import Head from "next/head";

// Used in Next.js 12 only???
// Just the elements in the head that change from page to page:

const PageHead = ({ canonical, metaDescription, title }) => {
  // provide defaults if props not supplied:
  canonical = !canonical ? "EMPTY" : canonical;
  metaDescription = !metaDescription ? "EMPTY" : metaDescription;
  title = !title ? "EMPTY" : title;
  return (
    <Head>
      <title>{title}</title>
      <link rel="canonical" href={canonical}></link>
      <meta name="description" content={metaDescription} key="description" />
      <meta
        name="twitter:description"
        content={metaDescription}
        key="twitter:description"
      />
      <meta name="twitter:title" content={title} key="twitter:title" />
      <meta property="twitter:url" content={canonical} key="twitter:url" />
      <meta
        property="og:description"
        content={metaDescription}
        key="og:description"
      />
      <meta property="og:title" content={title} key="og:title" />
      <meta property="og:url" content={canonical} key="og:url" />
    </Head>
  );
};

export default PageHead;
