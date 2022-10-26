const { connect } = require("http2");

let connection;

const handleUserInput = (data) => {
  if (data === '\u0003') {
    process.exit();
  }

  switch (data) {
  case 'w':
    connection.write('Move: up');
    break;
  case 'a':
    connection.write('Move: left');
    break;
  case 's':
    connection.write('Move: down');
    break;
  case 'd':
    connection.write('Move: right');
    break;
  case 'q':
    connection.write("Say: it's mine!");
    break;
  case 'e':
    connection.write('Say: winner');
    break;
  case 'x':
    connection.write('Say: suckers!');
    break;
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