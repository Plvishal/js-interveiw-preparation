// Fibonacci series using loops
let n = 5;
let count = 0;
for (let i = 0; i <= n; i++) {
  count += i;
}
console.log(count);

// fibonacci series using recursive functions
function fibo(n) {
  if (n == 0) {
    return 0;
  }

  return n + fibo(n - 1);
}

console.log(fibo(n));
