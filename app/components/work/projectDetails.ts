import {
    SiCplusplus,
    SiCss3,
    SiFramer,
    SiGithub, SiGnubash, SiHtml5, SiNeovim,
    SiNextdotjs,
    SiPython,
    SiReact,
    SiRust,
    SiTailwindcss,
    SiTypescript,
    SiVsco,
    SiZig
} from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";

export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: any[];
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
        technologies: [BiLogoVisualStudio],
        techNames: ["VS Code"],
        techLinks: ["https://code.visualstudio.com/"],
        github: "https://github.com/Llewellyn500/Legendary-Dark",
        demo: "https://marketplace.visualstudio.com/items?itemName=LlewellynPaintsil.legendary-dark",
        image: "/projects/legendary-dark.webp",
        available: true,
    },
    {
        id: 2,
        name: "Rachel Auto",
        description:
            "This is a tool to simplify some tasks done on the Rachel-pi",
        technologies: [SiGnubash, SiPython],
        techNames: ["Shell", "Python"],
        techLinks: ["https://www.gnu.org/software/bash/", "https://www.python.org/"],
        github: "https://github.com/ComDevNet/rachel-auto",
        demo: "https://github.com/ComDevNet/rachel-auto",
        image: "/projects/rachel-auto.webp",
        available: true,
    },
    {
        id: 3,
        name: "Rachel-Pi Log Converter",
        description:
            "A web application that allows you to convert the logs from the Rachel-Pi into a more readable format.",
        technologies: [SiHtml5, SiCss3, SiPython],
        techNames: ["HTML", "CSS", "Python"],
        techLinks: ["https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics", "https://developer.mozilla.org/en-US/docs/Web/CSS", "https://www.python.org/"],
        github: "https://rachel-pi-log-converter.azurewebsites.net/",
        demo: "https://github.com/Llewellyn500/RACHEL-Pi-log-file-converter",
        image: "/projects/rachel-pi-log-converter.webp",
        available: true,
    },
    {
        id: 4,
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
