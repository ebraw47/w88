import type { Metadata, Viewport } from "next";
import { Chakra_Petch, Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DeferredStyles from "@/components/DeferredStyles";
import ScrollToTopWrapper from "@/components/ScrollToTopWrapper";
import WebVitalsTracker from "@/components/WebVitalsTracker";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-poppins",
});

/** Bold italic geometric wordmark for W88 */
const chakraPetch = Chakra_Petch({
  subsets: ["latin"],
  weight: ["600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-logo",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#1f1f1f",
  viewportFit: "cover",
  interactiveWidget: "resizes-visual",
};

export const metadata: Metadata = {
  metadataBase: new URL('https://w88.net.pk'),
  title: {
    default: "W88 Pakistan — Join Official Live Casino & Sports 2026",
    template: "%s | W88"
  },
  description: "W88 Pakistan 2026 — join the official mobile lobby for live dealer casino, sports, keno & lottery. PKR welcome, bonuses, Grab A Member referral. 21+.",
  keywords: [
    "W88",
    "W88 Pakistan",
    "W88 login",
    "W88 join",
    "W88 PKR",
    "W88 casino",
    "W88 sports",
    "W88 referral",
    "W88 grab a member",
    "w88.net.pk",
    "W88 2026"
  ],
  authors: [{ name: "W88 Pakistan" }],
  creator: "W88",
  publisher: "W88",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon-32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon.png', type: 'image/png', sizes: '32x32' },
      { url: '/w88-logo.webp', type: 'image/webp', sizes: '512x512' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' }
    ],
    shortcut: '/favicon-32.png'
  },
  verification: {
    google: "8a7c21f6e90a89ef",
  },
  alternates: {
    canonical: "https://w88.net.pk",
  },
  openGraph: {
    title: "W88 Pakistan — Join Official Live Casino & Sports 2026",
    description: "Join W88 Pakistan — live casino, sports, PKR cashier, bonuses & Grab A Member referral rewards.",
    url: "https://w88.net.pk",
    siteName: "W88",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://w88.net.pk/feature/og-image.webp",
        width: 1200,
        height: 630,
        alt: "W88 - Official Pakistan Gaming",
      },
      {
        url: "https://w88.net.pk/feature/og-image-square.webp",
        width: 800,
        height: 800,
        alt: "W88 - Official Pakistan Gaming",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "W88 Pakistan — Join Official Live Casino & Sports 2026",
    description: "Join W88 Pakistan — live casino, sports, PKR cashier & referral bonuses. 21+.",
    creator: "@w88pakistan",
    images: [
      {
        url: "https://w88.net.pk/feature/twitter-card.webp",
        width: 1200,
        height: 600,
        alt: "W88 - Official Pakistan Gaming",
      }
    ],
  },
  applicationName: "W88",
  category: "Gaming",
  classification: "Online Casino & Sports Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${chakraPetch.variable}`} suppressHydrationWarning>
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="geo.region" content="PK" />
        <meta name="geo.placename" content="Pakistan" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon-16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon.webp" type="image/webp" sizes="64x64" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />

        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        <Script id="deferred-manifest" strategy="lazyOnload">
          {`(function(){var l=document.createElement('link');l.rel='manifest';l.href='/manifest.json';document.head.appendChild(l);})();`}
        </Script>
        {typeof process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID === 'string' &&
         process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID &&
         !/^G-XXXXXXXXXX$/i.test(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
              strategy="lazyOnload"
            />
            <Script id="google-analytics" strategy="lazyOnload">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                  send_page_view: false,
                  transport_type: 'beacon'
                });
              `}
            </Script>
          </>
        )}
      </head>
      <body
        className={`${poppins.className} antialiased bg-primary text-white min-h-screen flex flex-col game-theme`}
        suppressHydrationWarning
      >
        <div className="game-bg fixed inset-0 z-0" aria-hidden="true">
          <span className="game-bg-glow game-bg-glow-a" />
          <span className="game-bg-glow game-bg-glow-b" />
          <span className="game-bg-glow game-bg-glow-c" />
          <span className="game-bg-grid" />
          <span className="game-bg-scan" />
          <span className="game-bg-vignette" />
        </div>
        <Header />
        <main className="flex-grow relative z-10">
        {children}
        </main>
        <DeferredStyles />
        <Footer />
        <ScrollToTopWrapper />
        <WebVitalsTracker />
        
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://w88.net.pk/#organization",
              "name": "W88",
              "url": "https://w88.net.pk",
              "logo": {
                "@type": "ImageObject",
                "url": "https://w88.net.pk/w88-logo.webp",
                "width": 512,
                "height": 512
              },
              "description": "W88 Pakistan — live casino, sports betting, keno and lottery via the official mobile lobby. PKR cashier when available.",
              "areaServed": { "@type": "Country", "name": "Pakistan", "alternateName": "PK" },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Support",
                "email": "support@w88.net.pk",
                "areaServed": "PK",
                "availableLanguage": ["English", "Urdu"]
              }
            })
          }}
        />
      </body>
    </html>
  );
}
