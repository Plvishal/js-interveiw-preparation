// Factorials using loops
let n = 5;
let ft = 1;
for (let i = 1; i < n; i++) {
  ft += ft * i;
}
console.log(ft);
// Factorials using Recursive functions
const fact = (n) => {
  if (n == 1) {
    return 1;
  }
  return n * fact(n - 1);
};
console.log(fact(5));
