// @ts-check
const reactPlugin = require("vite-plugin-react");

/**
 * @type { import('vite').UserConfig }
 */
const config = {
  jsx: "react",
  plugins: [reactPlugin],
  optimizeDeps: { allowNodeBuiltins: ["fs"], include: ["linkifyjs/react"] },
};

module.exports = config;
