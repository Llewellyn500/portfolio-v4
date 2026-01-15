"use client";
import Link from "next/link";
import NavContainer from "../components/navcontainer/NavContainer";
import React from "react";

const NavBar = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href.split("#")[1];
    window.scrollTo({
      top: document.getElementById(href)?.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className="nowrap fixed bottom-10 left-0 right-0 z-50 mx-auto my-0 flex items-center justify-center gap-1 px-1 py-1 text-[#8a2be2] sm:w-[383.3px] md:p-2 lg:w-[391.3px]">
      <NavContainer
        width="110%"
        height="50px"
        color="#141413"
        borderRadius={10}
        top="0px"
        left="0px"
        angle={0}
      >
        <nav className="nowrap bottom-30 fixed left-0 right-0 z-50 mx-auto my-0 flex items-center justify-center gap-1 rounded-lg px-1 py-1 text-[#e4ded7] sm:w-[383.3px] md:p-2 lg:w-[391.3px]">
          <Link
            href="#home"
            data-blobity-magnetic="false"
            onClick={handleScroll}
            aria-label="Scroll to Home Section"
          >
            <h4 className="px-2 py-2 text-[12px] sm:px-4 sm:text-[14px] md:px-4 md:py-1">
              HOME
            </h4>
          </Link>

          <Link
            href="#about"
            data-blobity-magnetic="false"
            onClick={handleScroll}
            aria-label="Scroll to About Section"
          >
            <h4 className="px-2 py-2 text-[12px] sm:px-4 sm:text-[14px] md:px-4 md:py-1">
              ABOUT
            </h4>
          </Link>

          <Link
            href="#work"
            data-blobity-magnetic="false"
            onClick={handleScroll}
            aria-label="Scroll to Work Section"
          >
            <h4 className="px-2 py-2 text-[12px] sm:px-4 sm:text-[14px] md:px-4 md:py-1">
              WORK
            </h4>
          </Link>

          <Link
            href="#contact"
            data-blobity-magnetic="false"
            onClick={handleScroll}
            aria-label="Scroll to Contact Section"
          >
            <h4 className="px-2 py-2 text-[12px] sm:px-4 sm:text-[14px] md:px-4 md:py-1">
              CONTACT
            </h4>
          </Link>

          <Link
            href="https://llewellyn500.github.io/Resume/"
            data-blobity-magnetic="false"
            aria-label="Open CV"
            target="_blank"
          >
            <h4 className="px-2 py-2 text-[12px] sm:px-4 sm:text-[14px] md:px-4 md:py-1">
              CV
            </h4>
          </Link>
        </nav>
      </NavContainer>
    </nav>
  );
};

export default NavBar;
