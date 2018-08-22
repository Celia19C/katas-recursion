/**
 * Cuenta los dígitos de un número.
 * @param {number} number El número al que se le quieren contar los dígitos
 * @returns {number} La cantidad de dígitos del número
 * @example
 * countDigits(23) // 2
 * countDigits(3124) // 4
 */

//Versión mejor (sin refactorizar)
function countDigits(number) {
  if (Math.abs(number) < 10) {
    return 1
  }
  return countDigits(number / 10) + 1
 }
///////////////

var digits= 0;
function countDigits(number) {
  digits++;
  if (number >= 10 || number <= -10)  {
    return countDigits(number / 10)
  }
 else {
    return digits
  }
}

//Otra forma
var digits= 0;
function countDigits(number) {
  var numberToCount = Math.abs(number); //<= convierte el numbero en positivo
  digits++;
  if (numberToCount >= 10 || numberToCount <= -10)  {
    return countDigits(numberToCount / 10)
  }
 else {
    return digits
  }
}

//Refactorización
var digits= 0;
const countDigits = number => {
  digits++;
  return (number >= 10 || number <= -10) ? countDigits(number / 10) : digits
}




module.exports = {
  countDigits
}
