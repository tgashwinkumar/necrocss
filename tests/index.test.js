const postcss = require("postcss");
const fs = require("fs");
const plugin = require("../src");
const path = require("path");


async function run(input, output, opts = {}) {
  try {
    let result = await postcss([plugin(opts)]).process(input, {
      from: undefined
    });
    // console.log(result.css);
   fs.writeFileSync(path.join(__dirname, "necro.out.css"), result.css);
    await expect(result.css).toEqual(output);
    await expect(result.warnings()).toHaveLength(0);
  } catch (e) {
    // console.log(e);
  }
}

it("does something", async () => {
  let inputCSS = fs.readFileSync(path.join(__dirname, "necro.test.css"), "utf8");
  try {
    await run(
      inputCSS,
      inputCSS,
      {}
    );
  } catch (e) {
    console.log(e);
  }
});
