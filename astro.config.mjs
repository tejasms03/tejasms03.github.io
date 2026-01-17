import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://tejasms03.github.io",
  base: "./",          // VERY IMPORTANT: relative paths
  output: "static",
  vite: {
    base: "./",        // relative paths for _astro
    plugins: [tailwindcss()],
  },
  integrations: [react()],
});
