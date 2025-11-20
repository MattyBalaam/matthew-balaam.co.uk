import { reactRouter } from "@react-router/dev/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vite";
import netlifyPlugin from "@netlify/vite-plugin-react-router";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import devtoolsJson from "vite-plugin-devtools-json";

export default defineConfig({
  plugins: [
    devtoolsJson(),
    vanillaExtractPlugin(),
    reactRouter(),
    tsconfigPaths(),
    netlifyPlugin(),
  ],
});
