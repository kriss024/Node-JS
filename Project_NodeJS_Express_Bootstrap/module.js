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

function square(x) {
  return x * x;
}
function sqrt(x) {
  if (x < 0) throw new Error("Square root of negative number");
  return Math.sqrt(x);
}
function reciprocal(x) {
  if (x === 0) throw new Error("Division by zero");
  return 1 / x;
}
function exp(x) {
  return Math.exp(x);
}
module.exports = { add, sub, mult, div, square, sqrt, reciprocal, exp };