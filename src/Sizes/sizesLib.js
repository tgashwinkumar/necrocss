module.exports.SizesByRem = {
  1: "0.25rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem",
  12: "3rem",
  14: "3.5rem",
  16: "4rem",
  18: "4.5rem",
  20: "5rem",
  24: "6rem",
  28: "7rem",
  32: "8rem",
  36: "9rem",
  40: "10rem",
  48: "12rem",
  56: "14rem",
  64: "16rem",
  72: "18rem",
  80: "20rem",
  88: "22rem",
  96: "24rem",
  104: "26rem",
  112: "28rem",
  120: "30rem",
  128: "32rem",
  136: "34rem",
  144: "36rem",
  152: "38rem",
  160: "40rem",
  168: "42rem",
  176: "44rem",
  184: "46rem",
  192: "48rem",
};

module.exports.SizesByScreen = {
  "screen-full": "100",
  "screen-1\\/2": "50",
  "screen-1\\/3": "33.33333",
  "screen-2\\/3": "66.66667",
  "screen-1\\/4": "25",
  "screen-3\\/4": "75",
  "screen-1\\/5": "20",
  "screen-2\\/5": "40",
  "screen-3\\/5": "60",
  "screen-4\\/5": "80",
  "screen-1\\/6": "16.66667",
  "screen-5\\/6": "83.33333",
};

module.exports.SizesByPercent = {
  full: "100",
  "1\\/2": "50",
  "1\\/3": "33.33333",
  "2\\/3": "66.66667",
  "1\\/4": "25",
  "3\\/4": "75",
  "1\\/5": "20",
  "2\\/5": "40",
  "3\\/5": "60",
  "4\\/5": "80",
  "1\\/6": "16.66667",
  "5\\/6": "83.33333",
};

module.exports.MediaQueries = {
  "": "0px",
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
};

module.exports.inPX = (sizeInPx) => {
  return `${sizeInPx}px`;
};

module.exports.inREM = (sizeInREM) => {
  return `${sizeInREM}rem`;
};

module.exports.inPercent = (sizeInPercent) => {
  return `${sizeInPercent}%`;
};
