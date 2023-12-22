import {
    SiCplusplus,
    SiFramer,
    SiGithub, SiNeovim,
    SiNextdotjs,
    SiReact,
    SiRust,
    SiTailwindcss,
    SiTypescript,
    SiZig
} from "react-icons/si";
import {IconType} from "react-icons";

export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: IconType[];
  techNames: string[];
  techLinks: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const projects = [
    {
        id: 0,
        name: "Portfolio 2023",
        description:
            "This is the forth iteration of my portfolio. Inspired by a great developer by nuIIpointerexception",
        technologies: [SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiFramer],
        techNames: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Framer Motion"],
        techLinks: ["https://www.typescriptlang.org/", "https://reactjs.org/", "https://nextjs.org/", "https://tailwindcss.com/", "https://www.framer.com/motion/"],
        github: "https://github.com/Llewellyn500/portfolio-v4",
        demo: "https://llewellyn-portfolio.vercel.app/",
        image: "/projects/portfolio1.webp",
        available: true,
    },
    {
        id: 1,
        name: "Coming Soon",
        description:
            "I've got some couple of projects i'm currently working on. I'll update this section as soon as I'm done.",
        technologies: [],
        techNames: [],
        techLinks: [],
        github: "",
        demo: "",
        image: "/projects/construction-2.webp",
        available: false,
    },
];
