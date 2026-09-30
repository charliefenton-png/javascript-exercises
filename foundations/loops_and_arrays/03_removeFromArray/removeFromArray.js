const removeFromArray = function (array, ...itemsToRemove) {
  return array.filter((item) => !itemsToRemove.includes(item));
};

removeFromArray([1, 2, 3, 4], 3); // [1, 2, 4]
removeFromArray([1, 2, 3, 4], 2, 3); // [1, 4]





removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]




// Do not edit below this line
module.exports = removeFromArray;
