import { renderToString } from "react-dom/server";
import App from "./App";
import type { Language } from "./content";

export { SITE_URL, languagePaths, seo } from "./seo";

/** Used at build time by scripts/prerender.mjs to produce static HTML. */
export function render(lang: Language): string {
  return renderToString(<App initialLang={lang} />);
}
