const findTheOldest = function (people) {
  return people.reduce((oldest, current) => {
    const oldestAge =
      (oldest.yearOfDeath ?? new Date().getFullYear()) - oldest.yearOfBirth;
    const currentAge =
      (current.yearOfDeath ?? new Date().getFullYear()) - current.yearOfBirth;

    return oldestAge < currentAge ? current : oldest;
  }, people[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
