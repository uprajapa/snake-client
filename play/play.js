const { connect, net } = require('../client');

console.log("Connecting ...");
const conn = connect();
conn.on('connect', () => {
  conn.write(`Name: UV`);
});