function add(x, y) {
  return x + y;
}

function sub(x, y) {
  return x - y;
}

function mult(x, y) {
  return x * y;
}

function div(x, y) {
  if (y === 0) throw new Error("Division by zero");
  return x / y;
}

module.exports = { add, sub, mult, div };