import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody.tsx";
import AnimatedTitle from "../animations/AnimatedTitle.tsx";

const About = () => {
    return (
        <section
            className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
            id="about"
        >
            <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
                <AnimatedTitle
                    text={"ABOUT ME"}
                    className={
                        "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
                    }
                    wordSpace={"mr-[14px]"}
                    charSpace={"mr-[0.001em]"}
                />

                <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
                        <AnimatedBody text="From the moment I embarked on this second chapter of my life—a moment that seemed to awaken a shared sense of awareness and consciousness in everyone—I've been utterly captivated by technology." />
                        <AnimatedBody delay={0.1} text=" I'm fascinated by its inner workings, its design, its very essence. Every aspect of tech sparks my curiosity, but it's the look and feel of software, and the magic of video, that truly ignite my imagination." />
                        <AnimatedBody delay={0.2} text={`While I yearn to absorb every facet of the tech world, I know time is a precious commodity. I can't learn everything, but I'm relentlessly pursuing knowledge, driven by a powerful goal: to make technology so intuitive and accessible that anyone can use it.`} />
                        <AnimatedBody delay={0.4} text={`This passion fuels my YouTube channel, my brand, and everything I do. My motto? "Simplicity in Tech."`} />
                        {/* <AnimatedBody delay={0.5} text="Join me on this exciting journey as we demystify the world of technology together. We'll break down complex concepts into easy-to-understand explanations, making tech approachable for everyone. And don't worry, we'll still dive into the technical details for those who crave that deeper understanding. Let's explore the future of tech, together!" /> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
