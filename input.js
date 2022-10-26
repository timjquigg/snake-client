//const { connect } = require("http2");
const { MOVEMENTS, MESSAGES } = require('./constants');

let connection;

const handleUserInput = (data) => {
  if (data === '\u0003') {
    process.exit();
  }

  if (MOVEMENTS[data.toLowerCase()]) {
    connection.write(`Move: ${MOVEMENTS[data.toLowerCase()]}`);
  }

  if (MESSAGES[data.toLowerCase()]) {
    connection.write(`Say: ${MESSAGES[data.toLowerCase()]}`);
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