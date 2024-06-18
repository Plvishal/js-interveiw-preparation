// Q-1: What is a promise.
// Ans: A promise is an object that may produce a single value some time in the future with either a resolved value or a reason that it’s not resolved(for example, network error). It will be in one of the 3 possible states: fulfilled, rejected, or pending.

const promise = new Promise(
  (resolve) => {
    setTimeout(() => {
      resolve("I'm a Promise!");
    }, 1000);
  },
  (reject) => {}
);

// promise.then((value) => console.log(value));

promise.then((value) => console.log(value));
console.log(promise);

// Promises are used to handle asynchronous operations. They provide an alternative approach for callbacks by reducing the callback hell and writing the cleaner code
// Pending: This is an initial state of the Promise before an operation begins
// Fulfilled: This state indicates that the specified operation was completed.
// Rejected: This state indicates that the operation did not complete. In this case an error value will be thrown.

// Q.2: What is the promise chaining
let promise1 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1);
})
  .then(function (result) {
    console.log(result); // 1
    return result * 2;
  })
  .then(function (result) {
    console.log(result); // 2
    return result * 3;
  })
  .then(function (result) {
    console.log(result); // 6
    return result * 4;
  });

//   Q.3: what is promise.all
// Ans:Promise.all is a promise that takes an array of promises as an input (an iterable), and it gets resolved when all the promises get resolved or any one of them gets rejected.

Promise.all([promise, promise1])
  .then((result) => console.log(result))
  .catch((err) => console.log(er));
