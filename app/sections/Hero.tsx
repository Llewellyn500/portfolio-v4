import { spaceGrotesk } from "../../public/fonts/spaceGrotesk.ts";
import { motion } from "framer-motion";
import Logo from "../components/svg/Logo.tsx";
import HeroBackground from "../components/background/HeroBackground.tsx";
import React from "react";

const Hero = () => {
  return (
    <motion.section
      className="relative z-10 flex h-[100vh] w-full justify-center"
      id="home"
      initial="initial"
      animate="animate"
    >
      <HeroBackground />
      <div className="mt-10 flex flex-col items-center justify-center sm:mt-0">
        <div
          className={`relative flex flex-col items-center justify-center ${spaceGrotesk.className} pointer-events-none`}
        >
          <Logo width={100} height={100} />
          <div className="mt-6 text-center text-[#e4ded7]">
            <h1 className="text-3xl font-bold uppercase tracking-[0.35em] sm:text-4xl hidden">
              Llewellyn Paintsil
            </h1>
            <p className="mt-3 text-xs uppercase tracking-[0.45em] text-[#b8b1aa] sm:text-sm hidden">
              Designer, Developer and Content Creator
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
