import { defineConfig } from "astro/config";

export default defineConfig({
  site: process.env.SITE_URL ?? "https://farhantaufiks.com",
  // Plain static HTML; nginx serves dist/ with try_files $uri $uri/index.html.
  output: "static",
  build: { inlineStylesheets: "auto" },
});
