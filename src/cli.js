#! /usr/bin/env node

const yargs = require("yargs");

const usageText = "\nUsage: necrocss <command> [options]";
yargs
  .scriptName("necrocss")
  .usage(usageText)
  .command(
    "load-plugin",
    "",
    (yargs) => {
      yargs
        .positional("i", {
          alias: "input",
          type: "string",
          default: null,
          describe: "The input file of the plugin list",
          demandOption: true,
        })
        .positional("o", {
          alias: "output",
          type: "string",
          default: null,
          describe: "The output file of generated plugin css",
          demandOption: true,
        })
        .positional("full", {
            type: "boolean",
            default: "false"
        });
    },
    (argv) => {
      console.log(argv);
    }
  )
  .help(true).argv;
