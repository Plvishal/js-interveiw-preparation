function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[0];
  let left = [];
  let right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  //   Recursively sort the partition
  const sortedLeft = quickSort(left);
  const sortedRight = quickSort(right);
  return sortedLeft.concat(pivot, sortedRight);
}

console.log(quickSort([1, 4, 6, 8, 2, 4, 9]));

// Time complexity : O(n log n)
