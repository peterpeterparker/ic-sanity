import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import juno from "@junobuild/vite-plugin";
import tailwind from "@astrojs/tailwind";

import sanity from "@sanity/astro";
import react from "@astrojs/react";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: "https://itmdf-xiaaa-aaaal-ar3ca-cai.icp0.io",

  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
    sanity({
      projectId: "ftezax4j",
      dataset: "production",
      // Set useCdn to false if you're building statically.
      useCdn: false,
      studioBasePath: "/studio",
    }),
    react(),
  ],

  vite: {
    plugins: [juno()],
  },

  devToolbar: {
    enabled: false,
  },

  output: "static",

  adapter: node({
    mode: "standalone",
  }),
});