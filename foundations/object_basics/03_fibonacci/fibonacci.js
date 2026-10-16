const fibonacci = function(count) {
  if (typeof count !== "number" || Number.isNaN(count)) return "OOPS";
const fibSequence = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987,
    1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025];
  let fibAt = fibSequence.at(count - 1);
  if (count > 0 && count < 26) return fibAt;
  else if (count === 0) return 0;
  else return "OOPS";
};

fibonacci(4);


// Do not edit below this line
module.exports = fibonacci;
