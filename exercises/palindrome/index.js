// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// 2

const palindrome = str => str
  .split('')
  .every((char, i) => char === str[str.length - i - 1]);

module.exports = palindrome;

// 1
// const reverseString = str => str.split('').reverse().join('');
// const palindrome = str => str === reverseString(str);
