import path from "path";
import { defineConfig, configDefaults } from "vitest/config";

export default defineConfig({
  test: {
    ...configDefaults,
    alias: {
      "@": path.resolve(__dirname, "./src"),
      __mocks__: path.resolve(__dirname, "./__mocks__"),
    },
  },
});
