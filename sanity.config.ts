import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

export default defineConfig({
  projectId: "ftezax4j",
  dataset: "production",
  plugins: [structureTool()],
  schema: {
    types: [],
  },
});
