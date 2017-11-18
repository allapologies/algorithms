// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

const maxChar = (str) => {
    const charsObject = {};
    let max = 0;
    let maxChar = '';

    for (let char of str) {
        charsObject[char] = charsObject[char] ? charsObject[char]++ : 1
    }

    for (let char in charsObject) {
        if (charsObject[char] > max) {
            max = charsObject[char];
            maxChar = char;
        }
    }

    return maxChar
};

module.exports = maxChar;
