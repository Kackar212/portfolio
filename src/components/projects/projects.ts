import { ProjectProps } from "../project/project.component";
import jslkeeper from "@/assets/jslkeeper.dk.min.webp";
import stxbp1 from "@/assets/stxbp1.min.webp";
import shoppingify from "@/assets/shoppingify.webp";
import chat from "@/assets/chat.webp";
import izolDach from "@/assets/izol-dach.webp";
import adLegion from "@/assets/ad-legion.webp";

export const projects: Array<ProjectProps> = [
  {
    name: "Chat app",
    url: "https://github.com/Kackar212/not-simple-chat-app-client",
    backendUrl: "https://github.com/Kackar212/not-simple-chat-app",
    technologiesUsed: [
      "React.js",
      "Next.js",
      "Typescript",
      "TailwindCSS",
      "Nest.js",
      "Passport",
      "PostgreSQL",
      "Prisma",
      "Socket.io",
      "WebRTC",
      "Mediasoup",
      "Jest",
      "Testing Library",
    ],
    image: chat,
    isWorkInProgress: true,
    hasRepository: true,
  },
  {
    name: "Shoppingify",
    url: "https://github.com/Kackar212/shoppingify-client",
    backendUrl: "https://github.com/Kackar212/shoppingify",
    technologiesUsed: [
      "TypeORM",
      "React.js",
      "Next.js",
      "Typescript",
      "Redux",
      "Sass",
      "Nest.js",
      "Passport",
      "PostgreSQL",
      "RxJS",
    ],
    image: shoppingify,
    hasRepository: true,
  },
  {
    name: "stxbp1.pl",
    technologiesUsed: ["PHP", "Javascript", "HTML", "CSS", "Wordpress"],
    image: stxbp1,
    url: "https://stxbp1.pl",
  },
  {
    name: "adlegion.pl",
    technologiesUsed: ["PHP", "Javascript", "Wordpress", "HTML", "CSS"],
    image: adLegion,
    url: "https://adlegion.pl/",
  },
  {
    name: "jslkeeper.dk",
    technologiesUsed: [
      "PHP",
      "Javascript",
      "Wordpress",
      "Woocommerce",
      "HTML",
      "CSS",
    ],
    image: jslkeeper,
    url: "https://jslkeeper.dk",
  },
  {
    name: "drenaz-malopolska.pl",
    technologiesUsed: ["Javascript", "HTML", "CSS"],
    image: izolDach,
    url: "https://drenaz-malopolska.pl",
  },
  {
    name: "Sefaris",
    technologiesUsed: ["Typescript", "Jest"],
    url: "https://github.com/Kackar212/sefaris",
    hasRepository: true,
  },
  {
    name: "EasyArray",
    technologiesUsed: ["Javascript"],
    url: "https://github.com/Kackar212/EasyArray",
    hasRepository: true,
  },
  {
    name: "EasyDOM",
    technologiesUsed: ["Javascript"],
    url: "https://github.com/Kackar212/EasyDOM",
    hasRepository: true,
  },
  {
    name: "TxetEngine",
    technologiesUsed: [],
    url: "https://github.com/Kackar212/TxetEngine",
    hasRepository: true,
  },
];
