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