const sumAll = function (a, b) {
  if (a < 0 || b < 0 || !(Number.isInteger(a) && Number.isInteger(b))) {
    return "ERROR";
  }

  let end = Math.max(a, b);
  let sum = 0;

  for (let i = Math.min(a, b); i <= end; i++) sum += i;

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
