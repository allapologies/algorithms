// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// 2 using every
const palindrome = (str) => {
    return str.split('')
        .every((char, i, arr) => {
            return char === arr[arr.length - i - 1]
        })
};

// 1
// const palindrome = (str) => str.split('').reverse().join('') === str;

module.exports = palindrome;
