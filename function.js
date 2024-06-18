// Q.1 : What is a first class function
// Ans:In Javascript, functions are first class objects. First-class functions means when functions in that language are treated like any other variable.

const handler = () => console.log('This is a click handler function');
// document.addEventListener('click', handler);
// handler();

// Q2. What is the first class function
// Ans:A first-order function is a function that doesn’t accept another function as an argument and doesn’t return a function as its return value.
const firstOrder = () => console.log('I am a first order function!');

// Q3. What is the higher order function
// Ans: A higher-order function is a function that accepts another function as an argument or returns a function as a return value or both.
const firstOrderFunc = () => console.log('Hello, I am a First order function');
// const higherOrder = (ReturnFirstOrderFunc) => ReturnFirstOrderFunc();
// higherOrder(firstOrderFunc);
// Q 4. What is the currying function ?
// Ans:Currying is the process of taking a function with multiple arguments and turning it into a sequence of functions each with only a single argument

const multiFunc = (a, b, c) => {
  return a + b + c;
};

let res = multiFunc(1, 2, 3);
// console.log(res);

function sum1(a) {
  console.log('Inside function sum1', a);
  return function sum2(b) {
    console.log('Inside function sum2', a, b);
    return function sum3(c) {
      console.log('Inside function sum3', a, b, c);
      return a + b + c;
    };
  };
}
// let res1 = sum1(1);
// console.log(res1);
// let res2 = res1(2);
// console.log(res2);
// let res3 = res2(4);
// console.log(res3);

// Q 5. What is a pure function
// Ans:A Pure function is a function where the return value is only determined by its arguments without any side effects

// Impure
let numArr = [];
const impAddNumber = (number) => numArr.push(number);
// console.log(impAddNumber(1));
// console.log(numArr);
// Pure
const pureAddNum = (number) => (argArr) => argArr.concat([number]);
// console.log(pureAddNum(7)(numArr));
// console.log(numArr);

// Q 6. What is an IIFE(Immediately Invoked Function Expression)
// Ans:The primary reason to use an IIFE is to obtain data privacy because any variables declared within the IIFE cannot be accessed by the outside world. i.e, If you try to access variables from the IIFE then it throws an error as below,(avoid the global population)
(function () {
  var message = 'IIFE';
  console.log(message);
})();

// console.log(message); //ReferenceError: message is not defined
