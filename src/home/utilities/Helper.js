/* 
 * Returns a random integer between minNumber and maxNumber
 * inclusively
 */
function getRandomInteger(minNumber, maxNumber) {
  const randomNumber = Math.random();
  const range = maxNumber - minNumber;
  return Math.floor(randomNumber * (range + 1)) + minNumber;
}

// Checks if a character is a vowel
function isVowel(character) {
  return /[aeiouAEIOU]/.test(character);
}

export {
  getRandomInteger,
  isVowel,
};
