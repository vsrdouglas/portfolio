import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Self-hosted fonts — bundled at build time, no external requests at runtime.
// Latin subset only: the site copy is in English, so other subsets are dead weight.
import "@fontsource-variable/space-grotesk/wght.css";
import "@fontsource/ibm-plex-sans/latin-400.css";
import "@fontsource/ibm-plex-sans/latin-500.css";
import "@fontsource/ibm-plex-sans/latin-600.css";
import "@fontsource/ibm-plex-sans/latin-700.css";
import "@fontsource/ibm-plex-mono/latin-400.css";
import "@fontsource/ibm-plex-mono/latin-500.css";

import "./index.css";
import { App } from "./App.tsx";

const root = document.getElementById("root");
if (!root) {
  throw new Error("Root element #root was not found in the document.");
}

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
