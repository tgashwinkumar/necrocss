const fs = require("fs");
const path = require("path");

module.exports = (root) => {
  let baseCSS = path.join(__dirname, "base.css");
  if (fs.existsSync(baseCSS)) {
    let base = fs.readFileSync(baseCSS, { encoding: "utf8" });
    root.prepend(base);
  }
  return root;
};
