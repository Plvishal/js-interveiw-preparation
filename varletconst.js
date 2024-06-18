// Q 1. What is the purpose of the let keyword
// Ans: The let statement declares a blockes scope local variable.

let counter = 30;
if (counter == 30) {
  let counter = 45;
  //   console.log('Insode the block', counter);
}
// console.log('Global access', counter);
//  Q2. let v/s var
// 1.var has function scope, 2. Variables will be hoisted
//1. let has block scope, 2. Hoisted but not initialized
function userDetail(username) {
  if (username) {
    // console.log(salary); //undefined due to hoisting
    // console.log(age); // RefferenceError: can't be access before inilization
    let age = 90;
    var salary = 10000;
  }
  console.log(salary); // Access due to the function scope
  console.log(age);
  //  ReferenceError: age is not defined(due to the block scope)
}
// userDetail('vishal');

// Q.3 how do you redeclare variables in a switch block without an error

// Example 1
let cunt = 1;
switch (cunt) {
  case 0:
    let name;
    break;
  case 1:
    // let name; //SyntaxError: Identifier 'name' has already been declared
    break;
}
//  To avoid this type of error, write code inside the block
// Example 2
let cunt1 = 2;
switch (cunt1) {
  case 0: {
    let name;
    break;
  }
  case 1: {
    let name;
    break;
  }
}

// Q4. What is the Temporal Dead Zone
// Ans: The Temporal Dead Zone is a behavior in JavaScript that occurs when declaring a variable with the let and const keywords, but not with var
function temporalZone() {
  console.log(counter1); // Undefined
  //   console.log(counter2); //ReferenceError: Cannot access 'counter2' before initialization
  //   console.log(counter3); //ReferenceError: Cannot access 'counter3' before initialization
  var counter1 = 1;
  let counter2 = 2;
  const counter3 = 3;
}
temporalZone();
