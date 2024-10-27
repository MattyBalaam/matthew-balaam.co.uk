// // @ts-check

// /**
//  * @type { import('vite').UserConfig }
//  */
// const config = {
//   jsx: "react",
//   plugins: [reactPlugin],
//   optimizeDeps: { allowNodeBuiltins: ["fs"], include: ["linkifyjs/react"] },
// };

// module.exports = config;

import { reactRouter } from "@react-router/dev/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [reactRouter(), tsconfigPaths()],
});
