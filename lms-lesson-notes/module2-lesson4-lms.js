// FUNCTION - an independent piece of code designed to repeatedly execute a specific task with different initial values

// FUNCTION DECLARATION - function name()

// 1. multiply function declaration
function multiply() {
  // function body
  console.log("Multiply function log");
}

// 2. multiply function calls
multiply(); // 'Multiply function log'

// parameters - local variables available only in the function body

// declaration of parameters x, y, z
function multiply(x, y, z) {
  console.log(`Multiplication result is ${x * y * z}`);
}

// 1. Declaration of parameters x, y, z
function multiply(x, y, z) {
  console.log(`Multiplication result is ${x * y * z}`);
}

// 2. Passing arguments
multiply(2, 3, 5); // Multiplication result is 30
multiply(4, 8, 12); // Multiplication result is 384
multiply(17, 6, 25); // Multiplication result is 2550

// value return

function multiply(x, y, z) {
  console.log("The code before return is executed as usual");

  // Returning the result of the multiplication expression
  return x * y * z;

  console.log(
    "This log will never be executed, as it is positioned after return"
  );
}

// The function result can be saved to a variable
let result = multiply(2, 3, 5);
console.log(result); // 30

result = multiply(4, 8, 12);
console.log(result); // 384

result = multiply(17, 6, 25);
console.log(result); // 2550

// code execution

function multiply(x, y, z) {
  console.log(`Multiplication result is ${x * y * z}`);
}

console.log("Log before calling the multiply function");
multiply(2, 3, 5); // Multiplication result is 30
console.log("Log after calling the multiply function");

// Sequence of logs in the console:
// "Log before calling the multiply function"
// "Multiplication result is 30"
// "Log after calling the multiply function"

// default parameters

function count(countFrom = 0, countTo = 10, step = 1) {
  console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);

  for (let i = countFrom; i <= countTo; i += step) {
    console.log(i);
  }
}

count(1, 5); // countFrom = 1, countTo = 5, step = 1
count(2); // countFrom = 2, countTo = 10, step = 1
count(); // countFrom = 0, countTo = 10, step = 1

// PSEUDO ARRAY - a collection with the length property and the ability to access an element by index

// arguments

function multiply() {
  let total = 1;

  for (const argument of arguments) {
    total *= argument;
  }

  return total;
}

console.log(multiply(1, 2, 3)); //  6
console.log(multiply(1, 2, 3, 4)); //  24
console.log(multiply(1, 2, 3, 4, 5)); //  120

// pseudo array conversion

function fn() {
  // The args variable will contain a standard array
  const args = Array.from(arguments);
}

// return early

function withdraw(amount, balance) {
  if (amount === 0) {
    console.log("For the transaction, enter an amount greater than zero");
  } else if (amount > balance) {
    console.log("Insufficient account balance");
  } else {
    console.log("The withdrawal has been successful");
  }
}

withdraw(0, 300); // "For the transaction, enter an amount greater than zero"
withdraw(500, 300); // "Insufficient account balance"
withdraw(100, 300); // "The withdrawal has been successful"

// FUNCTION EXPRESSION - a standard declaration of a variable with a function as its value

// Function declaration
function multiply(x, y, z) {
  console.log(`Multiplication result is ${x * y * z}`);
}

// Function expression
const multiply = function (x, y, z) {
  console.log(`Multiplication result is ${x * y * z}`);
};

// SCOPE - a mechanism that determines the availability of variables in the code

// global scope - variables declared at the very top level, outside of function constructs

const globalValue = 10;

console.log(globalValue); // 10

function foo() {
  console.log(globalValue); // 10
}

for (let i = 0; i < 5; i++) {
  console.log(globalValue); // 10

  if (i === 2) {
    console.log(globalValue); // 10
  }
}

// block scope - variables declared inside {} are only available within their own set of curly braces

function foo() {
  const a = 20;
  console.log(a); // 20

  for (let i = 0; i < 5; i++) {
    console.log(a); // 20

    if (i === 2) {
      console.log(a); // 20
    }
  }
}

// ❌ Error! Variable a is not available in the global scope
console.log(a);

for (let i = 0; i < 3; i++) {
  // ❌ Error! Variable a is not available in this scope
  console.log(a);
}

// CALL STACK -  when a function is called, other functions can be called inside its body

function fnA() {
  console.log("Log inside fnA function before calling fnB");
  fnB();
  console.log("Log inside fnA function after calling fnB");
}

function fnB() {
  console.log("Log inside fnB function");
}

console.log("Log before calling fnA");
fnA();
console.log("Log after calling fnA");

// "Log before calling fnA"
// "Log inside fnA function before calling fnB"
// "Log inside fnB function"
// "Log inside fnA function after calling fnB"
// "Log after calling fnA"

// stack - a data structure using the LIFO (Last-In-First-Out) principle


