/**
 * Esta función devuelve un array con el listado de números desde 1 hasta el
 * número pasado por parámetro
 * @param {number} number El número hasta el que se quiere contar
 * @returns {number[]} Un array de números desde 1 hasta n
 * @example
 * countTo(5) // [1, 2, 3, 4, 5]
 */
const countTo = number => (number === 0 ? [] : [...countTo(number - 1), number])

module.exports = {
  countTo
}
