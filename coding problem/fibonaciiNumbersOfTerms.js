// Print the fibonacci series
function fibboncciSeries(num) {
  if (num == 0) {
    return 0;
  }
  return num + fibboncciSeries(num - 1);
}
console.log(fibboncciSeries(5));

// from here print the fibonacci terms
function fibonacciSequence(numTerms) {
  if (numTerms <= 0 || numTerms === 1) {
    return [numTerms];
  }

  const sequence = [0, 1];
  for (let i = 2; i < numTerms; i++) {
    const nextFibonacci = sequence[i - 1] + sequence[i - 1];
    sequence.push(nextFibonacci);
  }
  return sequence;
}

console.log(fibonacciSequence(5));

// Time complexity: O(N)
