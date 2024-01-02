// Import util1.js with const
const util1 = require('./utils/util1.js');

// Import util2.js functions with const
const { lgNum, cut3 } = require('./utils/util2.js');

// Create an array
const arr = [1, 2, 3, 4];

// Create animal array
const animals = ['dog', 'cat', 'bird', 'fish'];

// Add numbers in array
console.log(util1.sum(arr));

// Concat both arrays
console.log(util1.concat(arr, animals));

// Find largest number in array
console.log(lgNum(arr));

// Remove 3rd element from array
console.log(cut3(animals));

// What is const?
// const is a variable that cannot be reassigned