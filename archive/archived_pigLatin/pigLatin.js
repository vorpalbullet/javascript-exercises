function pigLatin(string) {
  // While this passes all the exercise tests, it doesn't properly handle
  // words without vowels (cry, by, gym, lynx, myth).

  // Although, it handles them better than the suggested solution, which throws
  // an unhandled TypeError
  let regexp = /\b((?:[B-DF-HJ-NP-TV-Z]*(?:(?<=q)u)?)*)([A-Z]+)/gi;
  return string.replace(regexp, '$2$1ay');
}

// Do not edit below this line
module.exports = pigLatin;
