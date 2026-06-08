import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    {
      name: "mock-static-assets",
      resolveId(source) {
        if (/\.(png|jpe?g|webp|gif|svg)$/.test(source)) return source;
      },
      load(id) {
        if (/\.(png|jpe?g|webp|gif|svg)$/.test(id)) {
          return `export default { src: "/mock-asset.png", height: 100, width: 100 }`;
        }
      },
    },
  ],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./__tests__/setup.tsx"],
    include: ["__tests__/**/*.{test,spec}.{ts,tsx}"],
    coverage: {
      provider: "v8",
      reporter: ["text", "html"],
      include: ["app/**/*.{ts,tsx}"],
      exclude: ["app/**/*.d.ts", "app/images/**"],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "."),
    },
  },
});
