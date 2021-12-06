const { Colors } = require("@necrocss/colors");
const {
  MediaQueries,
  SizesByScreen,
  SizesByRem,
  SizesByPercent,
} = require("@necrocss/sizes");

module.exports = {
  theme: {
    colors: {
      transparent: "transparent",
      currentColor: "currentColor",
      ...Colors,
    },
    sizesByRem: SizesByRem,
    SizesByScreen: SizesByScreen,
    sizesByPercent: SizesByPercent,
    mediaSizes: MediaQueries,
    fonts: {
      arial: "Arial, Helvetica, sans-serif",
      georgia: "Georgia, Times, serif",
      monospace: "Courier, monospace",
    },
    fontSizes: SizesByRem,
    fontWeights: {
      100: 100,
      200: 200,
      300: 300,
      400: 400,
      500: 500,
      600: 600,
      700: 700,
      800: 800,
      900: 900,
      lighter: 100,
      light: 300,
      regular: 400,
      bold: 700,
      bolder: 900,
    },
    marginSizes: SizesByRem,
    paddingSizes: SizesByRem,
    borderWidths: {
      0: 0,
      1: "1px",
      2: "0.5rem",
      4: "1rem",
      8: "2rem",
    },
  },
  extend: {},
};
