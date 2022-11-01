/** @type {import('next').NextConfig} */

//const nextSafe = require("next-safe");
//const isDev = process.env.NODE_ENV !== "production";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: { appDir: true },
  compress: true,
  /* Disable x-powered-by header, which exposes next.js as the server */
  poweredByHeader: false,
  async headers() {
    return [
      {
        /*source: "/:path*",*/
        source: "/(.*)",
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
          {
            key: "content-security-policy",
            value:
              "script-src 'unsafe-inline' 'self' http: https: 'unsafe-eval' ; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://*.cloudfront.net ; img-src 'self' data: www.google-analytics.com www.googletagmanager.com *.cdninstagram.com *.fbcdn.net *.pinimg.com *.ytimg.com https://*.cloudfront.net ; worker-src 'self' www.google.com www.youtube.com blob: ; frame-src * ; connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://ipapi.co https://httpstat.us https://*.ecwid.com https://ecomm.events/register ; font-src 'self' data: https://fonts.gstatic.com https://cdnjs.cloudflare.com https://*.cloudfront.net https://*.shopsettings.com ; object-src 'none' ; base-uri 'self' ; frame-ancestors 'self' ; manifest-src 'self' ; default-src 'self' ",
          },

          /* DO NOT SEND...ALLOW DEFAULT: {
            key: "Content-Type",
            value: "text/html; charset=utf-8",
          },*/
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
  },
};

module.exports = nextConfig;
