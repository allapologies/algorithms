// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

const multipleByThree = (int) => int % 3 === 0;
const multipleByFive = (int) => int % 5 === 0;

const fizz = 'fizz';
const buzz = 'buzz';
const fB = fizz + buzz;

const condition = (n) => {
    if (multipleByThree(n) && multipleByFive(n)) {
        return fB
    } else if (multipleByThree(n)) {
        return fizz
    } else if (multipleByFive(n)){
        return buzz
    } else {
        return n
    }
};

const fizzBuzz = (n) => {
    for (let i = 1; i <= n; i++) {
        console.log(condition(i))
    }
};

module.exports = fizzBuzz;
