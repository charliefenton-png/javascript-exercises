const leapYears = function(years) {
  if ((years % 100) == 0 && years % 400 !== 0)
    return false 
  else if ((years % 4) == 0 || years % 400 == 0)
    return true
   else return false
};










leapYears(2000); // is a leap year: returns true
leapYears(1985); // is not a leap year: returns false


/* Leap years are years divisible by four (like 1984 and 2004). 
However, years divisible by 100 are not leap years (such as 1800 and 1900) 
unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years). */








// Do not edit below this line
module.exports = leapYears;
