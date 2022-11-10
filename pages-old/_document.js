import { Html, Head, Main, NextScript } from "next/document";

const generatedNonce = process.env.generatedNonce;

export default function Document() {
  return (
    <Html lang="en-us">
      <Head
        nonce={generatedNonce}
        prefix="og: http://ogp.me/ns#"
        typeof="http://ogp.me/ns#"
      ></Head>
      <body className="body" data-orientation="initial">
        <Main />
        <NextScript nonce={generatedNonce} />
      </body>
    </Html>
  );
}
