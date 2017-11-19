// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


const omitSpecialChars = (str) => str.replace(/[ˆ\W]/, '').toLowerCase();

function anagrams(stringA, stringB) {
    const stringACleaned = omitSpecialChars(stringA).toLowerCase().split('').sort().join('');
    const stringBCleaned = omitSpecialChars(stringB).toLowerCase().split('').sort().join('');

    return stringACleaned === stringBCleaned

}

module.exports = anagrams;

// const omitSpecialCharsAndLowerCase = (str) => str.replace(/[ˆ\W]/, '').toLowerCase();
//
// const createCharsMapByString = (str) => {
//     const cleanString = omitSpecialCharsAndLowerCase(str);
//     const chars = {};
//
//     for (let char of cleanString) {
//         chars[char] = chars[char] ? chars[char] + 1 : 1
//     }
//
//     return chars;
// };
//
//
// function anagrams(stringA, stringB) {
//     const stringAMap = createCharsMapByString(stringA);
//     const stringBMap = createCharsMapByString(stringB);
//
//     if (Object.keys(stringAMap).length !== Object.keys(stringBMap).length) {
//         return false
//     }
//
//     return Object.keys(stringAMap).every((char) => stringAMap[char] === stringBMap[char])
// }