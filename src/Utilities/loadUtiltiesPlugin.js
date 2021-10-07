/* eslint-disable no-unused-vars */
const { Colors } = require("@necrocss/colors");
const { SizesByRem, MediaQueries } = require("@necrocss/sizes");
const { AtRule, Rule, Declaration } = require("postcss");

module.exports = (root) => {
  root = loadSizingTags(root);
  // root = loadColorBasedTags(root);
  return root;
};

const loadSizingTags = (root) => {
  for (const [mediaKey, mediaValue] of Object.entries(MediaQueries)) {
    let media = new AtRule({
      name: "media",
      params: `screen and (min-width: ${mediaValue})`,
    });
    for (const [tagKey, tagValue] of Object.entries(sizingTags)) {
      for (const [sizeKey, sizeValue] of Object.entries(SizesByRem)) {
        let rule = new Rule({
          selector: `${
            mediaKey === "" ? "" : `${mediaKey}\\:`
          }.${tagKey}-${sizeKey}`,
        }).append(
          new Declaration({ prop: `${tagValue}`, value: `${sizeValue}` })
        );
        media.append(rule);
        rule = new Rule({
          selector: `${
            mediaKey === "" ? "" : `${mediaKey}\\:`
          }.-${tagKey}-${sizeKey}`,
        }).append(
          new Declaration({ prop: `${tagValue}`, value: `-${sizeValue}` })
        );
        media.append(rule);
      }
    }
    root.append(media);
  }
};

const loadColorBasedTags = (root) => {
  for (const [mediaKey, mediaValue] of Object.entries(MediaQueries)) {
    let media = new AtRule({
      name: "media",
      params: `screen and (min-width: ${mediaValue})`,
    });
    for (const [tagKey, tagValue] of Object.entries(colorBasedTags)) {
      for (const [colorKey, colorValue] of Object.entries(Colors)) {
        if (typeof colorValue === "string") {
          let rule = new Rule({
            selector: `${
              mediaKey === "" ? "" : `${mediaKey}\\:`
            }.${tagKey}-${colorKey}`,
          }).append(
            new Declaration({ prop: `${tagValue}`, value: `${colorValue}` })
          );
          media.append(rule);
        } else if (typeof colorValue === "object") {
          // pass
        }
      }
    }
    root.append(media);
  }
};

const sizingTags = {
  p: "padding",
  pt: "padding-top",
  pr: "padding-right",
  pl: "padding-left",
  pb: "padding-bottom",
  m: "margin",
  mt: "margin-top",
  mr: "margin-right",
  ml: "margin-left",
  mb: "margin-bottom",
  h: "height",
  w: "width",
  "max-h": "max-height",
  "max-w": "max-width",
  "min-h": "min-height",
  "min-w": "min-width",
  top: "top",
  bottom: "bottom",
  right: "right",
  left: "left",
  gap: "gap",
  "gap-x": "column-gap",
  "gap-y": "row-gap",
};

const colorBasedTags = {
  bg: "background-color",
  text: "color",
  shadow: "--nc-shadow-color",
  border: "border-color",
};
