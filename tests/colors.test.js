const { generateColorObject } = require("../src/utils/Colors/colorsLib");

it("should return a color object", () => {
  expect(generateColorObject("#ffffff")).toEqual({
    hex: "#ffffff",
    r: 255,
    b: 255,
    g: 255,
  });
  expect(generateColorObject("rgb(255,255,255)")).toEqual({
    hex: "#ffffff",
    r: 255,
    b: 255,
    g: 255,
  });
});
