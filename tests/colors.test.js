const { generateColorObject } = require("@necrocss/colors");

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
