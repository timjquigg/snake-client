//const net = require("net");
const {connect} = require('./client');
const {setupInput} = require('./input');


console.log("Connecting ...");
console.log(
  "Commands:\n\n" +
  "w : Move up\n" +
  "s : Move down\n" +
  "a : Move left\n" +
  "d : Move right\n" +
  "q : Say: It's mine!\n" +
  "e : Say: winning\n" +
  "x : Say: Suckers!\n"
);
setupInput(
  connect()
);