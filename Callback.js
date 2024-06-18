// What is the callback function
// A callback function is a function passed into another function as an argument. This function is invoked inside the outer function to complete an action. Let's take a simple example of how to use callback function

function callabckFun(name) {
  console.log(name);
}
function outerFunction(name) {
  name = prompt('Please Enter your name:');
  return name;
}
outerFunction(callabckFun);

// Q:2 what is a callback hell
// Ans:Callback Hell is an anti-pattern with multiple nested callbacks which makes code hard to read and debug when dealing with asynchronous logic
async1(function () {
  async2(function () {
    async3(function () {
      async4(function () {});
    });
  });
});
