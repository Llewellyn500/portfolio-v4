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
    SiReact,
    SiBun,
    SiAndroid,
    SiNodedotjs,
    SiPhp,
    SiOpenai,
    SiGooglegemini,
    SiClaude,
    SiAdobeillustrator,
    SiPopos,
    SiTypescript,
} from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";
import { FaWindows } from "react-icons/fa";
import { RiMixtralFill } from "react-icons/ri";

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
                                <SiAdobephotoshop
                                    size={50}
                                    data-blobity-tooltip={"Adobe Photoshop"}
                                />
                                <SiFigma size={50} data-blobity-tooltip={"Figma"} />
                                <SiAdobeillustrator
                                    size={50}
                                    data-blobity-tooltip={"Adobe Illustrator"}
                                />
                            </AnimatedTools>
                        </div>
                    </div>
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
                        <AnimatedBody delay={0.2} text="Frontend Development" />
                        <div>
                            <AnimatedTools
                                className="grid grid-cols-6 gap-4"
                                delay={0.2}
                                stepSize={0.1}
                                iconSize={50}
                            >
                                <SiHtml5 size={50} data-blobity-tooltip={"HTML"} />
                                <SiCss3 size={50} data-blobity-tooltip={"CSS3"} />
                                <SiJavascript size={50} data-blobity-tooltip={"JavaScript"} />
                                <SiTypescript size={50} data-blobity-tooltip={"TypeScript"} />
                                <SiReact size={50} data-blobity-tooltip={"React"} />
                                <SiNextdotjs size={50} data-blobity-tooltip={"Next.js"} />
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
                                <SiPhp size={50} data-blobity-tooltip={"PHP"} />
                                <SiNodedotjs size={50} data-blobity-tooltip={"Node.js"} />
                                <SiBun size={50} data-blobity-tooltip={"Bun"} />
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
                                <SiGithub size={50} data-blobity-tooltip={"GitHub"} />
                                <SiGit size={50} data-blobity-tooltip={"Git"} />
                                <BiLogoVisualStudio
                                    size={50}
                                    data-blobity-tooltip={"VS Code"}
                                />
                                <SiGnubash size={50} data-blobity-tooltip={"Bash Scripting"} />
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
                                <SiPopos size={50} data-blobity-tooltip={"Pop OS"} />
                                <FaWindows size={50} data-blobity-tooltip={"Windows"} />
                                <SiAndroid size={50} data-blobity-tooltip={"Android"} />
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
                                <SiOpenai size={50} data-blobity-tooltip={"ChatGPT"} />
                                <SiGooglegemini
                                    size={50}
                                    data-blobity-tooltip={"Google Gemini"}
                                />
                                <SiClaude size={50} data-blobity-tooltip={"Claude ai"} />
                                <RiMixtralFill size={50} data-blobity-tooltip={"Mixtral AI"} />
                            </AnimatedTools>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tools;
