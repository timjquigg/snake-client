const IP = '165.227.47.243';
const PORT = '50541';

const MOVEMENTS = {
  w: {direction: 'up', opposite: 'down'},
  s: {direction: 'down', opposite: 'up'},
  a: {direction: 'left', opposite: 'right'},
  d: {direction: 'right', opposite: 'left'},
};

const MESSAGES = {
  q: "It's mine!",
  e: "Winning!",
  x: "Suckers!",
  r: "Good Game!",
};

module.exports = {
  IP,
  PORT,
  MOVEMENTS,
  MESSAGES,
};