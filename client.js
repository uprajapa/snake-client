const net = require("net");
const { IP, PORT } = require("./constants");
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,             // IP address here,
    port: PORT           // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on('connect', (data) => {
    console.log(`In! ${data}`);
  });

  return conn;
};

const conn = connect();

module.exports = conn;