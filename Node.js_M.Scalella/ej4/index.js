let oneLinerJoke = require('one-liner-joke');
let chisteRandom = oneLinerJoke.getRandomJoke()

console.log(chisteRandom.body);

let categoria = chisteRandom.tags;
console.log('Categoria del Chiste: ' + categoria);