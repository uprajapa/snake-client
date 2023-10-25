const { conn } = require("./client");

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (key) => handleUserInput(key));
  return stdin;
};

const stdin = setupInput();

const handleUserInput = function (key) {
  conn.write(`Name: UV`);

  if (key == 'w') {
    conn.write('Move: up');
    console.log('Move: up');
  }
  if (key === 'a') {
    conn.write('Move: left');
    console.log('Move: left');
  }
  if (key === 's') {
    conn.write('Move: down');
    console.log('Move: down');
  }
  if (key === 'd') {
    conn.write('Move: right');
    conn.write('Say: LG');
    console.log('Move: right');
  }
  if (key === '\u0003') {
    process.exit();
  }
};

module.exports = { stdin };