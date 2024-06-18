// Q1. What are classes in ES6
// Ans: In ES6, Javascript classes are primarily syntactic sugar over JavaScript’s existing prototype-based inheritance. For example, the prototype based inheritance written in function

function Bike(model, color) {
  this.model = model;
  this.color = color;
}

Bike.prototype.getDetails = function () {
  return this.model + ' bike has  ' + this.color + ' color';
};
let res2 = new Bike('GT 650', 'Blue').getDetails();
console.log(res2);
// Whereas ES6 classes can be defined as an alternative

class Bike1 {
  constructor(color, model) {
    this.color = color;
    this.model = model;
  }

  getDetails() {
    return this.model + ' bike has' + this.color + ' color';
  }
}
let res1 = new Bike1('Red', 'GT 650').getDetails();
// console.log(res1);

