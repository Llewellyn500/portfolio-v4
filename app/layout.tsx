import "./globals.css";
import React, { ReactNode } from "react";
import { Metadata } from "next";
import { Syne } from "next/font/google";
import Head from "next/head";
import Script from "next/script";

const siteUrl = "https://llewellyn.is-a.dev/";
const siteName = "Llewellyn Paintsil";
const siteDescription =
  "Hobby Designer, Software Developer and YouTube Content Creator, currently working for Community Development Network (CDN). Focused on improving current technology for education in rural areas, studying in KNUST (Kwame Nkrumah University of Science and Technology), Ghana.";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteName,
  description: siteDescription,
  generator: "Next.js",
  applicationName: siteName,
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Llewellyn Adonteng Paintsil",
    "Sleek style",
    "Design",
    "Visuals",
    "freelance",
    "developer",
    "freelance developer",
    "frontend",
    "nextjs",
    "astro",
    "react",
    "frontend developer",
    "frontend engineer",
    "creative",
    "creative developer",
    "creative engineer",
    "tech",
    "ghana",
    "software",
    "software developer",
    "portfolio",
    "frontend developer portfolio",
    "creative developer portfolio",
    "creative engineer portfolio",
    "software developer portfolio",
    "frontend engineer portfolio",
  ],
  openGraph: {
    title: `${siteName} - Designer, Developer and Content Creator`,
    description: siteDescription,
    url: siteUrl,
    siteName,
    images: [
      {
        url: "/metadata.jpg",
        width: 1200,
        height: 630,
        alt: `${siteName} - Designer, Developer and Content Creator`,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} - Designer, Developer and Content Creator`,
    description: siteDescription,
    creator: siteName,
    images: ["/metadata.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}#website`,
  name: siteName,
  alternateName: [
    "Llewellyn Adonteng Paintsil",
    "Llewellyn's Portfolio",
    "llewellyn.is-a.dev",
  ],
  url: siteUrl,
  description: siteDescription,
  inLanguage: "en-US",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#8a2be2" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#141413" />

      </Head>
      <body
        className={`${syne.className} scroll-smooth scrollbar-none scrollbar-track-[#0E1016] scrollbar-thumb-[#8a2be2]`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-03MX5ZPMJ6"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-03MX5ZPMJ6');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
