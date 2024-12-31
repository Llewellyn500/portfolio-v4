import {
    SiGnubash,
    SiNextdotjs,
    SiNodedotjs,
    SiPython,
    SiTailwindcss,
    SiTypescript,
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
  showGithub?: boolean; // Optional property
  showLink?: boolean;
};

export const projects = [
    {
        id: 0,
        name: "MediWhisper",
        description:
      "Skip the wait. AI-powered pre-diagnosis and direct doctor consultations streamline your healthcare journey.",
        technologies: [SiTypescript, SiNextdotjs, SiTailwindcss],
        techNames: ["TypeScript", "Next.js", "Tailwind CSS"],
        techLinks: [
            "https://www.typescriptlang.org/",
            "https://nextjs.org/",
            "https://tailwindcss.com/",
        ],
        github: "https://github.com/Llewellyn500/mediwhisper",
        demo: "https://mediwhisper.vercel.app/",
        image: "/projects/mediwhisper.webp",
        available: true,
        showGithub: true,
        showLink: true,
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
        description: "This is a tool to simplify some tasks done on the Rachel-pi",
        technologies: [SiGnubash, SiPython],
        techNames: ["Shell", "Python"],
        techLinks: [
            "https://www.gnu.org/software/bash/",
            "https://www.python.org/",
        ],
        github: "https://github.com/ComDevNet/rachel-auto",
        demo: "",
        image: "/projects/rachel-auto.webp",
        available: true,
        showLink: false,
    },
    {
        id: 3,
        name: "CDN Survey",
        description:
      "A survey creation and taking website to run on the CDN servers",
        technologies: [
            SiNextdotjs,
            SiTypescript,
            SiNodedotjs,
            SiGnubash,
            SiTailwindcss,
        ],
        techNames: ["Next.js", "TypeScript", "Node.js", "Bash", "Tailwind CSS"],
        techLinks: [
            "https://nextjs.org/",
            "https://www.typescriptlang.org/",
            "https://nodejs.org/",
            "https://www.gnu.org/software/bash/",
            "https://tailwindcss.com/",
        ],
        github: "https://github.com/ComDevNet/cdn-survey",
        demo: "https://cdn-online-create-survey.vercel.app/",
        image: "/projects/cdn-survey.webp",
        available: true,
    },
    {
        id: 4,
        name: "OC4D",
        description:
      "A collection of resources tailored to help students in the rural areas of Ghana",
        technologies: [SiNextdotjs, SiTypescript, SiNodedotjs, SiTailwindcss],
        techNames: ["Next.js", "TypeScript", "Node.js", "Tailwind CSS"],
        techLinks: [
            "https://nextjs.org/",
            "https://www.typescriptlang.org/",
            "https://nodejs.org/",
            "https://tailwindcss.com/",
        ],
        github: "",
        demo: "https://www.oc4d.org/categories",
        image: "/projects/oc4d.webp",
        available: true,
    },
    {
        id: 5,
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
