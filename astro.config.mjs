// @ts-check
import { defineConfig } from "astro/config";

// Static output — the mockup is a plain marketing site with no server routes.
// Deploys to Cloudflare Pages as a folder of HTML/CSS/JS.
export default defineConfig({
  site: "https://wilder-vine-mockup.pages.dev",
  output: "static",
  build: {
    // Emit /weddings/index.html rather than /weddings.html so the preview URL
    // reads like a real site.
    format: "directory",
  },
});
