/**
 * Le da la vuelta a un texto.
 * @param {string} text texto que se va a poner al revés
 * @returns {string} texto al revés
 * @example
 * stringReverse("hola que tal") // "lat euq aloh"
 */
function reverseString(text) {
  if (text <= 1)
    return text;

  return text[text.length - 1] + reverseString(text.substring(0, text.length - 1));
}

//Refactorización

const reverseString = text => { return text <= 1 ? text : text[text.length - 1] + reverseString(text.substring(0, text.length - 1)) }


module.exports = {
  stringReverse
}
