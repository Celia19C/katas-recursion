/**
 * Suma todos los números desde 1 hasta n.
 * @param {number} number El número hasta el que se quiere sumar
 * @returns {number} El resultado de la suma
 * @example
 * // 1 + 2 + 3 + 4 + 5 = 15
 * sumNumbers(5) // 15
 */


function sumNumbers(number) {
  if (number == 1) {
    return 1
  }
  else {
  return sumNumbers(number - 1) + number 
  }
}


//REFACTORIZACIÓN

const sumNumbers = (number) => (number == 1) ? 1 : sumNumbers(number - 1) + number



module.exports = {
  sumNumbers
}
