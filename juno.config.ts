import { defineConfig } from "@junobuild/config";

export default defineConfig({
  satellite: {
    id: "itmdf-xiaaa-aaaal-ar3ca-cai",
    source: "dist/client",
    predeploy: ["./scripts/build.sh"],
  },
});
