import type { NextConfig } from "next";

/**
 * W88 - Next.js Configuration
 */
const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  compress: true,
  turbopack: {},
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "w88.net.pk",
      },
    ],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 320, 384],
    qualities: [75, 80, 90, 100],
  },

  async redirects() {
    return [
      // Legacy K666 → W88
      { source: "/download-k666", destination: "/join-w88", permanent: true },
      { source: "/deposit-money-in-k666", destination: "/deposit-money-in-w88", permanent: true },
      { source: "/withdraw-money-from-k666", destination: "/withdraw-money-from-w88", permanent: true },
      { source: "/k666-for-pc", destination: "/w88-for-pc", permanent: true },
      { source: "/k666-logo.webp", destination: "/w88-logo.webp", permanent: true },
      { source: "/blog/k666-app-review-2026", destination: "/blog/w88-app-review-2026", permanent: true },
      { source: "/blog/how-to-download-install-k666-apk-pakistan", destination: "/blog/how-to-join-w88-pakistan", permanent: true },
      { source: "/blog/create-k666-account-and-login", destination: "/blog/create-w88-account-and-login", permanent: true },
      { source: "/blog/k666-deposit-jazzcash-easypaisa-guide", destination: "/blog/w88-deposit-guide-pakistan", permanent: true },
      { source: "/blog/k666-withdraw-money-guide", destination: "/blog/w88-withdraw-money-guide", permanent: true },
      { source: "/blog/is-k666-safe-legal-pakistan", destination: "/blog/is-w88-safe-legal-pakistan", permanent: true },
      { source: "/blog/how-to-use-k666-app-pakistan-guide", destination: "/blog/how-to-use-w88-pakistan-guide", permanent: true },
      { source: "/blog/k666-vip-rebate-invite-guide", destination: "/blog", permanent: true },
      // Older brands → W88
      { source: "/download-777dx", destination: "/join-w88", permanent: true },
      { source: "/deposit-money-in-777dx", destination: "/deposit-money-in-w88", permanent: true },
      { source: "/withdraw-money-from-777dx", destination: "/withdraw-money-from-w88", permanent: true },
      { source: "/777dx-for-pc", destination: "/w88-for-pc", permanent: true },
      { source: "/download-sk777", destination: "/join-w88", permanent: true },
      { source: "/deposit-money-in-sk777", destination: "/deposit-money-in-w88", permanent: true },
      { source: "/withdraw-money-from-sk777", destination: "/withdraw-money-from-w88", permanent: true },
      { source: "/sk777-for-pc", destination: "/w88-for-pc", permanent: true },
      { source: "/download-jz666", destination: "/join-w88", permanent: true },
      { source: "/deposit-money-in-jz666", destination: "/deposit-money-in-w88", permanent: true },
      { source: "/withdraw-money-from-jz666", destination: "/withdraw-money-from-w88", permanent: true },
      { source: "/jz666-for-pc", destination: "/w88-for-pc", permanent: true },
      { source: "/download-pk365", destination: "/join-w88", permanent: true },
      { source: "/deposit-money-in-pk365", destination: "/deposit-money-in-w88", permanent: true },
      { source: "/withdraw-money-from-pk365", destination: "/withdraw-money-from-w88", permanent: true },
      { source: "/pk365-for-pc", destination: "/w88-for-pc", permanent: true },
      { source: "/download-bn55", destination: "/join-w88", permanent: true },
      { source: "/deposit-money-in-bn55", destination: "/deposit-money-in-w88", permanent: true },
      { source: "/withdraw-money-from-bn55", destination: "/withdraw-money-from-w88", permanent: true },
      { source: "/bn55-for-pc", destination: "/w88-for-pc", permanent: true },
    ];
  },

  async rewrites() {
    return [
      {
        source: "/.well-known/:path*",
        destination: "/.well-known/:path*",
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "X-DNS-Prefetch-Control", value: "on" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
      {
        source: "/css/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/favicon.ico",
        headers: [
          { key: "X-Robots-Tag", value: "noindex" },
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
      config.target = ["web", "es2022"];
      config.resolve.alias = {
        ...config.resolve.alias,
        "../build/polyfills/polyfill-module": false,
        "next/dist/build/polyfills/polyfill-module": false,
      };
    }
    return config;
  },

  experimental: {
    optimizeCss: true,
    inlineCss: true,
    scrollRestoration: false,
    optimizePackageImports: ["react-icons"],
  },

  modularizeImports: {
    "react-icons": {
      transform: "react-icons/{{member}}",
    },
  },
};

export default nextConfig;
