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

const getItem = (int) => {
  if (int % 15 === 0) {
    return 'fizzbuzz';
  }
  if (int % 3 === 0) {
    return 'fizz';
  }
  if (int % 5 === 0) {
    return 'buzz';
  }

  return int;
};

const fizzBuzz = (n) => {
  const result = [];
  for (let i = 1; i <= n; i++) {
    result.push(getItem(i));
  }

  return result.forEach(console.log);
};

module.exports = fizzBuzz;
