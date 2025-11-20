export default {
  plugins: ["@prettier/plugin-oxc", "@ianvs/prettier-plugin-sort-imports"],
  // This plugin's options
  importOrder: [
    "^react", // React imports first
    "^[a-zA-Z0-9]", // Package imports (node_modules)
    "", // (blank line)
    "^[./]", // Relative imports (like "./cv-section")
    "", // (blank line)
    ".*\\.css$", // CSS imports last
  ],
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  importOrderTypeScriptVersion: "5.0.0",
  importOrderCaseSensitive: false,
};
