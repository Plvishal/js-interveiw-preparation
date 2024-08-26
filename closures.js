// Q1. What is closures
// Ans: A closure is the combination of a function and the lexical environment within which that function was declared. i.e, It is an inner function that has access to the outer or enclosing function’s variables. The closure has three scope chains

// 1.1: Own scope where variables defined between its curly brackets

// 1.2:Outer function’s variables
// 1.3:Global variables
function Welcome(name) {
  var greetingInfo = function (message) {
    console.log(message + ' ' + name);
  };
  return greetingInfo;
}
var myFunction = Welcome('John');
myFunction('Welcome '); //Output: Welcome John
myFunction('Hello Mr.'); //output: Hello Mr.John
