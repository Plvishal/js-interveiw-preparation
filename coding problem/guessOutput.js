// Guess 1
let output = (function (x) {
  delete x;
  return x;
})(3);
console.log(output);

// Guess 2
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000 + i);
}

// Guess 3

// let c = 0;
// let id = setInterval(() => {
//   console.log(c++);
// }, 10);
// setTimeout(() => {
//   clearInterval(id);
// }, 2000);

// Guess 4

function getName1() {
  console.log(this.name);
}
Object.prototype.getName2 = () => {
  console.log(this.name);
};
let personObj = {
  name: 'Tony',
  print: getName1,
};
personObj.print();
personObj.getName2();
