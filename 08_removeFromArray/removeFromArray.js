const removeFromArray = function(arr, ...items) {
  return arr.filter(val => !items.includes(val));
};

// Do not edit below this line
module.exports = removeFromArray;
