const { conn } = require('../client');
const { stdin } = require('../input');

console.log("Connecting ...");
conn;
stdin;
conn.on('connect', () => {
  conn.write(`Name: UV`);
});
