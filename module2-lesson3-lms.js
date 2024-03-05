// ARRAYS - a data structure for storing and manipulating collections of indexed values

const clients = ["Mango", "Poly", "Ajax"];

// access to elements by index

const clients = ["Mango", "Poly", "Ajax"];

// by specifying the element index in brackets, you get its value
console.log(clients[0]); // Mango
console.log(clients[1]); // Poly
console.log(clients[2]); // Ajax

// override, replace, change elements in an array using index

const clients = ["Mango", "Poly", "Ajax"];
clients[0] = "Kiwi";
clients[1] = "Pango";
console.log(clients); // ["Kiwi", "Pango", "Ajax"]

// array length - property that gives us the number of elements in the array

const clients = ["Mango", "Poly", "Ajax"];
console.log(clients.length); // 3

// last element index - always equal to (array length - 1)

const clients = ["Mango", "Poly", "Ajax"];
const lastElementIndex = clients.length - 1;
console.log(lastElementIndex); // 2
console.log(clients[lastElementIndex]); // "Ajax"


// ARRAY ITERATION - looping through all elements of an array

// for loop

const clients = ["Mango", "Ajax", "Poly"];

for (let i = 0; i < clients.length; i += 1) {
  console.log(clients[i]);
}

// for of loop

const clients = ["Mango", "Ajax", "Poly"];

for (const client of clients) {
  console.log(client);
}

const string = "javascript";

for (const character of string) {
  console.log(character);
}

// break and continue

const clients = ["Mango", "Poly", "Ajax"];
const clientNameToFind = "Poly";
let message;

for (const client of clients) {
  // At each iteration, check if the array element matches
  // client's name. If it matches, then log a message
  // and make a break so as not to look further
  if (client === clientNameToFind) {
    message = "Client name exists in the database!";
    break;
  }

  // If no match is found, create a message saying that there is no such a name
  message = "Client name does not exist in the database!";
}

console.log(message); // "Client name exists in the database!"

const clients = ["Mango", "Poly", "Ajax"];
const clientNameToFind = "Poly";
let message = "Client name does not exist in the database!";

for (const client of clients) {
  if (client === clientNameToFind) {
    message = "Client name exists in the database!";
    break;
  }
  // If it does not match, then do nothing at this iteration
}

console.log(message); // Client name exists in the database!

const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
const threshold = 15;

// For numbers less than the threshold value, continue is triggered, the body execution stops
// and control is passed to the next iteration.
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] < threshold) {
    continue;
  }

  console.log(`Number is greater than ${threshold}: ${numbers[i]}`); // 18, 29, 34
}

// VALUE AND REFERENCE

// PRIMITIVES - number, string, boolean, null, undefined, symbol
// OBJECTS - objects are reference types and they hold references to some data

// primitives example

let a = 5;
// Assignment by value, one more cell will be created in memory,
// with the value 5 copied
let b = a;
console.log(a); // 5
console.log(b); // 5

// Change the value of a
a = 10;
console.log(a); // 10
// The value of b has not changed since it is a separate copy
console.log(b); // 5

// complex example

const a = ["Mango"];
// since a is an array, a reference to an existing array in memory
// is written to b. Now a and b point to the same array.
const b = a;
console.log(a); // ["Mango"]
console.log(b); // ["Mango"]

// Change the array by adding another element, using the pointer from a
a.push("Poly");
console.log(a); // ["Mango", "Poly"]

// b has also changed because b, just like a,
// contains a reference to the same space in memory
console.log(b); // ["Mango", "Poly"]

// the result is repeated
b.push("Ajax");
console.log(a); // ["Mango", "Poly", "Ajax"]
console.log(b); // ["Mango", "Poly", "Ajax"]

// ARRAY METHODS

// split(separator, limit) - splits string into substrings based on separator
const name = "Mango";
console.log(name.split("")); // ["M", "a", "n", "g", "o"]

const message = "JavaScript is awesome";
console.log(message.split(" ")); // ["JavaScript", "is", "awesome"]

// join(separator) - combines array elements into one string with given separator

const words = ["JavaScript", "is", "awesome"];
console.log(words.join("")); // "JavaScriptisawesome"
console.log(words.join(" ")); // "JavaScript is awesome"
console.log(words.join("-")); // "JavaScript-is-awesome"

// indexof (searchElement[,fromIndex]) - returns first index of searchElement or -1 if not found

const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log(clients.indexOf("Poly")); // 2
console.log(clients.indexOf("Monkong")); // -1

// includes(searchElement[, fromIndex]) - checks if array includes a certain value

const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log(clients.includes("Poly")); // true
console.log(clients.includes("Monkong")); // false

const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
const fruit = "cherry";
// check if the element exists
const hasFruit = redFruits.includes(fruit);

if (hasFruit) {
  console.log(`${fruit} is a red fruit!`);
}

// push() - adds one or more items to the end of an array and returns new length

const numbers = [];

numbers.push(1);
console.log(numbers); // [1]

numbers.push(2);
console.log(numbers); // [1, 2]

numbers.push(3);
console.log(numbers); // [1, 2, 3]

numbers.push(4);
console.log(numbers); // [1, 2, 3, 4]

numbers.push(5);
console.log(numbers); // [1, 2, 3, 4, 5]

// pop() - removes the last element from an array and returns it

const numbers = [1, 2, 3, 4, 5];

console.log(numbers.pop()); //  5
console.log(numbers); // [1, 2, 3, 4]

console.log(numbers.pop()); //  4
console.log(numbers); // [1, 2, 3]

console.log(numbers.pop()); //  3
console.log(numbers); // [1, 2]

console.log(numbers.pop()); //  2
console.log(numbers); // [1]

console.log(numbers.pop()); //  1
console.log(numbers); // []

// slice(startIndex, endIndex) - extracts a section of an array and returns a new array

const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log(clients.slice(1, 3)); // ["Ajax", "Poly"]

const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log(clients.slice()); // ["Mango", Ajax", "Poly", "Kiwi"]

const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log(clients.slice(-2)); // ["Poly", "Kiwi"]

// splice() - changes the contents of an array by removing or replacing existing elements and/or adding new elements

splice(position, num);

const scores = [1, 2, 3, 4, 5];

// Remove three array elements, starting with the first one (index 0)
const deletedScores = scores.splice(0, 3);

// The scores array now contains two elements
console.log(scores); // [4, 5]

// The deletedScores array contains three deleted elements
console.log(deletedScores); // [1, 2, 3]

// addition

splice(position, 0, new_element_1, new_element_2, ...)

const colors = ["red", "green", "blue"];

colors.splice(2, 0, "purple");
console.log(colors); // ["red", "green", "purple", "blue"]

const colors = ["red", "green", "blue"];

colors.splice(1, 0, "yellow", "pink");
console.log(colors); // ["red", "yellow", "pink", "green", "blue"]

// replacement

splice(position, num, new_element_1, new_element_2, ...)

// concat(array) - returns a new array containing all elements from the original array and the specified arrays

const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
const newClients = ["Monkong", "Singu"];

const allClientsWithOldFirst = oldClients.concat(newClients);
console.log(allClientsWithOldFirst); // ["Mango", "Ajax", "Poly", "Kiwi", "Monkong", "Singu"]

const allClientsWithNewFirst = newClients.concat(oldClients);
console.log(allClientsWithNewFirst); // ["Monkong", "Singu", "Mango", "Ajax", "Poly", "Kiwi"]

console.log(oldClients); // ["Mango", "Ajax", "Poly", "Kiwi"]
console.log(newClients); // ["Monkong", "Singu"]

