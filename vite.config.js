import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Base is ABSOLUTE (GitHub Pages origin) because this bundle is embedded in a
// GoHighLevel funnel page served from links.trueday.com.br. Relative asset
// paths would resolve against the GHL origin and 404.
//
// Asset filenames are STABLE (no content hash) so the embed snippet inside the
// GHL page never has to change: commit -> GitHub Pages updates -> page updates.
// Cost: GitHub Pages caches for ~10 min, so a deploy is not instantaneous.
export default defineConfig({
  plugins: [react()],
  base: "https://mhprol.github.io/trueday-lp-vip/",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
    target: "es2020",
    rollupOptions: {
      output: {
        entryFileNames: "assets/app.js",
        chunkFileNames: "assets/[name].js",
        assetFileNames: "assets/app.[ext]",
      },
    },
  },
});
