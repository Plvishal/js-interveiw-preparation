class User {
  #password = 1233;

  #userInfo() {
    console.log('This is the private method');
  }

  publicMethod() {
    console.log(this.#password);
    this.#userInfo();
  }
}

const user = new User();
user.publicMethod();

/*

Encapsulation : Encapsulation is a fundamental principle of object-programmimg that promotes data hiding and ensurs that the internal implementation details of an object are inaccessible fro outside the object.
Private method or variable : #method/variable
Benefit of   Encapsulation and Private Properties
1. information Hiding
2. Controlled Access
3. Code Organiziation
*/
