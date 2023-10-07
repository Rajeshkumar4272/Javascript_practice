// Q1: Create a function that will work as the modulus operator % without using the modulus operator. The modulus operator is a way to determine the remainder of a division operation. Instead of returning the result of the division, the modulo operation returns the whole number remainder.
function mod(dividend, divisor) {
  let remainder = dividend;
  for (let i = 1; i < dividend; i++) {
    remainder = remainder - divisor;
    if (remainder < divisor) return remainder;
  }
}
console.log(mod(10, 3));

// Q2: Create a function that takes three collections of arguments and returns the sum of the product of numbers. Add the result of the first digit in each collection multiplied together to the result of the second digit in each collection multiplied together to get the final solution.
//  closer and currying used
//  multiplying each number and adding the product to the sum
// value retains(banae rakha)

function sum(num, num2) {
  return function sum2(num3, num4) {
    return function sum3(num5, num6) {
      return (sum = num * num2 * num3 + num4 * num5 * num6);
    };
  };
}
console.log(sum(1, 2)(1, 1)(2, 3));

// Q3: Create a function which takes an array arr of integers as an argument. This function must return another function, which takes a single integer as an argument and returns a new array.
// closer used
function multiply(arr) {
  return function store(value) {
    let newAray = [];
    for (let i = 0; i < arr.length; i++) {
      newAray[i] = arr[i] * value;
    }
    return newAray;
  };
}
let store = multiply([1, 2, 3]);
console.log(store(2));

// Q4: Create a function which takes a parameter n and returns a function such that it,
// when called n times, returns the string "HelloWorld".

function lambdaDepth(k) {
  k = depth(k);
  function depth(num) {
    if (isNaN(num) || !Number.isInteger(num)) {
      return "Please enter non negative integer";
    }
    return num === 0 ? "hello duniya " : "bye duniya";
  }
  return k;
}
console.log(lambdaDepth(0));

