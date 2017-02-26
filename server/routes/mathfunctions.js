var calculator = require('./calculator');

function multiplication(num1, num2) {
  return num1 * num2;
}
function division(num1, num2){
  return num1 / num2;
}
function subtraction(num2, num1){
  return num2 - num1;
}
function addition(num1, num2){
  return Number(num1) + Number(num2);
}


module.exports = {
  multiply: multiplication,
  divide: division,
  subtract: subtraction,
  add: addition,
}
