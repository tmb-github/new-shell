import { Html, Head, Main, NextScript } from "next/document";

const generatedNonce = process.env.generatedNonce;

export default function Document() {
  return (
    <Html lang="en-us">
      <Head nonce={generatedNonce} />
      <body>
        <Main />
        <NextScript nonce={generatedNonce} />
      </body>
    </Html>
  );
}
