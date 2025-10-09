// take two numbers and return their sum
const add = function (a, b) {
  return a + b;
};

// take two numbers and return the result of subtracting the second from the first
const subtract = function (a, b) {
  return a - b;
};

// take an array of numbers and add all the numbers together
const sum = function (numbers) {
  return numbers.reduce((sum, number) => (sum + number), 0);
};

// take an array of numbers and multiply all the numbers together
const multiply = function (numbers) {
  if (numbers.length == 0) return 0;
  return numbers.reduce((product, number) => (product * number), 1);
};

// take two numbers (base and exponent) and return the result of raising the base to that exponent
const power = function (base, exponent) {
  return base ** exponent;
};

// given a single number, find its [factorial](https://en.wikipedia.org/wiki/Factorial)
const factorial = function (a) {
  let result = 1;

  for (let i = 2; i <= a; i++) result *= i;

  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
