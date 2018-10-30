const rewirePostCSS = require("react-app-rewire-postcss");
module.exports = function override(config, env) {
  config = rewirePostCSS(config, {
    plugins: loader => [
      require("postcss-url")(),
      require("postcss-import")({
        path: "src/css"
      }),
      require("postcss-nested")(),
      require("postcss-custom-media")(),
      require("postcss-flexbugs-fixes")()
    ]
  });
  return config;
};
