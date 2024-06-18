// Creating own function and logic
const removeDuplicate = (array) => {
  const uniqueArr = [];
  for (let i = 0; i <= array.length - 1; i++) {
    if (uniqueArr.indexOf(array[i]) == -1) {
      uniqueArr.push(array[i]);
    }
  }
  return uniqueArr;
};

console.log(removeDuplicate([1, 2, 3, 4, 5, 6, 7, 7]));

// using javaScript  Set object for removing duplicate

function reDuplicate(arr) {
  return Array.from(new Set(arr));
}

console.log(reDuplicate([1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6]));
