const postcss = require('postcss')

const plugin = require('./src')

// async function run (input, output, opts = { }) {
//   let result = await postcss([plugin(opts)]).process(input, { from: undefined })
//   expect(result.css).toEqual(output)
//   expect(result.warnings()).toHaveLength(0)
// }

// eslint-disable-next-line jest/no-commented-out-tests
// it('does something', async () => {
//   await run('@necrocss', 'a{ }', { })
// })

let cssTest = `
@necrocss utilites;
@necrocss components;

a{
  color: black;
}
`;

async function run (opts = { }) {
  let result = await postcss([plugin(opts)]).process(cssTest, { from: undefined })
  console.log(result.root.nodes);
  // console.log(result);
}

run();