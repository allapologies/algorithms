// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// 3
const reverse = str => str
  .split('')
  .reduce((reversed, char) => char + reversed, '');

module.exports = reverse;

// 1
// const reverse = str => str
//   .split('')
//   .reverse()
//   .join('');

// 2
// const reverse = (str) => {
//   let reversed = '';
//   for (const character of str) { // eslint-disable-line
//     reversed = character + reversed;
//   }
//
//   return reversed;
// };
//
