const convertToCelsius = function (fahrenheitTemp) {
  // x °F ≘ (x − 32) × ⁠5/9⁠ °C
  let celsiusTemp = ((fahrenheitTemp - 32) * 5) / 9;
  return +celsiusTemp.toFixed(1);

  /** NOTE:
   * The suggested solution:
   *
   * return Math.round((fahrenheit - 32) * (5 / 9) * 10) / 10;
   *
   * is slightly faster, but may introduce rounding errors.
   */
};

const convertToFahrenheit = function (celsiusTemp) {
  // x °C ≘ (x × ⁠9/5⁠ + 32) °F
  let fahrenheitTemp = (celsiusTemp * 9) / 5 + 32;
  return +fahrenheitTemp.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
