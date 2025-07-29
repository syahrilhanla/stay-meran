import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  i18n: {
    // Supported locales: English, Italian, German
    locales: ['en-US', 'it', 'de'],
    defaultLocale: 'en-US',
    domains: [
      {
        domain: 'example.com',
        defaultLocale: 'en-US',
        // an optional http field can also be used to test
        // locale domains locally with http instead of http
        http: true,
      },
      {
        domain: 'example.it',
        defaultLocale: 'it',
      },
      {
        domain: 'example.de',
        defaultLocale: 'de',
      },
    ],
  },
};

export default nextConfig;
