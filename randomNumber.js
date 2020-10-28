// Generate a random number
// Math.floor returns whole numbers
function randomNumber(min = 1.1, max = 99.99) {
  let numba = Math.floor(Math.random() * (max - min + 1) + min);
  return numba;
}

console.log(randomNumber());
