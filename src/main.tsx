import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';
import { languageFromPath } from './seo';
import './styles.css';

const container = document.getElementById('root')!;
const app = (
  <React.StrictMode>
    <App initialLang={languageFromPath(window.location.pathname)} />
  </React.StrictMode>
);

// In production the HTML is pre-rendered (scripts/prerender.mjs), so hydrate it.
// In dev the root is empty, so render from scratch.
if (container.firstElementChild) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
