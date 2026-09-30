const convertToCelsius  = function(TempF) {
  let C = (TempF - 32) * 5/9
    return C



};









const convertToFahrenheit = function(tempC) {
  let F = ((9 * tempC) / 5) + 32
    return F



};





// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
