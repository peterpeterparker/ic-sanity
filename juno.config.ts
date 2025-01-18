import { defineConfig } from "@junobuild/config";

export default defineConfig({
  satellite: {
    id: "itmdf-xiaaa-aaaal-ar3ca-cai",
    source: "dist",
    predeploy: [
      "rm -rf dist .sanity",
      "pnpm build", // Build the Astro + Sanity website
      "pnpm sanity build dist/studio -y", // compile Sanity Studio manually
    ],
    storage: {
      rewrites: [
        // Refreshing a page like /studio/structures actually renders the content of the home page
        // This rewrite makes sure that this doesn't happen
        {
          source: "/studio/**",
          destination: "/studio",
        },
      ],
    }
  },
});
