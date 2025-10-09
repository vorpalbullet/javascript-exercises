const fibonacci = function (n) {
  if (n < 0) return "OOPS";

  const sqrtFive = Math.sqrt(5);

  // use Binet's Formula
  return Math.floor(
    (1 / sqrtFive) * (((1 + sqrtFive) / 2) ** n - ((1 - sqrtFive) / 2) ** n)
  );
};

// Do not edit below this line
module.exports = fibonacci;
