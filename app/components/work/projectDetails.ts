import {
  SiFigma,
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
  /** Shown on design cards below the description */
  date?: string;
  /**
   * Extra images for the design gallery (carousel). The card `image` is always the first slide.
   */
  designGallery?: string[];
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
    demo: "https://mediwhisper.com/",
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
    demo: "https://prof.mediwhisper.com",
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
    demo: "https://asembi.page",
    image: "/projects/asem-bi/asem-bi.webp",
    imageFull: "/projects/asem-bi/asem-bi-full.webp",
    available: true,
    showLink: true,
    showGithub: false,
    moreDetails: [
      {
        description:
          "This website is a platform that allows users to create letters with a variety of templates. Once the letter is created, users can generate a QR code that can be shared with the recipient. The recipient can then scan the QR code to view the letter. I created this site to share a letter to the girl I love and family.",
        image: "/projects/asem-bi/asem-bi-01.webp",
      },
      {
        description:
          "This is the first site I created that integrates Cloudflare and a password less sign in and sign up system making it easier for users to access the site.",
        image: "/projects/asem-bi/asem-bi-02.webp",
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
    showLink: true,
    showGithub: true,
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
    showLink: true,
    showGithub: true,
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
    showLink: false,
    showGithub: true,
    moreDetails: [
      {
        description:
          "This is the admin panel for the lap docs website. It directly communicates with the database and updates the website in real time. Also only people that are allowed can log in with their accounts.",
        image: "/projects/lap-cms/lap-cms-full.webp",
      },
    ],
  },
  {
    id: 6,
    name: "OC4D",
    description:
      "A collection of resources tailored to help students in the rural areas of Ghana",
    technologies: [
      SiNextdotjs,
      SiTypescript,
      SiNodedotjs,
      SiTailwindcss,
      FaAws,
    ],
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
    showLink: true,
    showGithub: false,
    moreDetails: [
      {
        description: `Open Content for Development (OC4D) is an online portal and database designed to provide free, accessible educational resources (Open Educational Resources or OER) to people in developing nations. Its primary mission is to bridge the "digital divide" by offering critical information to rural communities, specifically targeting individuals with lower literacy levels or limited internet access.`,
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

/** Visual / product design pieces — same card layout as projects, without live links or modals. */
export const designs: ProjectProps[] = [
  {
    id: 0,
    name: "Connect & Collect",
    description:
      "A flyer design for a friend's business where they sell different types of laptops and when you refer a friend you get a commission on the sale.",
    technologies: [],
    techNames: [],
    techLinks: [],
    github: "",
    demo: "",
    image: "/designs/connect-and-collect.webp",
    available: false,
    showLink: false,
    showGithub: false,
    date: "February 2026",
  },
  {
    id: 1,
    name: "Easy Steps",
    description:
      "A flyer design for my friend's woman. It's a simple design that basically has the contacts of the seller on it.",
    technologies: [],
    techNames: [],
    techLinks: [],
    github: "",
    demo: "",
    image: "/designs/easy-steps.webp",
    available: false,
    showLink: false,
    showGithub: false,
    date: "March 2026",
    // designGallery: ["/projects/legendary-dark/legendary-dark-full.jpg"],
  },
  {
    id: 2,
    name: "Childhood Cancer Nuggets 2022",
    description:
      "Daily Nuggets design telling you a bit about childhood cancer in the month of september, each day with a new nugget.",
    technologies: [],
    techNames: [],
    techLinks: [],
    github: "",
    demo: "",
    image: "/designs/childhood-cancer-nuggest-2022/childhood-cancer-nuggets-day-1.webp",
    available: false,
    showLink: false,
    showGithub: false,
    date: "September 2022",
    designGallery: ["/designs/childhood-cancer-nuggest-2022/childhood-cancer-nuggets-day-2.webp", "/designs/childhood-cancer-nuggest-2022/childhood-cancer-nuggets-day-3.webp", "/designs/childhood-cancer-nuggest-2022/childhood-cancer-nuggets-day-4.webp", "/designs/childhood-cancer-nuggest-2022/childhood-cancer-nuggets-day-5.webp", "/designs/childhood-cancer-nuggest-2022/childhood-cancer-nuggets-day-6.webp", "/designs/childhood-cancer-nuggest-2022/childhood-cancer-nuggets-day-7.webp", "/designs/childhood-cancer-nuggest-2022/childhood-cancer-nuggets-day-8.webp", "/designs/childhood-cancer-nuggest-2022/childhood-cancer-nuggets-day-9.webp", "/designs/childhood-cancer-nuggest-2022/childhood-cancer-nuggets-day-10.webp", "/designs/childhood-cancer-nuggest-2022/childhood-cancer-nuggets-day-11.webp", "/designs/childhood-cancer-nuggest-2022/childhood-cancer-nuggets-day-12.webp", "/designs/childhood-cancer-nuggest-2022/childhood-cancer-nuggets-day-13.webp", "/designs/childhood-cancer-nuggest-2022/childhood-cancer-nuggets-day-14.webp", "/designs/childhood-cancer-nuggest-2022/childhood-cancer-nuggets-day-15.webp", "/designs/childhood-cancer-nuggest-2022/childhood-cancer-nuggets-day-16.webp", "/designs/childhood-cancer-nuggest-2022/childhood-cancer-nuggets-day-17.webp", "/designs/childhood-cancer-nuggest-2022/childhood-cancer-nuggets-day-18.webp", "/designs/childhood-cancer-nuggest-2022/childhood-cancer-nuggets-day-19.webp", "/designs/childhood-cancer-nuggest-2022/childhood-cancer-nuggets-day-20.webp", "/designs/childhood-cancer-nuggest-2022/childhood-cancer-nuggets-day-21.webp", "/designs/childhood-cancer-nuggest-2022/childhood-cancer-nuggets-day-22.webp", "/designs/childhood-cancer-nuggest-2022/childhood-cancer-nuggets-day-23.webp", "/designs/childhood-cancer-nuggest-2022/childhood-cancer-nuggets-day-24.webp", "/designs/childhood-cancer-nuggest-2022/childhood-cancer-nuggets-day-25.webp", "/designs/childhood-cancer-nuggest-2022/childhood-cancer-nuggets-day-26.webp", "/designs/childhood-cancer-nuggest-2022/childhood-cancer-nuggets-day-27.webp", "/designs/childhood-cancer-nuggest-2022/childhood-cancer-nuggets-day-28.webp", "/designs/childhood-cancer-nuggest-2022/childhood-cancer-nuggets-day-29.webp", "/designs/childhood-cancer-nuggest-2022/childhood-cancer-nuggets-day-30.webp"],
  },
];
