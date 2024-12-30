import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody.tsx";
import AnimatedTitle from "../animations/AnimatedTitle.tsx";
import Image from "next/image";

const About = () => {
    return (
        <section
            className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
            id="about"
        >
            {/* <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
                <Image src={"/logo.svg"} alt={"logo"} width={"100"} height={"100"} className="mb-10"/>
            </div> */}
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
                        <AnimatedBody text="I'm your friendly neighborhood Llewellyn Adonteng Paintsil." />
                        <AnimatedBody delay={0.1} text="A student in KNUST studying Computer Science. I've had this passion for coding and design since I was just a kid, and I've been doing it ever since. Scratch that, I've been doing it since Covid-19 hit the world. Even though a lot of people died, It was part of the best times in my life. I had time to do what i want and follow my passion." />
                        <AnimatedBody delay={0.2} text="I started a youtube channel called LP Teach a year before covid started, it was doing well but then the change in YouTube management came and it affected the channel greatly, the channel got permanently banned and i had to start over from scratch with my 2 new channels: LAP – Tutorials and Arclapain, where I share my tech knowledge with the world and play games." />
                        <AnimatedBody delay={0.3} text="Thats something small about me, I'm open to collaborating on any project and videos you got, just hit me up." />
                        {/* <AnimatedBody delay={0.4} text="I've run out of creativity so I'll write it later." /> */}
                        {/* <AnimatedBody delay={0.1} text="By day, I'm a coding wizard crafting software that's both beautiful and user-friendly. By night, I'm a YouTube demigod, juggling two channels; LAP – Tutorials and Arclapain, where I share my tech knowledge with the world and play games." />
                        <AnimatedBody delay={0.2} text="Think of me as the Bob Ross of software development, except instead of fluffy clouds and happy trees, I paint digital landscapes with pixels and lines of code. And instead of a soothing voice, you get my infectious enthusiasm for all things tech." />

                        <AnimatedBody
                            delay={0.3}
                            text="I've been designing and creating content since 2020, but sadly my previous channel got taken down. But I'll keep designing sleek user interface and content, I’ll always strive to create something visually stunning and interesting."
                        />

                        <AnimatedBody
                            delay={0.4}
                            text="Right now, I'm juggling more hats than a juggling octopus!"
                        />
                        <AnimatedBody
                            delay={0.5}
                            text="While I'm busy diving deep into the world of computer science as a BSc student at KNUST, I'm also putting my tech skills to the test as a technology specialist for Community Development Network. And if that wasn't enough, I'm constantly brewing up exciting personal projects on the side."
                        />
                        <AnimatedBody
                            delay={0.6}
                            text="So basically, I'm a caffeine-fueled whirlwind of code, creativity, and community spirit. If you've got an idea or opportunity that sounds like a blast, don't hesitate to toss it my way – I'm always open to a good challenge!"
                        /> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
