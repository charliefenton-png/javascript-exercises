const sumAll = function sumBetween(a, b) {
  const min = Math.min(a);
  const max = Math.max(b); 
    if (min && max === Number.isInteger)    
      return (max - min + 1) * (min + max) / 2;  
    else return ('ERROR')  


};




sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10

// Do not edit below this line
module.exports = sumAll;
