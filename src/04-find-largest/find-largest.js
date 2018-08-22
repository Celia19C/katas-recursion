/**
 * En cuentra el número más grande de un array.
 * @param {number[]} numbers Los números en los que hay que buscar
 * @returns {number} El número más grande del array
 * @example
 * findLargest([1, 2, 3, 4]) // 4
 * findLargest([5, 2, 9, 1]) // 9
 */
function findLargest([head, ...tail]) {
  if (!head) {
    return null
  }

  const theBiggest = findLargest(tail)
  return isGraterThan(head, theBiggest) ? head : theBiggest
}

// predicate
function isGraterThan(a, b) {
  if (a == null) {
    return false
  }
  if (b == null) {
    return true
  }
  return a > b
}

module.exports = {
  findLargest
}
