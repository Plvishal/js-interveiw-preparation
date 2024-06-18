function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  re.test(String(email).toLowerCase());
  console.log(re);
  return re;
}

// First letter Capital
let sm = 'vishal ';
function firstL(sm) {
  return sm.charAt(0).toUpperCase() + sm.slice(1);
}

let re = firstL(sm);
// console.log(re);
// How doyou check if a string starts with another string

let string1 = 'Vishal ';
let string2 = 'vishal ';
console.log(string1.startsWith('Vishal'));
console.log(string2.startsWith('Vishal'));

// How do you assign default values to variables
let a;
let b = 456;
let c = a || b;
console.log(c);
