import {
  SiFirebase,
  SiGnubash,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";
import { FaAws } from "react-icons/fa";

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
    image: "/projects/predict-mediwhisper/predict-mediwhisper.webp",
    imageFull: "/projects/predict-mediwhisper/predict-mediwhisper-full.webp",
    available: true,
    showLink: true,
    moreDetails: [
      {
        description:
          "The initial concept for MediWhisper was to create a simple way where patients can get predictions based of the symptoms that is entered into the system using AI.",
        image: "/projects/predict-mediwhisper/predict-mediwhisper-01.webp",
      },
      {
        description:
          "The platform evolved into a comprehensive healthcare system that allows patients to get predictions based of the symptoms that is entered into the system using AI. It also allows patients to book appointments with doctors and to have video consultations.",
        image: "/projects/predict-mediwhisper/predict-mediwhisper-02.webp",
      },
      {
        description:
          "Now the patient can also search and get indept details of the disease and the possible treatment options. It just keeps getting better.",
        image: "/projects/predict-mediwhisper/predict-mediwhisper-03.webp",
      },
    ],
  },
  {
    id: 1,
    name: "Mediwhisper Professional",
    description:
      "Streamline specific workflows, enhance patient communication, and manage your schedule with efficiency on the Mediwhisper platform.",
    technologies: [SiTypescript, SiNextdotjs, SiTailwindcss],
    techNames: ["TypeScript", "Next.js", "Tailwind CSS"],
    techLinks: [
      "https://www.typescriptlang.org/",
      "https://nextjs.org/",
      "https://tailwindcss.com/",
    ],
    github: "",
    demo: "https://professional-mediwhisper.vercel.app/",
    image: "/projects/professional-mediwhisper/professional-mediwhisper.webp",
    imageFull:
      "/projects/professional-mediwhisper/professional-mediwhisper-full.webp",
    available: true,
    showLink: true,
    moreDetails: [
      {
        description:
          "The main focus of this project was to create a platform that would allow doctors and other medical professionals manage their consultation schedules on the mediwhisper platform. It allows profesisonals to register which would allow them to be seen on the predict-mediwhisper platform. Allowing patients to book them for a consultation.",
        image:
          "/projects/professional-mediwhisper/professional-mediwhisper-01.webp",
      },
      {
        description:
          "I also added a feature that allow the professional to chat with an AI to get diagnosis and treatment options in 2 ways, either as the full report which includes stuff like primary diagnosis, clynical presentation, differential diagnosis, suggested workup and a treatment plan, or you can go for the simpler route and use the summarised version which gives you the Suspected Conditions, clinical recommendation, treatment plan and the immediate concerns.",
        image:
          "/projects/professional-mediwhisper/professional-mediwhisper-02.webp",
      },
      {
        description:
          "The platform also comes with a reviews section where patients can leave reviews for the professionals they have consulted with. This allows other patients to get an idea of the quality of the service provided by the professionals.",
        image:
          "/projects/professional-mediwhisper/professional-mediwhisper-03.webp",
      },
    ],
  },
  {
    id: 2,
    name: "Asɛm Bi",
    description: "Create and share beautiful letters with QR codes",
    technologies: [SiTypescript, SiNextdotjs, SiTailwindcss],
    techNames: ["TypeScript", "Next.js", "Tailwind CSS"],
    techLinks: [
      "https://www.typescriptlang.org/",
      "https://nextjs.org/",
      "https://tailwindcss.com/",
    ],
    github: "",
    demo: "https://asem-bi.vercel.app/",
    image: "/projects/asem-bi/asem-bi.webp",
    imageFull: "/projects/asem-bi/asem-bi-full.webp",
    available: true,
    showLink: true,
    moreDetails: [
      {
        description:
          "This websiote is a platform that allows users to create letters with a variety of templates. Once the letter is created, users can generate a QR code that can be shared with the recipient. The recipient can then scan the QR code to view the letter. I created this site to share a letter to the girl I love and family.",
        image: "/projects/asem-bi/asem-bi-01.webp",
      },
    ],
  },
  {
    id: 3,
    name: "Legendary Dark",
    description:
      "My very own vs code theme. I've been using it for a while now and I'm very happy with it.",
    technologies: [BiLogoVisualStudio],
    techNames: ["VS Code"],
    techLinks: ["https://code.visualstudio.com/"],
    github: "https://github.com/Llewellyn500/Legendary-Dark",
    demo: "https://marketplace.visualstudio.com/items?itemName=LlewellynPaintsil.legendary-dark",
    image: "/projects/legendary-dark/legendary-dark.webp",
    imageFull: "/projects/legendary-dark/legendary-dark-full.jpg",
    available: true,
    moreDetails: [
      {
        description:
          "🔥 This is Legendary Dark, a beautiful combination of the dark goodness of Andromeda by EliverLara and vibrant colors from SythWave '84 by robb0wen to make identification easy. 😊",
        image: "/projects/legendary-dark/legendary-dark-full.jpg",
      },
    ],
  },
  {
    id: 4,
    name: "L.A.P Docs",
    description:
      "A documentation website for my youtube channel L.A.P - Tutorials.",
    technologies: [SiNextdotjs, SiTypescript, SiTailwindcss, SiFirebase],
    techNames: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
    techLinks: [
      "https://nextjs.org/",
      "https://www.typescriptlang.org/",
      "https://tailwindcss.com/",
      "https://firebase.google.com/",
    ],
    github: "https://github.com/LAP-Tutorials/lap-docs",
    demo: "https://lap-docs.netlify.app/",
    image: "/projects/lap-docs/lap-docs.webp",
    imageFull: "/projects/lap-docs/lap-docs-full.webp",
    available: true,
    moreDetails: [
      {
        description:
          "This website contains all the documentation of all the videos i've done with more details for those who suffer to follow videos or are just in a place that reading would be better for them as compared to watching a video.",
        image: "/projects/lap-docs/lap-docs-full.webp",
      },
    ],
  },
  {
    id: 5,
    name: "L.A.P CMS",
    description:
      "A content management system for my youtube channel L.A.P - Tutorials and its' docs.",
    technologies: [SiNextdotjs, SiTypescript, SiTailwindcss, SiFirebase],
    techNames: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
    techLinks: [
      "https://nextjs.org/",
      "https://www.typescriptlang.org/",
      "https://tailwindcss.com/",
      "https://firebase.google.com/",
    ],
    github: "https://github.com/LAP-Tutorials/lap-cms",
    demo: "",
    image: "/projects/lap-cms/lap-cms.webp",
    imageFull: "/projects/lap-cms/lap-cms-full.webp",
    available: true,
    moreDetails: [
      {
        description:
          "",
        image: "/projects/lap-cms/lap-cms-full.webp",
      },
    ],
  },
  {
    id: 6,
    name: "OC4D",
    description:
      "A collection of resources tailored to help students in the rural areas of Ghana",
    technologies: [SiNextdotjs, SiTypescript, SiNodedotjs, SiTailwindcss, FaAws],
    techNames: ["Next.js", "TypeScript", "Node.js", "Tailwind CSS", "AWS"],
    techLinks: [
      "https://nextjs.org/",
      "https://www.typescriptlang.org/",
      "https://nodejs.org/",
      "https://tailwindcss.com/",
      "https://aws.amazon.com/",
    ],
    github: "",
    demo: "https://www.oc4d.org/",
    image: "/projects/oc4d/oc4d.webp",
    imageFull: "/projects/oc4d/oc4d-full.webp",
    available: true,
    moreDetails: [
      {
        description:
          "",
        image: "/projects/oc4d/oc4d-full.webp",
      },
    ],
  },
  {
    id: 7,
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
