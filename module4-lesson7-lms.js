// CALLBACK - a value that can be stored in a variable or passed as an argument to another function

function greet(name) {
  return `Welcome ${name}.`;
}

// Calling the greet function and displaying the result in the console
console.log(greet("Mango")); // Welcome, Mango.

// Displaying the greet function in the console without calling it
console.log(greet); // ƒ greet() { return `Welcome ${name}.`; }

// Callback
function greet(name) {
  console.log(`Welcome ${name}.`);
}

// Higher-order function
function registerGuest(name, callback) {
  console.log(`Registering guest ${name}.`);
  callback(name);
}

registerGuest("Mango", greet);

// inline callback

function registerGuest(name, callback) {
  console.log(`Registering guest ${name}.`);
  callback(name);
}

// Passing the greet inline function as a callback
registerGuest("Mango", function greet(name) {
  console.log(`Welcome ${name}.`);
});

// Passing the notify inline function as a callback
registerGuest("Poly", function notify(name) {
  console.log(`Dear ${name}, your room will be ready in 30 minutes.`);
});

// several callbacks

function processCall(recipient) {
  // Simulating the subscriber’s availability with a random number
  const isRecipientAvailable = Math.random() > 0.5;

  if (!isRecipientAvailable) {
    console.log(
      `The subscriber ${recipient} is not available, please leave a message.`
    );
    // Answering machine activation logic
  } else {
    console.log(`Connecting you to ${recipient}, please wait...`);
    // Call handling logic
  }
}

processCall("Mango");

// refactor

function processCall(recipient, onAvailable, onNotAvailable) {
  // Simulating the subscriber’s availability with a random number
  const isRecipientAvailable = Math.random() > 0.5;

  if (!isRecipientAvailable) {
    onNotAvailable(recipient);
    return;
  }

  onAvailable(recipient);
}

function takeCall(name) {
  console.log(`Connecting you to ${name}, please wait...`);
  // Call handling logic
}

function activateAnsweringMachine(name) {
  console.log(
    `The subscriber ${name} is not available, please leave a message.`
  );
  // Answering machine activation logic
}

function leaveHoloMessage(name) {
  console.log(`The subscriber ${name} is not available, recording a hologram.`);
  // Hologram record logic
}

processCall("Mango", takeCall, activateAnsweringMachine);
processCall("Poly", takeCall, leaveHoloMessage);

// repetition abstraction

for (let i = 0; i < 10; i += 1) {
  console.log(i);
}

function repeatLog(n) {
  for (let i = 0; i < n; i += 1) {
    console.log(i);
  }
}

repeatLog(5);

function printValue(value) {
  console.log(value);
}

function prettyPrint(value) {
  console.log("Logging value: ", value);
}

function repeat(n, action) {
  for (let i = 0; i < n; i += 1) {
    action(i);
  }
}

// Passing printValue as a callback
repeat(3, printValue);
// 0
// 1
// 2

// Passing prettyPrint as a callback
repeat(3, prettyPrint);
// Logging value: 0
// Logging value: 1
// Logging value: 2

// forEach

array.forEach(function callback(element, index, array) {
  // Callback body
});

const numbers = [5, 10, 15, 20, 25];

// Classic for
for (let i = 0; i < numbers.length; i += 1) {
  console.log(`Index ${i}, value ${numbers[i]}`);
}

// Iterating forEach
numbers.forEach(function (number, index) {
  console.log(`Index ${index}, value ${number}`);
});

// arrow function

// regular function declaration
function classicAdd(a, b, c) {
  return a + b + c;
}

// the same as arrow function
const arrowAdd = (a, b, c) => {
  return a + b + c;
};

// arrow | several parameters

const add = (a, b, c) => {
  return a + b + c;
};

// arrow | one parameter

const add = (a) => {
  return a + 5;
};

// arrow | no parameter

const greet = () => {
  console.log("Hello!");
};

// explicit return | with curly braces

const add = (a, b, c) => {
  console.log(a, b, c);
  return a + b + c;
};

// implicit return

const add = (a, b, c) => a + b + c;

// before
function classicAdd(a, b, c) {
  return a + b + c;
}

// after
const arrowAdd = (a, b, c) => a + b + c;

// arguments pseudo array

const add = (...args) => {
  console.log(args);
};

add(1, 2, 3); // [1, 2, 3]

// arrow functions as callbacks

const numbers = [5, 10, 15, 20, 25];

// function declaration
numbers.forEach(function (number, index) {
  console.log(`Index ${index}, value ${number}`);
});

// anonymous arrow function
numbers.forEach((number, index) => {
  console.log(`Index ${index}, value ${number}`);
});

const numbers = [5, 10, 15, 20, 25];

const logMessage = (number, index) => {
  console.log(`Index ${index}, value ${number}`);
};

numbers.forEach(logMessage);

// CODE TYPES

// Imperative approach
const numbers = [1, 2, 3, 4, 5];
const filteredNumbers = [];

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] > 3) {
    filteredNumbers.push(numbers[i]);
  }
}

console.log(filteredNumbers); // [4, 5]

// Declarative approach
const numbers = [1, 2, 3, 4, 5];
const filteredNumbers = numbers.filter(value => value > 3);
console.log(filteredNumbers); // [4, 5]


