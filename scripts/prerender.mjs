// Build-time pre-rendering: turns the client-only SPA shell into real HTML
// for each language so crawlers and link previews see the full content.
//
// Runs after `vite build` (client) and `vite build --ssr` (server entry).
// Output: dist/index.html (English) and dist/es/index.html (Spanish).

import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const distDir = resolve(root, "dist");
const serverDir = resolve(root, "dist-server");

// The server entry also re-exports the app's SEO config, so the page and the
// pre-rendered <head> always use the same titles, descriptions and URLs.
const { render, SITE_URL, languagePaths, seo } = await import(
  pathToFileURL(resolve(serverDir, "entry-server.js")).href
);

const template = await readFile(resolve(distDir, "index.html"), "utf8");

if (!template.includes("<!--app-html-->")) {
  throw new Error("dist/index.html is missing the <!--app-html--> placeholder.");
}

const escapeAttr = (value) =>
  value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

/** Replace the value of `attr` on the tag matched by `tagPattern`. */
function setAttr(html, tagPattern, attr, value) {
  const re = new RegExp(`(<${tagPattern}[^>]*?\\s${attr}=")[^"]*(")`);
  if (!re.test(html)) throw new Error(`Tag not found in template: ${tagPattern}`);
  return html.replace(re, `$1${escapeAttr(value)}$2`);
}

for (const lang of Object.keys(languagePaths)) {
  const meta = seo[lang];
  const url = `${SITE_URL}${languagePaths[lang]}`;
  const otherLocales = Object.values(seo)
    .map((entry) => entry.locale)
    .filter((locale) => locale !== meta.locale);

  let html = template.replace("<!--app-html-->", render(lang));
  html = html.replace(/<html lang="[^"]*"/, `<html lang="${lang}"`);
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${escapeAttr(meta.title)}</title>`);
  html = setAttr(html, 'meta name="description"', "content", meta.description);
  html = setAttr(html, 'link rel="canonical"', "href", url);
  html = setAttr(html, 'meta property="og:title"', "content", meta.title);
  html = setAttr(html, 'meta property="og:description"', "content", meta.description);
  html = setAttr(html, 'meta property="og:url"', "content", url);
  html = setAttr(html, 'meta property="og:locale"', "content", meta.locale);
  html = setAttr(html, 'meta property="og:locale:alternate"', "content", otherLocales[0]);
  html = setAttr(html, 'meta name="twitter:title"', "content", meta.title);
  html = setAttr(html, 'meta name="twitter:description"', "content", meta.description);

  const outFile = resolve(distDir, `.${languagePaths[lang]}index.html`);
  await mkdir(dirname(outFile), { recursive: true });
  await writeFile(outFile, html);
  console.log(`prerendered ${languagePaths[lang]} -> ${outFile}`);
}

await rm(serverDir, { recursive: true, force: true });
