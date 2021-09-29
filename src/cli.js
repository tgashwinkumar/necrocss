#! /usr/bin/env node

const yargs = require("yargs");
const { initializeConfig, watchConfig } = require("./lib/configureFiles");

const usageText = "\nUsage: necrocss <command> [options]";
yargs
  .scriptName("necrocss")
  .usage(usageText)
  .command(
    "init",
    "Initializes NecroCSS for the following project",
    (yargs) => {
      yargs.positional("r", {
        alias: "reset",
        type: "boolean",
        describe:
          "Specifies if the configurations have to be initialized from start.",
        default: false,
        demandOption: true,
      });
    },
    (argv) => {
      // console.log(argv);
      initializeConfig(argv.reset);
    }
  )
  .command(
    "watch",
    "Watches for changes in necrocss.config.js and provides the respective output",
    (yargs) => {
      yargs
        .positional("i", {
          alias: "input",
          type: "string",
          describe: "The input file of the plugin list",
          demandOption: true,
          default: null
        })
        .positional("o", {
          alias: "output",
          type: "string",
          describe: "The output file of generated plugin css",
          demandOption: true,
          default: null
        });
    },
    (argv) => {
      watchConfig(argv.i, argv.o);
    }
  )
  .help(true).argv;
