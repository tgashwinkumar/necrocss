// const path = require("path");
// const fs = require("fs");
const loadBasePlugin = require("./Base/loadBasePlugin");
const loadUtiltiesPlugin = require("./Utilities/loadUtiltiesPlugin");
const { UnidentifiedPluginError } = require("./Errors/errorLibs");
// eslint-disable-next-line no-unused-vars
module.exports = (opts = {}) => {
  // Work with options here
  return {
    postcssPlugin: "postcss-necrocss",
    // eslint-disable-next-line no-unused-vars
    prepare(result) {
      return {
        Once(root) {
          root.walkAtRules("necrocss", (rule) => {
            if (rule.params.trim() === "Base") {
              root = loadBasePlugin(root);
            } else if (rule.params.trim() === "Utilities") {
              root = loadUtiltiesPlugin(root);
            } else {
              throw new UnidentifiedPluginError(rule.params);
            }
            rule.remove();
          });
        },
      };
    },
  };
};
module.exports.postcss = true;
