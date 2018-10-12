const rewireEslint = require("react-app-rewire-eslint");
const rewirePostCSS = require("react-app-rewire-postcss");
module.exports = function override(config, env) {
  config = rewireEslint(config, env);
  console.log(config);
  config = rewirePostCSS(config, {
    plugins: loader => [
      require("postcss-import")(),
      require("postcss-nested")(),
      require("postcss-custom-media")(),
      require("postcss-flexbugs-fixes")()
    ]
  });
  console.log(config);
  return config;
};
