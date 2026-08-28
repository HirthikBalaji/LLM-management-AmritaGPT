import pkg from "../../../package.json" with { type: "json" };

export const APP_CONFIG = {
  name: "AmritaGPT LLM Management System",
  description: "Developed by Hirthik Balaji C",
  version: pkg.version,
  author: "Hirthik Balaji C",
};

export const THEME_CONFIG = {
  storageKey: "theme",
  defaultTheme: "system",
};
