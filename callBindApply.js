// Call: The call() method invokes a function with a given this value and arguments provided one by one
let empl1 = { fname: 'Vishal', lname: 'Pal' };

function invite(greeting1, greeting2) {
  console.log(
    greeting1 + ' ' + this.fname + ' ' + this.lname + ' ' + greeting2
  );
}
// invite.call(empl1, 'Hello', 'How are you ?');
// Apply: Invokes the function with a given this value and allows you to pass in arguments as an array

function invite1(greeting1, greeting2) {
  console.log(
    greeting1 + ' ' + this.fname + ' ' + this.lname + ' ' + greeting2
  );
}

invite1.apply(empl1, ['Hello', 'How are you ?']);
