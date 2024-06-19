function findEvenNumber(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i] % 2 === 0) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(findEvenNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
