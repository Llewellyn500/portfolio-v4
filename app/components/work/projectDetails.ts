import {
    SiCplusplus,
    SiFramer,
    SiGithub, SiNeovim,
    SiNextdotjs,
    SiReact,
    SiRust,
    SiTailwindcss,
    SiTypescript,
    SiVisualstudiocode,
    SiVsco,
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
        name: "Legendary Dark",
        description:
            "My very own vs code theme. I've been using it for a while now and I'm very happy with it.",
        technologies: [SiVisualstudiocode],
        techNames: ["VS Code"],
        techLinks: ["https://code.visualstudio.com/"],
        github: "https://github.com/Llewellyn500/Legendary-Dark",
        demo: "https://marketplace.visualstudio.com/items?itemName=LlewellynPaintsil.legendary-dark",
        image: "/projects/legendary-dark.webp",
        available: true,
    },
    {
        id: 2,
        name: "Coming Soon",
        description:
            "I've got some couple of projects i'm currently working on. I'll update this section as soon as I'm done.",
        technologies: [],
        techNames: [],
        techLinks: [],
        github: "",
        demo: "",
        image: "/projects/construction.webp",
        available: false,
    },
];
