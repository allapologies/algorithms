// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


// 3
const reverse = (str) =>
    str.split('').reduce((rev, char) => char + rev, '');

module.exports = reverse;

// 1
// const reverse = (str) => str
//         .split('')
//         .reverse()
//         .join('');

// 2
// const reverse = (str) => {
//     let reversedString = '';
//
//     for (let character of str) {
//         reversedString = character + reversedString;
//     }
//
//     return reversedString;
// };
