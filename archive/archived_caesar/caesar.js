const caesar = function (string, shift) {
  const lowerAlphas = "abcdefghijklmnopqrstuvwxyz";
  const upperAlphas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  return string
    .split("")
    .map((char) => {
      let index = lowerAlphas.indexOf(char);
      let isLower = index != -1;
      if (!isLower) index = upperAlphas.indexOf(char);
      if (index == -1) return char;

      let newIndex = index + shift;
      while (newIndex < 0) newIndex += 26;
      while (newIndex > 25) newIndex -= 26;

      return (isLower ? lowerAlphas : upperAlphas).at(newIndex);
    })
    .join("");
};

// Do not edit below this line
module.exports = caesar;
