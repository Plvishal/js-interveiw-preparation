// Shallow Copy
/*
 shallow copy creates a new object or array and copies the references of the
original values. This means that if the original object contains nested objects or
arrays, the shallow copy will still reference the same nested objects or arrays
*/

// Shallow copy using spread operator
const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const shallowCopyArr = [...originalArray];
const originalObject1 = { name: ' Vishal pal', age: 50 };
const shalowCopyObj = { ...originalObject1 };
// console.log(shallowCopyArr);
// console.log(shalowCopyObj);
// Shallow copy using Object.assign() method

const originalObject2 = { name: 'Ravi', age: 30 };
const shallowCopyObj1 = Object.assign({}, originalObject2);
shallowCopyObj1.age = 50;
// console.log(shallowCopyObj1);
// console.log(originalObject2);

// Deep copy
/*
A deep copy creates a completely new object or array with its own set of values. Any
changes made to the deep copy will not affect the original object or array, and vice
versa
*/

// JSON.strigyfy()  and JSON.parse()
const originalObject3 = { name: 'John', age: 30 };
const deepCopyObject = JSON.parse(JSON.stringify(originalObject3));

deepCopyObject.age = 20;
console.log(originalObject3);
