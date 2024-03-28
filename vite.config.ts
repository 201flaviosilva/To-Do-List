import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  base: "./",
  build: {
    sourcemap: true,
    assetsInlineLimit: 0,
  },
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx"],
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.js",
    css: true,
  },
  server: {
    port: 3210,
  },
});
