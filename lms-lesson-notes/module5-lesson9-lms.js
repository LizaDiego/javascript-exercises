// FUNCTION EXECUTION CONTEXT | this - global object

// Petya is running fast because Petya is trying to catch the train.
const petya = {
  username: "Petya",
  showName() {
    console.log(petya.username);
  },
};

petya.showName();

// 'this' inside function
const petya = {
  username: "Petya",
  showName() {
    console.log(this.username);
  },
};

petya.showName();

// object method
const bookShelf = {
  authors: ["Bernard Cornwell", "Robert Sheckley”],
  getAuthors() {
    return this.authors;
  },
  addAuthor(authorName) {
    this.authors.push(authorName);
  },
};

console.log(bookShelf.getAuthors()); // ["Bernard Cornwell", "Robert Sheckley"]
bookShelf.addAuthor("Tanith Lee");
console.log(bookShelf.getAuthors()); // ["Bernard Cornwell", "Robert Sheckley", "Tanith Lee"]

// global scope

function foo() {
  console.log(this);
}

foo(); // window without "use strict" and undefined with "use strict"

// object method

const petya = {
  username: "Petya",
  showThis() {
    console.log(this);
  },
  showName() {
    console.log(this.username);
  },
};

petya.showThis(); // {username: "Petya", showThis: ƒ, showName: ƒ}
petya.showName(); // 'Petya'

function showThis() {
  console.log("this in showThis: ", this);
}

// Calling in the global context
showThis(); // this in showThis: Window

const user = {
  username: "Mango",
};

// Writing a reference to the function to the object property
// Note that this is not a call because it has no ()
user.showContext = showThis;

// Calling the function in the object context
// this will point to the current object that serves as the
// call context, not to the global object.
user.showContext(); // this in showThis: {username: "Mango", showContext: ƒ}

// callback function

const customer = {
  firstName: "Jacob",
  lastName: "Mercer",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

function makeMessage(callback) {
  // callback() is a call of the getFullName method without an object
  console.log(`Processing request from ${callback()}.`);
}

makeMessage(customer.getFullName); // Function call error

// arrow function

const showThis = () => {
  console.log("this in showThis: ", this);
};

showThis(); // this in showThis: window

const user = {
  username: "Mango",
};
user.showContext = showThis;

user.showContext(); // this in showThis: window

const hotel = {
  username: "Resort hotel",
  showThis() {
    const foo = () => {
      // Arrows remember the context during declaration,
      // from the parent scope
      console.log("this in foo: ", this);
    };

    foo();
    console.log("this in showThis: ", this);
  },
};

hotel.showThis();
// this in foo: {username: 'Resort hotel', showThis: ƒ}
// this in showThis: {username: 'Resort hotel',showThis: ƒ}

// function methods - call(), apply(), bind()

// call()
foo.call(obj, arg1, arg2, ...)

function greetGuest(greeting) {
  console.log(`${greeting}, ${this.username}.`);
}

const mango = {
  username: "Mango",
};
const poly = {
  username: "Poly",
};

greetGuest.call(mango, "Welcome"); // Welcome, Mango.
greetGuest.call(poly, "Welcome back"); // Welcome back, Poly.

// apply()
foo.call(obj, arg1, arg2, ...)

foo.apply(obj, [arg1, arg2, ...])

function greetGuest(greeting) {
  console.log(`${greeting}, ${this.username}.`);
}

const mango = {
  username: "Mango",
};
const poly = {
  username: "Poly",
};

greetGuest.apply(mango, ["Welcome"]); // Welcome, Mango.
greetGuest.apply(poly, ["Welcome back"]); // Welcome back, Poly.

// bind()
foo.bind(obj, arg1, arg2, ...)

function greet(clientName) {
  return `${clientName}, welcome to «${this.service}».`;
}

const steam = {
  service: "Steam",
};
const steamGreeter = greet.bind(steam);
steamGreeter("Mango"); // "Mango, welcome to «Steam»."

const gmail = {
  service: "Gmail",
};
const gmailGreeter = greet.bind(gmail);
gmailGreeter("Poly"); // "Poly, welcome to «Gmail»."

// bind() and object method

const customer = {
  firstName: "Jacob",
  lastName: "Mercer",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

function makeMessage(callback) {
  // callback() is a call of the getFullName method without an object
  console.log(`Processing request from ${callback()}.`);
}

makeMessage(customer.getFullName); // Function call error

// ❌ Before
makeMessage(customer.getFullName); // Function call error

// ✅ After
makeMessage(customer.getFullName.bind(customer)); // Processing request from Jacob Mercer.

