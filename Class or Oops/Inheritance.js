class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
}

const dog1 = new Dog('Max', 'Labrador');
console.log(dog1);

// Function Overriding
// Function overriding is the ability of child class to provide a different implementation for a method that is already definees in its parent class.
class Shape {
  draw() {
    console.log('Drawing a shape');
  }
}

class Circle extends Shape {
  draw() {
    console.log('Drawing a circle');
  }
}

const myshape = new Shape();
myshape.draw();

const myCircle = new Circle();
myCircle.draw();

// Inheritance in Constructor Function
function Vehicle(make) {
  this.make = make;
}
Vehicle.prototype.start = function () {
  console.log(`Satrting th ${this.make} vehicle`);
};

function Car(make, model) {
  Vehicle.call(this, make);
  this.model = model;
}

Car.prototype = Object.create(Vehicle.prototype);
const myCar = new Car('Toyata', 'Camry');
myCar.start();

// Static keyword in Js

class Circles {
  static PI = 3.14159;
  constructor(radius) {
    this.radius = radius;
  }

  claculateArea() {
    return Circles.PI * this.radius * this.radius;
  }
  static formateNumber(number) {
    return number.toFixed(2);
  }
}

const myCircles = new Circles(5);
console.log(myCircles.claculateArea());
console.log(Circles.formateNumber(5));
console.log(myCircles.PI);
console.log(Circles.PI);

// Getter and setter
class Persion {
  constructor(name) {
    this.name = name;
  }
  get uppercaseName() {
    return this.name.toUpperCase();
  }
  set setName(newName) {
    this.name = newName;
  }
}

const alice = new Persion('Vishal');
console.log(alice.uppercaseName);
alice.setName = 'Palji';
console.log(alice.uppercaseName);
/* 
Inheritance : Inheritence is a key concept in object-programmimg thbat allows objects to inherit properties to  inherit properties and method from are parent class. It enables code resuse, promotes code organization  and facilities the creation of specilized subclass.

Achieve Using : super nad extends keyword
*/
