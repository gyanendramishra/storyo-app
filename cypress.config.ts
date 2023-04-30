import { defineConfig } from "cypress";
import cypressTask from "@cypress/code-coverage/task";

export default defineConfig({
  env: {
    codeCoverage: {
      exclude: "cypress/**/*.*",
    },
  },
  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
    setupNodeEvents(on, config) {
      cypressTask(on, config);

      return config;
    },
  },
});
