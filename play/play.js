const { connect, net } = require('../client');

console.log("Connecting ...");
const conn = connect();
conn.on('connect', () => {
  conn.write(`Name: UV`);
});
// conn.on('connect', () => {
//   conn.write(`Name: UV`);
//   conn.write(`Move: Up`);
//   conn.write(`Move: Right`);
// });
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const stdin = setupInput();

const handleUserInput = function (key) {
  console.log(`handleUserInput ${key}`);
  // your code here
  if (key === '\u0003') {
    process.exit();
  }
};

stdin.on("data", (key) => handleUserInput(key));