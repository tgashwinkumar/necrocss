const path = require("path");
const fs = require("fs");

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
            if (rule.params.includes("base")) {
              let baseCSS = path.join(__dirname, "Base", "base.css");
              if(fs.existsSync(baseCSS)) {
                let base = fs.readFileSync(baseCSS,{encoding: "utf8"});
                root.prepend(base);
              }
            } else if (rule.params.includes("utilities")) {
              
            // eslint-disable-next-line no-empty
            } else if (rule.params.includes("components")) {

            }
            rule.remove();
          });
        },
      };
    },
  };
};
module.exports.postcss = true;
