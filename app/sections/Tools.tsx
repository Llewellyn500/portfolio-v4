import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody.tsx";
import AnimatedTitle from "../animations/AnimatedTitle.tsx";
import AnimatedTools from "../animations/AnimatedTools.tsx";

// Icons Imports
import {
  SiAdobephotoshop,
  SiFigma,
  SiCss3,
  SiGit,
  SiHtml5,
  SiGnubash,
  SiGithub,
  SiJavascript,
  SiNextdotjs,
  SiBun,
  SiAndroid,
  SiNodedotjs,
  SiOpenai,
  SiGooglegemini,
  SiClaude,
  SiAdobeillustrator,
  SiTypescript,
  SiZorin,
  SiAffinity,
  SiAmazonwebservices,
  SiWarp,
  SiTailwindcss,
  SiFirebase,
} from "react-icons/si";
import Link from "next/link";
import { BiLogoVisualStudio } from "react-icons/bi";
import { FaWindows } from "react-icons/fa";

const Tools = () => {
  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pb-36 pt-16 md:pb-44 md:pt-20 lg:pb-56 lg:pt-20"
      id="tools"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle
          text={"TOOLS I'M USING."}
          className={
            "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

        <div className="mx-auto w-[100%] justify-center lg:max-w-[1200px]">
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
            <AnimatedBody delay={0.1} text="Design" />
            <div>
              <AnimatedTools
                className="grid grid-cols-5 gap-4"
                delay={0.1}
                stepSize={0.1}
                iconSize={50}
              >
                <Link
                  href="https://www.adobe.com/products/photoshop.html"
                  target="_blank"
                  aria-label="Adobe Photoshop"
                >
                  <SiAdobephotoshop
                    size={50}
                    data-blobity-tooltip={"Adobe Photoshop"}
                  />
                </Link>
                <Link
                  href="https://www.figma.com/"
                  target="_blank"
                  aria-label="Figma"
                >
                  <SiFigma size={50} data-blobity-tooltip={"Figma"} />
                </Link>
                <Link
                  href="https://www.adobe.com/products/illustrator.html"
                  target="_blank"
                  aria-label="Adobe Illustrator"
                >
                  <SiAdobeillustrator
                    size={50}
                    data-blobity-tooltip={"Adobe Illustrator"}
                  />
                </Link>
                <Link
                  href="https://www.affinity.studio/"
                  target="_blank"
                  aria-label="Affinity Designer"
                >
                  <SiAffinity
                    size={50}
                    data-blobity-tooltip={"Affinity Studio"}
                  />
                </Link>
              </AnimatedTools>
            </div>
          </div>
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
            <AnimatedBody delay={0.2} text="Frontend Development" />
            <div>
              <AnimatedTools
                className="grid grid-cols-5 gap-4"
                delay={0.2}
                stepSize={0.1}
                iconSize={50}
              >
                <Link
                  href="https://nextjs.org/"
                  target="_blank"
                  aria-label="Next.js"
                >
                  <SiNextdotjs size={50} data-blobity-tooltip={"Next.js"} />
                </Link>
                <Link
                  href="https://www.typescriptlang.org/"
                  target="_blank"
                  aria-label="TypeScript"
                >
                  <SiTypescript size={50} data-blobity-tooltip={"TypeScript"} />
                </Link>
                <Link
                  href="https://tailwindcss.com/"
                  target="_blank"
                  aria-label="Tailwind CSS"
                >
                  <SiTailwindcss
                    size={50}
                    data-blobity-tooltip={"Tailwind CSS"}
                  />
                </Link>
                <Link
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  target="_blank"
                  aria-label="JavaScript"
                >
                  <SiJavascript size={50} data-blobity-tooltip={"JavaScript"} />
                </Link>
              </AnimatedTools>
            </div>
          </div>
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
            <AnimatedBody delay={0.2} text="Backend Development" />
            <div>
              <AnimatedTools
                className="grid grid-cols-5 gap-4"
                delay={0.2}
                stepSize={0.1}
                iconSize={50}
              >
                <Link
                  href="https://nodejs.org/"
                  target="_blank"
                  aria-label="Node.js"
                >
                  <SiNodedotjs size={50} data-blobity-tooltip={"Node.js"} />
                </Link>
                <Link href="https://bun.sh/" target="_blank" aria-label="Bun">
                  <SiBun size={50} data-blobity-tooltip={"Bun"} />
                </Link>
                <Link
                  href="https://aws.amazon.com/"
                  target="_blank"
                  aria-label="AWS"
                >
                  <SiAmazonwebservices size={50} data-blobity-tooltip={"AWS"} />
                </Link>
                <Link
                  href="https://firebase.google.com/"
                  target="_blank"
                  aria-label="Firebase"
                >
                  <SiFirebase size={50} data-blobity-tooltip={"Firebase"} />
                </Link>
              </AnimatedTools>
            </div>
          </div>
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
            <AnimatedBody delay={0.4} text="Other" />
            <div>
              <AnimatedTools
                className="grid grid-cols-5 gap-4"
                delay={0.4}
                stepSize={0.1}
                iconSize={50}
              >
                <Link
                  href="https://github.com/"
                  target="_blank"
                  aria-label="GitHub"
                >
                  <SiGithub size={50} data-blobity-tooltip={"GitHub"} />
                </Link>
                <Link
                  href="https://git-scm.com/"
                  target="_blank"
                  aria-label="Git"
                >
                  <SiGit size={50} data-blobity-tooltip={"Git"} />
                </Link>
                <Link
                  href="https://code.visualstudio.com/"
                  target="_blank"
                  aria-label="VS Code"
                >
                  <BiLogoVisualStudio
                    size={50}
                    data-blobity-tooltip={"VS Code"}
                  />
                </Link>
                <Link
                  href="https://www.gnu.org/software/bash/"
                  target="_blank"
                  aria-label="Bash"
                >
                  <SiGnubash
                    size={50}
                    data-blobity-tooltip={"Bash Scripting"}
                  />
                </Link>
                <Link
                  href="https://www.warp.dev/"
                  target="_blank"
                  aria-label="Warp Terminal"
                >
                  <SiWarp size={50} data-blobity-tooltip={"Warp Terminal"} />
                </Link>
              </AnimatedTools>
            </div>
          </div>
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
            <AnimatedBody delay={0.4} text="OS" />
            <div>
              <AnimatedTools
                className="grid grid-cols-5 gap-4"
                delay={0.4}
                stepSize={0.1}
                iconSize={50}
              >
                <Link
                  href="https://zorin.com/os/"
                  target="_blank"
                  aria-label="Zorin OS"
                >
                  <SiZorin size={50} data-blobity-tooltip={"Zorin OS"} />
                </Link>
                <Link
                  href="https://www.microsoft.com/windows"
                  target="_blank"
                  aria-label="Windows"
                >
                  <FaWindows size={50} data-blobity-tooltip={"Windows"} />
                </Link>
                <Link
                  href="https://www.android.com/"
                  target="_blank"
                  aria-label="Android"
                >
                  <SiAndroid size={50} data-blobity-tooltip={"Android"} />
                </Link>
              </AnimatedTools>
            </div>
          </div>
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
            <AnimatedBody delay={0.4} text="AI Helpers" />
            <div>
              <AnimatedTools
                className="grid grid-cols-5 gap-4"
                delay={0.4}
                stepSize={0.1}
                iconSize={50}
              >
                <Link
                  href="https://openai.com/"
                  target="_blank"
                  aria-label="ChatGPT"
                >
                  <SiOpenai size={50} data-blobity-tooltip={"ChatGPT"} />
                </Link>
                <Link
                  href="https://deepmind.google/technologies/gemini/"
                  target="_blank"
                  aria-label="Google Gemini"
                >
                  <SiGooglegemini
                    size={50}
                    data-blobity-tooltip={"Google Gemini"}
                  />
                </Link>
                <Link
                  href="https://www.anthropic.com/claude"
                  target="_blank"
                  aria-label="Claude"
                >
                  <SiClaude size={50} data-blobity-tooltip={"Claude ai"} />
                </Link>
              </AnimatedTools>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
