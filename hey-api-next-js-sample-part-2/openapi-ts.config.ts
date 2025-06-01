import { defaultPlugins, defineConfig } from "@hey-api/openapi-ts";

export default defineConfig({
  input: "http://localhost:8080/v3/api-docs",
  output: {
    format: "prettier",
    lint: "eslint",
    path: "./client",
  },
  plugins: [
    ...defaultPlugins,
    "@hey-api/client-fetch",
    // convert date strings into Date objects
    {
      dates: true,
      name: "@hey-api/transformers",
    },
    "@tanstack/react-query",
  ],
});
