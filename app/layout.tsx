import "./globals.css";
import React, { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "next/font/google";
import Head from "next/head";

const syne = Syne({
    subsets: ["latin"],
    display: "block",
    weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://llewellyn-portfolio.vercel.app/"),
    title: "Llewellyn Adonteng Paintsil",
    description:
    "Hobby Designer, Software Developer and YouTube Content Creator, currently working for Community Development Network (CDN). Focused on improving current technology for education in rural areas, studying in KNUST (Kwame Nkrumah University of Science and Technology), Ghana.",
    generator: "Next.js",
    applicationName: "Llewellyn's Portfolio",
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
    colorScheme: "dark",
    openGraph: {
        title: "Llewellyn Paintsil - Designer, Developer and Content Creator",
        description:
      "Hobby Designer, Software Developer and YouTube Content Creator, currently working for Community Development Network (CDN). Focused on improving current technology for education in rural areas, studying in KNUST (Kwame Nkrumah University of Science and Technology), Ghana.",
        url: "https://llewellyn-portfolio.vercel.app/",
        siteName: "Llewellyn Paintsil Portfolio",
        images: [
            {
                url: "/metadata.jpg",
                width: 1200,
                height: 630,
                alt: "Llewellyn Paintsil - Designer, Developer and Content Creator",
            },
        ],
        locale: "en-US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Llewellyn Paintsil - Designer, Developer and Content Creator",
        description:
      "Hobby Designer, Software Developer and YouTube Content Creator, currently working for Community Development Network (CDN). Focused on improving current technology for education in rural areas, studying in KNUST (Kwame Nkrumah University of Science and Technology), Ghana.",
        creator: "Llewellyn Paintsil",
        // creatorId: "0000000000",
        images: ["/metadata.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <Head>
                <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
                <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
                <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
                <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
                <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
                <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
                <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
                <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
                <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/manifest.json" />
                <meta name="msapplication-TileColor" content="#2196f3" />
                <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
                <meta name="theme-color" content="#141413" />
                
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-03MX5ZPMJ6"></script>
                <script>
                    {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-03MX5ZPMJ6');
                    `}
                </script>
            </Head>
            <body
                className={`${syne.className} scroll-smooth scrollbar-none scrollbar-track-[#0E1016] scrollbar-thumb-[#2196f3]`}
            >
                {children}
            </body>
        </html>
    );
}
