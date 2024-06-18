// Q1. What are the possible ways yo create objects in js.
// 1. Object Literal syntax

// Object literal property values can be of any data ytpe, including array, function, and nested object.
var obj = {
  name: 'Vishal',
  age: '23',
};
// console.log(obj);
// 2. Object Contructor

var obj1 = new Object();
var obj2 = Object();
obj1.name = 'Vishal';
// console.log(obj1, obj2);

// 3. Objects Create Methods
let obj3 = Object.create({});
obj3.name = 'vishal';
// console.log(obj3);

// 4. Function constructor

function Person1(name, age) {
  this.name = name;
  this.age = age;
}
var obj4 = new Person1('vishal', 25);
// console.log(obj4);

// 5. ES6 Class Syntax
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

let obj5 = new Person('Vishal', 45);
// console.log(obj5);

// 6. Singleton Pattern
let obj6 = new (function () {
  this.name = 'Vishal';
})();

console.log(obj6);
