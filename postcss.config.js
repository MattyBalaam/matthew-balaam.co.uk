const postcssCustomMedia = require("postcss-custom-media");

module.exports = {
  plugins: [
    postcssCustomMedia({
      importFrom: "src/css/media-variables.css",
    }),
  ],
};
