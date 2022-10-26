//const { connect } = require("http2");
const { MOVEMENTS, MESSAGES } = require('./constants');

let connection;
let direction;
let prevDirection;

const handleUserInput = (data) => {
  if (data === '\u0003') {
    process.exit();
  }
  data = data.toLowerCase();
  
  if (MOVEMENTS[data]) {
    if (MOVEMENTS[data].opposite === prevDirection) {
      return;
    }
    clearInterval(direction);

    direction = setInterval(() => {
      connection.write(`Move: ${MOVEMENTS[data].direction}`);
    }, 100);
    prevDirection = MOVEMENTS[data].direction;
  }
  if (MESSAGES[data]) {
    connection.write(`Say: ${MESSAGES[data]}`);
  }
};



const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

module.exports = {
  setupInput
};