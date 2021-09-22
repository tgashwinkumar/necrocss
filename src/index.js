// eslint-disable-next-line no-unused-vars
module.exports = (opts = {}) => {
  // Work with options here
  return {
    postcssPlugin: "postcss-necrocss",
    Once(root) {
      // console.log(root);
      root.walkRules(rule => {
        console.log(rule);
        console.log("\n\n------------NEXT------------\n\n")
      })
    },
  };
};
module.exports.postcss = true;
