let w = 'vishal pal';
let n = w.split(/\s/).reverse().join(' ');
console.log(n);

let nw = 'visal pal kumar';
let arr = [];
for (let i = 0; i < nw.length; i++) {
  arr.push(nw.charAt(i));
}

console.log(arr.reverse().join(''));

