/* eslint-disable @next/next/no-head-element */
import siteMetadata from "../../data/siteMetadata.js";

// The elements in the head that remain constant from page to page:
//export default async function Head() {
const Head = () => {
  return (
    <head prefix="og: http://ogp.me/ns#" typeof="http://ogp.me/ns#">
      <meta charSet="utf-8" />
      {/*<title>PLACEHOLDER</title>*/}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      <meta name="apple-mobile-web-app-title" content={siteMetadata.siteName} />
      <meta name="author" content={siteMetadata.author} />
      {/*<meta name="description" content="PLACEHOLDER" />*/}
      <meta
        name="google-site-verification"
        content={siteMetadata.googleSiteVerification}
      />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta
        name="msapplication-config"
        content={siteMetadata.browserConfigXML}
      />
      <meta name="msapplication-TileColor" content={siteMetadata.tileColor} />
      <meta name="theme-color" content={siteMetadata.themeColor} />
      <meta name="viewport" content={siteMetadata.viewport} />
      <meta name="web_author" content={siteMetadata.author} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={siteMetadata.twitterHandle} />
      {/*<meta name="twitter:description" content="PLACEHOLDER" />*/}
      <meta name="twitter:site" content={siteMetadata.site} />
      {/*<meta name="twitter:title" content="PLACEHOLDER" />*/}
      {/*<meta name="twitter:url" content="PLACEHOLDER" />*/}
      <meta name="twitter:image" content={siteMetadata.socialShareImage} />
      <meta
        name="twitter:image:alt"
        content={siteMetadata.socialShareImageAlt}
      />
      {/*<meta property="og:description" content="PLACEHOLDER" /> */}
      <meta property="og:image" content={siteMetadata.socialShareImage} />
      <meta
        property="og:image:alt"
        content={siteMetadata.socialShareImageAlt}
      />
      <meta
        property="og:image:height"
        content={siteMetadata.socialShareImageHeight}
      />
      <meta
        property="og:image:width"
        content={siteMetadata.socialShareImageWidth}
      />
      <meta
        property="og:image:secure_url"
        content={siteMetadata.socialShareImage}
      />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:site_name" content={siteMetadata.siteName} />
      {/*<meta property="og:title" content="PLACEHOLDER" />*/}
      <meta property="og:type" content="website" />
      {/*<meta property="og:url" content="PLACEHOLDER" />*/}
    </head>
  );
};

export default Head;
