function findLargestElement(arr) {
  let max = Number.NEGATIVE_INFINITY;

  function traverse(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        traverse(arr[i]);
      } else {
        if (arr[i] > max) {
          max = arr[i];
        }
      }
    }
  }
  traverse(arr);
  return max;
}

console.log(
  findLargestElement([
    [12, 34],
    [577, 6],
  ])
);

// Time complexity : O(N)
