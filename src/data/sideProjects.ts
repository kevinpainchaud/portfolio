import dayjs from "../lib/dayjs";
import { dates } from "./dates";

export const sideProjects: {
  baseline: string;
  description: string;
  logoSrc: string;
  period: string;
  title: string;
  websiteUrl: string;
}[] = [
  {
    baseline: "Planning poker online",
    description:
      "L'idée de Campee est née d'un constat personnel. En tant que développeur front-end au sein d'une équipe agile, je ne trouvais pas d'application de planning poker à la fois élégante, gratuite et sans publicité. Je me suis dit que ce serait une bonne idée de side project. Je me suis donc lancé dans cette aventure sans aucun objectif financier, simplement pour le plaisir.",
    logoSrc: "/side-projects/campee-logo.svg",
    period: `Depuis ${dayjs(dates.campeeSideProjectStartDate).year()} • ${dayjs().from(dayjs(dates.campeeSideProjectStartDate), true)}`,
    title: "Campee",
    websiteUrl: "https://campee.app",
  },
];
