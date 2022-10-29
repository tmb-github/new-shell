import Head from "next/head";

// Just the elements in the head that change from page to page:

const PageHead = ({ canonical, metaDescription, title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:title" content={title} />
      <meta property="twitter:url" content={canonical} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={canonical} />
    </Head>
  );
};

export default PageHead;
