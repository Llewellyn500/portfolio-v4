"use client";
import React, { useState } from "react";
import { useEffectOnce, useEventListener } from "usehooks-ts";

import PreLoader from "./components/other/PreLoader.tsx";
import useBlobity from "./components/blobity/useBlobity.ts";

import Blur from "./components/overlay/Blur.tsx";
import Color from "./components/overlay/Color.tsx";

import NavBar from "./sections/NavBar.tsx";
import Hero from "./sections/Hero.tsx";
import About from "./sections/About.tsx";
import Work from "./sections/Work.tsx";
import Contact from "./sections/Contact.tsx";
import Tools from "./sections/Tools.tsx";
import Footer from "./sections/Footer.tsx";

export default function Home() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isMobile, setIsMobile] = useState(false);

  useEffectOnce(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
    setIsMobile(window.innerWidth < 768);
  });

  useEventListener("resize", () => {
    setIsMobile(window.innerWidth < 768);
  });

  useBlobity({
    licenseKey: "opensource",
    focusableElementsOffsetX: 4,
    focusableElementsOffsetY: 4,
    color: "#ffffff",
    dotColor: "#ffffff",
    invert: true,
    focusableElements: "[data-blobity], [data-blobity-tooltip]",
    font: "'Montserrat','Source Sans Pro',-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif",
    fontSize: 16,
    fontWeight: 900,
    opacity: 1.0,
    fontColor: "#ffffff",
    zIndex: 35,
    size: 70,
    radius: 35,
    magnetic: false,
  });

  return (
    <>
      <PreLoader />
      <Blur />
      <Color />
      <NavBar />
      <main className="flex flex-col items-center justify-center bg-black">
        <Hero />
        <About />
        <Tools />
        <Work />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
