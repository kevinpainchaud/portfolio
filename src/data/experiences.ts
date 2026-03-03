import dayjs from "../lib/dayjs";
import type { Experience } from "../interfaces/experience";
import { dates } from "./dates";

export const experiences: Experience[] = [
  {
    company: {
      name: "Leeto",
      logoSrc: "/experiences/leeto-logo.svg",
      websiteUrl: "https://leeto.co",
    },
    description:
      "En 2022, j'ai rejoint l'aventure Leeto en tant que Lead Front-End Developer. Mon rôle consiste à construire les nouvelles fonctionnalités et participer aux choix architecturaux et technologiques du produit. En 2022, j'ai rejoint l'aventure Leeto en tant que Lead Front-End Developer. Mon rôle consiste à construire les nouvelles fonctionnalités et participer aux choix architecturaux et technologiques du produit.",
    name: "Lead Front-End Developer",
    period: `Depuis ${dayjs(dates.currentExperienceStartDate).year()} • ${dayjs().from(dayjs(dates.currentExperienceStartDate), true)}`,
  },
  {
    company: {
      name: "Hellowork",
      logoSrc: "/experiences/hellowork-logo.svg",
      websiteUrl: "https://hellowork.com",
    },
    description:
      "Entre 2017 et 2022, j'ai eu l'occasion de travailler au sein de l'équipe technique de MaFormation.fr, dans une organisation agile. Mon rôle principal consistait à faire évoluer le produit dans sa composante front-end et d'en assurer sa maintenance. J'ai également pu assurer le rôle de Scrum Master durant ma dernière année.",
    name: "Front-End Developer",
    period: "2017/2022 • 5 ans",
  },
];
