const palindromes = function (string) {
  let arr = string
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
    .split("");

  return arr.join("") == arr.reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
