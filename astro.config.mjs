import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import juno from "@junobuild/vite-plugin";
import tailwind from "@astrojs/tailwind";

import sanity from "@sanity/astro";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://itmdf-xiaaa-aaaal-ar3ca-cai.icp0.io",

  output: "static",

  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
    sanity({
      projectId: "ftezax4j",
      dataset: "production",
      // Set useCdn to false if you're building statically.
      useCdn: false,
      // We don't set this here to avoid SSR issues.
      // See https://github.com/sanity-io/sanity-astro/issues/232.
      // We rather compile the Studio manually and place it in the dist/studio folder before deploying.
      // See https://www.sanity.io/docs/deployment#ed3cd78ea4eb (the "Self-hosting the Studio" section).
      // studioBasePath: "/studio"
    }),
    react(),
  ],

  vite: {
    plugins: [juno()],
  },

  devToolbar: {
    enabled: false,
  },
});