/** @type {import('next').NextConfig} */

//const nextSafe = require("next-safe");
//const isDev = process.env.NODE_ENV !== "production";

const { v4 } = require("uuid");
const crypto = require("crypto");

const nonceGenerator = () => {
  const hash = crypto.createHash("sha256");
  hash.update(v4());
  return hash.digest("base64");
};

const generatedNonce = nonceGenerator();

//console.info(generatedNonce);

// Next.js 12:
// script-src 'unsafe-inline' 'self' http: https: 'unsafe-eval' 'nonce-${generatedNonce}' 'strict-dynamic'
// Next.js 13:
// script-src 'unsafe-inline' 'self' http: https: 'unsafe-eval'

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: { appDir: true },
  compress: true,
  /* Disable x-powered-by header, which exposes next.js as the server */
  poweredByHeader: false,
  env: {
    generatedNonce: `${generatedNonce}`,
  },

  // SEE: https://github.com/UnlyEd/next-right-now/blob/v2-mst-aptd-at-lcz-sty/next.config.js#L112-L215
  async headers() {
    const headers = [
      {
        // Make all fonts immutable and cached for one year
        source: "/static/fonts/(.*?)",
        headers: [
          {
            key: "Cache-Control",
            // See https://www.keycdn.com/blog/cache-control-immutable#what-is-cache-control-immutable
            // See https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#browser_compatibility
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Make all other static assets immutable and cached for one hour
        source: "/static/(.*?)",
        headers: [
          {
            key: "Cache-Control",
            // See https://www.keycdn.com/blog/cache-control-immutable#what-is-cache-control-immutable
            // See https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#browser_compatibility
            value: "public, max-age=3600, immutable",
          },
        ],
      },
      {
        source: "/(.*?)", // Match all paths, including "/" - See https://github.com/vercel/next.js/discussions/17991#discussioncomment-112028
        headers: [
          {
            key: "access-control-allow-credentials",
            value: "true",
          },
          {
            key: "cache-control",
            value: "max-age=0, immutable",
          },
          /* DO NOT SEND...ALLOW DEFAULT: {
            key: "content-encoding",
            value: "gzip",
          },*/
          {
            key: "content-language",
            value: "en-US",
          },
          { key: "csp12", value: `'nonce-${generatedNonce}' 'strict-dynamic'` },
          {
            key: "content-security-policy",
            value: `script-src 'unsafe-inline' 'self' http: https: 'unsafe-eval' ; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://*.cloudfront.net ; img-src 'self' data: www.google-analytics.com www.googletagmanager.com *.cdninstagram.com *.fbcdn.net *.pinimg.com *.ytimg.com https://*.cloudfront.net ; worker-src 'self' www.google.com www.youtube.com blob: ; frame-src * ; connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://ipapi.co https://httpstat.us https://*.ecwid.com https://ecomm.events/register ; font-src 'self' data: https://fonts.gstatic.com https://cdnjs.cloudflare.com https://*.cloudfront.net https://*.shopsettings.com ; object-src 'none' ; base-uri 'self' ; frame-ancestors 'self' ; manifest-src 'self' ; default-src 'self' `,
          } /* DO NOT SEND...ALLOW DEFAULT: {
            key: "Content-Type",
            value: "text/html; charset=utf-8",
          },*/,
          {
            key: "permissions-policy",
            value:
              "accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()",
          },
          {
            key: "referrer-policy",
            value: "same-origin",
          },
          {
            key: "strict-transport-security",
            value: "max-age=31536000",
          },
          /* APPARENTLY SAFE TO SEND, BUT DEFAULT PREVAILS: {
            key: "vary",
            value: "accept-encoding",
          },*/
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          /* WEBHINT SAYS NOT TO USE! {
            key: "x-xss-protection",
            value: "1; mode=block",
          },*/
        ],
      },
    ];
    //console.info("Using headers:", JSON.stringify(headers, null, 2));
    return headers;
  },
};

module.exports = nextConfig;
