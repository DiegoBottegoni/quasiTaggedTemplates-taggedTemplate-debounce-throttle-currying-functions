const { curry, multiply } = require('../task6');

const curriedMultiply = curry(multiply, 3);

const step1 = curriedMultiply(2); // Returns a curried function
const step2 = step1(3); // Returns a curried function
const result = step2(4); // Returns the final result: 2 * 3 * 4 = 24

console.log("Result:", result); // Expected: 24

console.log("Test 1:", curry(multiply)(2)(3)(4));
console.log("Test 2:", curry(multiply, 3)(2)(3)(4));
console.log("Test 3:", curry(multiply)(2)(3)(5));