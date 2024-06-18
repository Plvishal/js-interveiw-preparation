// Q 1. What is the purpose of the array slice method
// Ans:The slice() method returns the selected elements in an array as a new array object(immutable)
let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr1 = array1.slice(3, 5);
// console.log(arr1);

// Q2. What is the purpose of the array splice method
// The splice() method adds/removes items to/from an array, and then returns the removed item.(mutable)
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr2 = array2.splice(3, 6, 'a', 'b');
// console.log(array2);

function sunOf(n) {
  if (n == 1) {
    return 1;
  }
  return n + sunOf(n - 1);
}

console.log(sunOf(3));
