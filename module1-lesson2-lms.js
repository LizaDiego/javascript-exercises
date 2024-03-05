// BRANCHES AND CYCLES

// CONDITION | if | the condition result is converted to a boolean, true or false

if (condition) {
  // if body
}

let cost = 0;
const subscription = "pro";

if (subscription === "pro") {
  cost = 100;
}

console.log(cost); // 100

let cost = 0;
const subscription = "free";

if (subscription === "pro") {
  cost = 100;
}

console.log(cost); // 0

// CONDITION | if else | if the condition is converted to true, the body of the else block is ignored

if (condition) {
  // if body
} else {
  // else body
}

let cost;
const subscription = "free";

if (subscription === "pro") {
  cost = 100;
} else {
  cost = 0;
}

console.log(cost); // 0

let cost;
const subscription = "pro";

if (subscription === "pro") {
  cost = 100;
} else {
  cost = 0;
}

console.log(cost); // 100

// CONDITION | else if | looking for the first match of a condition, ignoring everything else

let cost;
const subscription = "premium";

if (subscription === "free") {
  cost = 0;
} else if (subscription === "pro") {
  cost = 100;
} else if (subscription === "premium") {
  cost = 500;
} else {
  console.log("Invalid subscription type");
}

console.log(cost); // 500

// TERNARY OPERATOR | <condition> ? <expression_if_condition_true> : <expression_if_condition_false>

let type;
const age = 20;

if (age >= 18) {
  type = "adult";
} else {
  type = "child";
}

console.log(type); // "adult"

// refactor

const age = 20;
const type = age >= 18 ? "adult" : "child";
console.log(type); // "adult"

const num1 = 5;
const num2 = 10;
let biggerNumber;

if (num1 > num2) {
  biggerNumber = num1;
} else {
  biggerNumber = num2;
}

console.log(biggerNumber); // 10

// refactor

const num1 = 5;
const num2 = 10;
const biggerNumber = num1 > num2 ? num1 : num2;

console.log(biggerNumber); // 10

// SWITCH | tasks with one common question (what to compare) and many answer options (what to compare with)

switch (
  value // what to compare
) {
  case value: // what to compare with
    statements;
    break;

  case value: // what to compare with
    statements;
    break;

  default:
    statements;
}

let cost;
const subscription = "premium";

switch (subscription) {
  case "free":
    cost = 0;
    break;

  case "pro":
    cost = 100;
    break;

  case "premium":
    cost = 500;
    break;

  default:
    console.log("Invalid subscription type");
}

console.log(cost); // 500

// SCOPE | local or global | availability of variables in different parts of the code

// global variable

const value = 5;

if (true) {
  console.log("Block scope: ", value); // 5
}

console.log("Global scope: ", value); // 5

// local variable

if (true) {
  const value = 5;
  console.log("Block scope: ", value); // 5
}

console.log("Global scope: ", value); // ReferenceError: value is not defined

// global + nested variables

const global = "global";

if (true) {
  const blockA = "block A";

  // You see global + local A
  console.log(global); // 'global'
  console.log(blockA); // block A

  // Variables blockB and blockC cannot be found in the available scopes.
  // You will see a variable accessing error.
  console.log(blockB); // ReferenceError: blockB is not defined
  console.log(blockC); // ReferenceError: blockC is not defined

  if (true) {
    const blockB = "block B";

    // You see global + external A + local B
    console.log(global); // global
    console.log(blockA); // block A
    console.log(blockB); // block B

    // Variable blockC cannot be found in the available scopes.
    // You will see a variable accessing error.
    console.log(blockC); // ReferenceError: blockC is not defined
  }
}

if (true) {
  const blockC = "block C";

  // You see global + local C
  console.log(global); // global
  console.log(blockC); // block C

  // Variables blockA and blockB cannot be found in the available scopes.
  // You will see a variable accessing error.
  console.log(blockA); // ReferenceError: blockA is not defined
  console.log(blockB); // ReferenceError: blockB is not defined
}

// You see only the global one
console.log(global); // global

// Variables blockA, blockB and blockC cannot be found in the available scopes.
// You will see a variable accessing error.
console.log(blockA); // ReferenceError: blockA is not defined
console.log(blockB); // ReferenceError: blockB is not defined
console.log(blockC); // ReferenceError: blockC is not defined

// LOOP - a task that performs similar actions a number of times

// LOOP | while loop - executes a set of statements as long as the condition remains true

let counter = 0;

while (counter < 10) {
  console.log("counter: ", counter);
  counter += 1;
}

let clientCounter = 18;
const maxClients = 25;

while (clientCounter < maxClients) {
  console.log(clientCounter);
  clientCounter += 1;
}

// LOOP | do while loop - it always runs at least once regardless of the given condition

let password = "";

do {
  password = prompt("Enter a password longer than 4 characters", "");
} while (password.length < 5);

console.log("Entered password: ", password);

// LOOP | for loop -  used to iterate over a range of values or array elements

for (initialization; condition; post - expression) {
  // statements
}

for (let i = 0; i <= 20; i += 5) {
  console.log(i);
}

const target = 3;
let sum = 0;

for (let i = 0; i <= target; i += 1) {
  sum += i;
}

console.log(sum);

const max = 10;
for (let i = 0; i < max; i += 1) {
  console.log(`${max} % ${i} = `, max % i);
}

// BREAK - stops the execution of the nearest enclosing loop

for (let i = 0; i <= 5; i += 1) {
  console.log(i);

  if (i === 3) {
    console.log("Number 3 found, abort the loop");
    break;
  }
}

console.log("Log after loop");

// CONTINUE - used when there is nothing else to do in the current iteration, or nothing needs to be done at all, and it is time to move on to the next iteration

const number = 10;

for (let i = 0; i < number; i += 1) {
  if (i % 2 === 0) {
    continue;
  }

  console.log("Odd i: ", i); // 1, 3, 5, 7, 9
}




