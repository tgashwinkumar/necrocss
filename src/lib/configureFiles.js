const fs = require("fs");
const path = require("path");
const plugin = require("../index.js");
const postcss = require("postcss");

module.exports.initializeConfig = (toReset) => {
  process.env.NECROCSS_CONFIG = path.join(process.cwd(), "necrocss.config.js");
  try {
    if (toReset) {
      writeConfigFile();
    } else if (fs.existsSync(process.env.NECROCSS_CONFIG)) {
      let configFile = fs.readFileSync(process.env.NECROCSS_CONFIG, {
        encoding: "utf-8",
      });
      if (configFile.length > 0) {
        console.log(process.env.NECROCSS_CONFIG, " already exists.");
      } else {
        writeConfigFile();
      }
    } else {
      writeConfigFile();
    }
  } catch (err) {
    console.log(err);
  }
};

const writeConfigFile = () => {
  let config_text = `module.exports = {
  name: "necrocss",
  extend: {
    utilities: {

    },
    components: {

    },
  },
}`;
  fs.writeFileSync(process.env.NECROCSS_CONFIG, config_text);
};

module.exports.watchConfig = (input_file_path, output_file_path) => {
  process.env.NECROCSS_INPUT =
    input_file_path || path.relative(process.cwd(), "necro.css");
  process.env.NECROCSS_OUTPUT =
    output_file_path || path.relative(process.cwd(), "necro.output.css");
  process.env.NECROCSS_CONFIG = path.join(process.cwd(), "necrocss.config.js");
  if (!fs.existsSync(process.env.NECROCSS_CONFIG)) {
    console.log(
      `necro.config.js can't be found. Initialize with "necrocss init"`
    );
    return;
  }
  let inputCSS = "";
  if (!fs.existsSync(process.env.NECROCSS_INPUT)) {
    console.log(`${process.env.NECROCSS_INPUT} input file can't be found`);
    return;
  } else {
    inputCSS = fs.readFileSync(process.env.NECROCSS_INPUT, {
      encoding: "utf-8",
    });
  }
  fs.writeFileSync(process.env.NECROCSS_OUTPUT, "");
  getOutputCSS(inputCSS);
};

const getOutputCSS = async (inputCSS) => {
  console.log(process.env.NECROCSS_INPUT);
  console.log(process.env.NECROCSS_OUTPUT);
  try {
    let result = await postcss([plugin()]).process(inputCSS, {
      from: undefined,
    });
    fs.writeFileSync(process.env.NECROCSS_OUTPUT, result.css);
  } catch (err) {
    console.log(err);
  }
};
