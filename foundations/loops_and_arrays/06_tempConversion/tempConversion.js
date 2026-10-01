const convertToCelsius  = function(TempF) {
  let C = (TempF - 32) * 5/9
  var rounded = Math.round(C * 10) / 10  
  return rounded




};









const convertToFahrenheit = function(tempC) {
  let F = ((9 * tempC) / 5) + 32
    var rounded = Math.round(F * 10) / 10
    return rounded



};





// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
