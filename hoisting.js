// Q 1. What is Hoisting
// Ans: Hoisting is a JavaScript mechanism where variables, function declarations and classes are moved to the top of their scope before code execution. Remember that JavaScript only hoists declarations, not initialisation. Let's take a simple example of variable hoisting,

console.log(message1); // undefined
var message1 = 'The variable has been hoisted';
var message2;
console.log(message2); // undefined
message2 = 'The variable has been hoisted';

message('Good morning');
function message(name) {
  console.log(name);
}
