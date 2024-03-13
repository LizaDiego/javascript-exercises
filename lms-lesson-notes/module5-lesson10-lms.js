// OBJECT-ORIENTED PROGRAMMING 

const baseSalary = 30000;
const overtime = 10;
const rate = 20;

const getWage = (baseSalary, overtime, rate) => {
  return baseSalary + overtime * rate;
};

getWage(baseSalary, overtime, rate);

// function - method
// object literal - property

const employee = {
  baseSalary: 30000,
  overtime: 10,
  rate: 20,
  getWage() {
    return this.baseSalary + this.overtime * this.rate;
  },
};

employee.getWage();

// object prototype
// isPrototypeOf(object) returns true if the object exists in another objects's prototype chain

const animal = {
  legs: 4,
};
const dog = Object.create(animal);
dog.name = "Mango";

console.log(dog); // { name: 'Mango', __proto__: animal }
console.log(animal.isPrototypeOf(dog)); // true

// hasOwnProperty(propertyName) checks whether a direct property of an object exists or not

console.log(dog.hasOwnProperty("name")); // true
console.log(dog.name); // 'Mango'

console.log(dog.hasOwnProperty("legs")); // false
console.log(dog.legs); // 4

const animal = { eats: true };
const dog = Object.create(animal);
dog.barks = true;

for (const key in dog) {
  console.log(key); // barks, eats
}

const animal = {
  eats: true,
};
const dog = Object.create(animal);
dog.barks = true;

for (const key in dog) {
  if (!dog.hasOwnProperty(key)) continue;

  console.log(key); // barks
}

const animal = {
  eats: true,
};
const dog = Object.create(animal);
dog.barks = true;

const dogKeys = Object.keys(dog);

console.log(dogKeys); // ['barks']

//  The method keys() returns an array containing all the enumerable properties and methods of an object itself and
// entries() returns an array of a given object’s own enumerable string-keyed property [key, value] pairs.
const obj = { a: 1, b: 2, c: 3 };

console.log([...obj.entries]()); // [['a', 1], ['b', 2], ['c', 3]]

// class - begins with the keyword class, followed by the class name and curly braces
// class instance - created from a class using the new keyword that begins with capital letter

class User {
  // Class body
}

const mango = new User();
console.log(mango); // {}

const poly = new User();
console.log(poly); // {}

// class constructor - method automatically called when creating a new object from a class

class User {
  // Syntax for declaring a class method
  constructor(name, email) {
    // Initializing instance properties
    this.name = name;
    this.email = email;
  }
}

const mango = new User("Mango", "mango@mail.com");
console.log(mango); // { name: 'Mango', email: 'mango@mail.com' }

const poly = new User("Poly", "poly@mail.com");
console.log(poly); // { name: 'Poly', email: 'poly@mail.com' }

// parameter object shorthand - allows you to declare class methods with one or more parameters in one line

class User {
  // Object destructuring
  constructor({ name, email }) {
    this.name = name;
    this.email = email;
  }
}

const mango = new User({
  name: "Mango",
  email: "mango@mail.com",
});
console.log(mango); // { name: "Mango", email: "mango@mail.com" }

const poly = new User({
  name: "Poly",
  email: "poly@mail.com",
});
console.log(poly); // { name: "Poly", email: "poly@mail.com" }

// class methods

class User {
  constructor({ name, email }) {
    this.name = name;
    this.email = email;
  }

  // getEmail method
  getEmail() {
    return this.email;
  }

  // changeEmail method
  changeEmail(newEmail) {
    this.email = newEmail;
  }
}

// private properties - encapsulates or hides the internal details of a class from outside access 

class User {
  // Optional declaration of public properties
  name;
  // Mandatory declaration of private properties
  #email;

  constructor({ name, email }) {
    this.name = name;
    this.#email = email;
  }

  getEmail() {
    return this.#email;
  }

  changeEmail(newEmail) {
    this.#email = newEmail;
  }
}

const mango = new User({
  name: "Mango",
  email: "mango@mail.com",
});
mango.changeEmail("mango@supermail.com");
console.log(mango.getEmail()); // mango@supermail.com
console.log(mango.#email); // Error, this property is private

// getters and setters - shorter syntax for declaring methods to interact with properties

class User {
  #email;

  constructor({ name, email }) {
    this.name = name;
    this.#email = email;
  }

  // email getter
  get email() {
    return this.#email;
  }

  // email setter
  set email(newEmail) {
    this.#email = newEmail;
  }
}

const mango = new User({ name: "Mango", email: "mango@mail.com" });
console.log(mango.email); // mango@mail.com
mango.email = "mango@supermail.com";
console.log(mango.email); // mango@supermail.com

set email(newEmail) {
  if(newEmail === "") {
    console.error("Error! Email cannot be an empty string!");
    return;
  }

  this.#email = newEmail;
}

// static properties - available only to the class, but not to its instances (objects created from the class)

class User {
  // Declaring and initializing a static property
  static Roles = {
    ADMIN: "admin",
    EDITOR: "editor",
  };

  #email;
  #role;

  constructor({ email, role }) {
    this.#email = email;
    this.#role = role;
  }

  get role() {
    return this.#role;
  }

  set role(newRole) {
    this.#role = newRole;
  }
}

const mango = new User({
  email: "mango@mail.com",
  role: User.Roles.ADMIN,
});

console.log(mango.Roles); // undefined
console.log(User.Roles); // { ADMIN: "admin", EDITOR: "editor" }

console.log(mango.role); // "admin"
mango.role = User.Roles.EDITOR;
console.log(mango.role); // "editor"

// static methods - can be called on the class itself, not on an instance of the class

class User {
  static #takenEmails = [];

  static isEmailTaken(email) {
    return User.#takenEmails.includes(email);
  }

  #email;

  constructor({ email }) {
    this.#email = email;
    User.#takenEmails.push(email);
  }
}

const mango = new User({ email: "mango@mail.com" });

console.log(User.isEmailTaken("poly@mail.com"));
console.log(User.isEmailTaken("mango@mail.com"));

// class inheritance | extends ()

class Child extends Parent {
  // ...
}

class User {
  #email;

  constructor(email) {
    this.#email = email;
  }

  get email() {
    return this.#email;
  }

  set email(newEmail) {
    this.#email = newEmail;
  }
}

class ContentEditor extends User {
  // ContentEditor class body
}

const editor = new ContentEditor("mango@mail.com");
console.log(editor); // { email: "mango@mail.com" }
console.log(editor.email); // "mango@mail.com"

// child class constructor - call parent class constructor using super() keyword

class User {
  #email;

  constructor(email) {
    this.#email = email;
  }

  get email() {
    return this.#email;
  }

  set email(newEmail) {
    this.#email = newEmail;
  }
}

class ContentEditor extends User {
  constructor({ email, posts }) {
    // Calling the constructor of the User parent class
    super(email);
    this.posts = posts;
  }
}

const editor = new ContentEditor({ email: "mango@mail.com", posts: [] });
console.log(editor); // { email: 'mango@mail.com', posts: [] }
console.log(editor.email); // 'mango@mail.com'

// child class methods - can access private fields from the parent class

class ContentEditor extends User {
  constructor({ email, posts }) {
    super(email);
    this.posts = posts;
  }

  addPost(post) {
    this.posts.push(post);
  }
}

const editor = new ContentEditor({ email: "mango@mail.com", posts: [] });
console.log(editor); // { email: 'mango@mail.com', posts: [] }
console.log(editor.email); // 'mango@mail.com'
editor.addPost("post-1");
console.log(editor.posts); // ['post-1']