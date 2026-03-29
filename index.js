function sum(a, b) {
  return a + b;
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

function findLargest(numbers) {
  if (numbers.length === 0) return null;
  return Math.max(...numbers);
}

function isPalindrome(str) {
  const clean = str.toLowerCase();
  return clean === clean.split('').reverse().join('');
}

function filterEvenNumbers(numbers) {
  return numbers.filter(num => num % 2 === 0);
}


// Do not edit the line below.
module.exports = {
  sum,
  reverseString,
  findLargest,
  isPalindrome,
  filterEvenNumbers,
};
