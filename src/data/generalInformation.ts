import dayjs from "../lib/dayjs";
import { dates } from "./dates";

export const generalInformation = {
  title: "Kévin Painchaud · Développeur front-end basé à Laval",
  shortDescription:
    "Développement front-end, intégration HTML/CSS, expérience utilisateur (UX), ...",
  description: `Je suis développeur front-end avec ${dayjs().diff(
    dates.firstExperienceStartDate,
    "year",
  )} ans d'expérience dans plusieurs entreprises comme Leeto et Hellowork`,
  longDescription: `Depuis plus de ${dayjs().diff(
    dates.firstExperienceStartDate,
    "year",
  )} ans maintenant, je me passionne pour l'informatique et plus particulièrement pour le web. J'aime créer des interfaces de qualité, en prenant soin de garantir la meilleur expérience, à la fois pour l'utilisateur mais aussi pour le développeur.`,
};
