/**
 * Esta función devuelve un array con el listado de números desde 1 hasta el
 * número pasado por parámetro
 * @param {number} number El número hasta el que se quiere contar
 * @returns {number[]} Un array de números desde 1 hasta n
 * @example
 * countTo(5) // [1, 2, 3, 4, 5]
 */
function countTo(number) {
  if (number === 0){
    return []
  }
  if (number === 1){
    return [number]
  }
  if (number > 1) {
    return countTo(number-1).concat(number)
  }
}

//REFACTORIZACIÓN 1
function countTo(number) {
  if (number > 0){
    return countTo(number-1).concat(number)
  } 
  else {
    return []
  }
}

  //REFACTORIZACIÓN 2
  
  const countTo =  number => number > 0 ? countTo(number-1).concat(number) : []

module.exports = {
  countTo
}
