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
  imageFull?: string;
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
  moreDetails?: {
    description: string;
    image: string;
  }[];
};

export const projects: ProjectProps[] = [
  {
    id: 0,
    name: "Mediwhisper Predict",
    description:
      "AI-powered health predictions to help you understand potential health concerns before consulting medical professionals.",
    technologies: [SiTypescript, SiNextdotjs, SiTailwindcss],
    techNames: ["TypeScript", "Next.js", "Tailwind CSS"],
    techLinks: [
      "https://www.typescriptlang.org/",
      "https://nextjs.org/",
      "https://tailwindcss.com/",
    ],
    github: "",
    demo: "https://predict-mediwhisper.vercel.app/",
    image: "/projects/predict-mediwhisper.webp",
    imageFull: "/projects/predict-mediwhisper-full.webp",
    available: true,
    showLink: true,
    moreDetails: [
      {
        description:
          "The initial concept for MediWhisper was to create a simple way where patients can get predictions based of the symptoms that is entered into the system using AI.",
        image: "/projects/predict-mediwhisper-01.webp",
      },
      {
        description:
          "The platform evolved into a comprehensive healthcare system that allows patients to get predictions based of the symptoms that is entered into the system using AI. It also allows patients to book appointments with doctors and to have video consultations.",
        image: "/projects/predict-mediwhisper-02.webp",
      },
      {
        description:
          "Now the patient can also search and get indept details of the disease and the possible treatment options. It just keeps getting better.",
        image: "/projects/predict-mediwhisper-03.webp",
      },
    ],
  },
  // {
  //   id: 1,
  //   name: "Asɛm Bi",
  //   description: "Create and share beautiful letters with QR codes",
  //   technologies: [SiTypescript, SiNextdotjs, SiTailwindcss],
  //   techNames: ["TypeScript", "Next.js", "Tailwind CSS"],
  //   techLinks: [
  //     "https://www.typescriptlang.org/",
  //     "https://nextjs.org/",
  //     "https://tailwindcss.com/",
  //   ],
  //   github: "",
  //   demo: "https://asem-bi.vercel.app/",
  //   image: "/projects/asem-bi.webp",
  //   available: true,
  //   showLink: true,
  //   moreDetails: [
  //     {
  //       description:
  //         "The initial concept for Asɛm Bi was to create a simple, yet elegant way to share letters with friends and family. I wanted to create a platform that would allow users to create and share beautiful letters with QR codes. The idea was to create a digital version of the traditional letter, but with a modern twist.",
  //       image: "/projects/asem-bi.webp",
  //     },
  //     {
  //       description:
  //         "The platform allows users to create letters with a variety of templates and fonts. Users can also add images and videos to their letters. Once the letter is created, users can generate a QR code that can be shared with the recipient. The recipient can then scan the QR code to view the letter.",
  //       image: "/projects/asem-bi.webp",
  //     },
  //   ],
  // },
  // {
  //   id: 2,
  //   name: "Legendary Dark",
  //   description:
  //     "My very own vs code theme. I've been using it for a while now and I'm very happy with it.",
  //   technologies: [BiLogoVisualStudio],
  //   techNames: ["VS Code"],
  //   techLinks: ["https://code.visualstudio.com/"],
  //   github: "https://github.com/Llewellyn500/Legendary-Dark",
  //   demo: "https://marketplace.visualstudio.com/items?itemName=LlewellynPaintsil.legendary-dark",
  //   image: "/projects/legendary-dark.webp",
  //   available: true,
  //   moreDetails: [
  //     {
  //       description:
  //         "Legendary Dark is a dark theme for Visual Studio Code. It is designed to be easy on the eyes and to provide a comfortable coding experience. The theme is based on the popular One Dark Pro theme, but with a few tweaks to make it more unique.",
  //       image: "/projects/legendary-dark.webp",
  //     },
  //     {
  //       description:
  //         "The theme features a dark background with a slight blue tint. The syntax highlighting is bright and colorful, making it easy to read code. The theme also includes a set of custom icons for files and folders.",
  //       image: "/projects/legendary-dark.webp",
  //     },
  //   ],
  // },
  // {
  //   id: 3,
  //   name: "MediWhisper",
  //   description:
  //     "Skip the wait. AI-powered pre-diagnosis and direct doctor consultations streamline your healthcare journey.",
  //   technologies: [SiTypescript, SiNextdotjs, SiTailwindcss],
  //   techNames: ["TypeScript", "Next.js", "Tailwind CSS"],
  //   techLinks: [
  //     "https://www.typescriptlang.org/",
  //     "https://nextjs.org/",
  //     "https://tailwindcss.com/",
  //   ],
  //   github: "https://github.com/Llewellyn500/mediwhisper",
  //   demo: "https://mediwhisper.vercel.app/",
  //   image: "/projects/mediwhisper.webp",
  //   available: true,
  //   showGithub: true,
  //   showLink: true,
  //   moreDetails: [
  //     {
  //       description:
  //         "MediWhisper is an AI-powered healthcare platform that aims to streamline the patient journey. The platform uses AI to provide pre-diagnosis and direct doctor consultations. Patients can use the platform to check their symptoms and get advice on what to do next.",
  //       image: "/projects/mediwhisper.webp",
  //     },
  //     {
  //       description:
  //         "The platform also allows patients to book appointments with doctors and to have video consultations. MediWhisper is designed to be easy to use and to provide patients with the care they need, when they need it.",
  //       image: "/projects/mediwhisper.webp",
  //     },
  //   ],
  // },
  // {
  //   id: 4,
  //   name: "CDN Survey",
  //   description:
  //     "A survey creation and taking website to run on the CDN servers",
  //   technologies: [
  //     SiNextdotjs,
  //     SiTypescript,
  //     SiNodedotjs,
  //     SiGnubash,
  //     SiTailwindcss,
  //   ],
  //   techNames: ["Next.js", "TypeScript", "Node.js", "Bash", "Tailwind CSS"],
  //   techLinks: [
  //     "https://nextjs.org/",
  //     "https://www.typescriptlang.org/",
  //     "https://nodejs.org/",
  //     "https://www.gnu.org/software/bash/",
  //     "https://tailwindcss.com/",
  //   ],
  //   github: "https://github.com/ComDevNet/cdn-survey",
  //   demo: "https://cdn-online-create-survey.vercel.app/",
  //   image: "/projects/cdn-survey.webp",
  //   available: true,
  // },
  // {
  //   id: 5,
  //   name: "OC4D",
  //   description:
  //     "A collection of resources tailored to help students in the rural areas of Ghana",
  //   technologies: [SiNextdotjs, SiTypescript, SiNodedotjs, SiTailwindcss],
  //   techNames: ["Next.js", "TypeScript", "Node.js", "Tailwind CSS"],
  //   techLinks: [
  //     "https://nextjs.org/",
  //     "https://www.typescriptlang.org/",
  //     "https://nodejs.org/",
  //     "https://tailwindcss.com/",
  //   ],
  //   github: "",
  //   demo: "https://www.oc4d.org/categories",
  //   image: "/projects/oc4d.webp",
  //   available: true,
  // },
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
