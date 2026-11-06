import type { Language } from "./content";

/** Production origin. Change this (and the matching URLs in index.html,
 *  public/robots.txt and public/sitemap.xml) if the site lives elsewhere. */
export const SITE_URL = "https://ascentio.com.ar";

export const languagePaths: Record<Language, string> = {
  en: "/",
  es: "/es/",
};

export const seo: Record<
  Language,
  { title: string; description: string; locale: string }
> = {
  en: {
    title: "Ascentio Technologies — Engineering for critical missions",
    description:
      "Ascentio designs, develops and operates high-availability systems: satellite ground segment, mission control and mission-critical software for aerospace, energy, telecom and maritime sectors, from Argentina and Spain.",
    locale: "en_US",
  },
  es: {
    title: "Ascentio Technologies — Ingeniería para misiones críticas",
    description:
      "Ascentio diseña, desarrolla y opera sistemas de alta disponibilidad: segmento terreno satelital, control de misión y software crítico para los sectores aeroespacial, energía, telecomunicaciones y marítimo, desde Argentina y España.",
    locale: "es_AR",
  },
};

export function languageFromPath(pathname: string): Language {
  return /^\/es(\/|$)/.test(pathname) ? "es" : "en";
}
