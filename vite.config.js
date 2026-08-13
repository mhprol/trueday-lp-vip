import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Base is relative ("./") so the built index.html works when served from
// any path — including jsDelivr's /gh/{owner}/{repo}@branch/ subtree.
export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
    target: "es2020",
  },
});
