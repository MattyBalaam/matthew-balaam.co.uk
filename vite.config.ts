import mdx from "@mdx-js/rollup";
import netlifyPlugin from "@netlify/vite-plugin-react-router";
import { reactRouter } from "@react-router/dev/vite";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { defineConfig } from "vite";
import devtoolsJson from "vite-plugin-devtools-json";
import tsconfigPaths from "vite-tsconfig-paths";

import { imageMetadata } from "./app/utilities/vite-plugin-image-metadata";

export default defineConfig({
  plugins: [
    devtoolsJson(),
    imageMetadata(),
    mdx(),
    vanillaExtractPlugin(),
    reactRouter(),
    tsconfigPaths(),
    netlifyPlugin(),
  ],
});
