// VARIABLES AND TYPES

// ALGORITHM - a process or set of rules to be followed in calculations or other problem-solving operations, especially by a computer.

// 1. Go find the variable with the identifier b and ask its current value.
// 2. Substitute b with the value of the variable b (10).
// 3. Perform the operation of multiplying 10 by 2.
// 4. Write the result of the right-hand side of the expression to the variable a.

// STATEMENT - a related set of words and symbols from the syntax of a language that combines to express a common idea.

a = b * 2;

// EXPRESSION - a reference to a variable or value, or to a set of variables and values in combination with operators.

// PROPERTY - descriptive characteristic  of an object or class, like color, size etc.

entity.property_name; // accessing property
entity[property_name]; // another way to access property

// METHOD - an action call

entity.method_name(); 

// VARIABLE - identifier

// VARIABLE DECLARATION

const //  constant declaration, once assigned it cannot be reassigned
let   // block scoped local variable declaration
var   // function scoped local variable declaration

// undefined - a variable that has been declared with the keyword let, but has not been initialized with a value.
// null - used in situations where emptiness must be explicitly indicated.

let username;
console.log(username);  // outputs: undefined

// PRIMITIVE TYPES - variables that can store different types of values.

// numbers - integers and floating-point numbers

const age = 20;
const points = 15.8;

// strings - a sequence of zero or more characters

const username = "Mango";
const description = "JavaSript for beginners";

// boolean - logical data type

// true - yes, right, true, 1
// false - no, wrong, false, 0

// typeof

let username;
console.log(typeof username); // "undefined"

let inputValue = null;
console.log(typeof inputValue); // "object"

const quantity = 17;
console.log(typeof quantity); // "number"

const message = "JavaScript is awesome!";
console.log(typeof message); // "string"

const isSidebarOpen = false;
console.log(typeof isSidebarOpen); // "boolean"

// DATA OUPUT

console.log() // descriptive string
alert() //  pop up window with the specified message

const message = "JavaScript is awesome!";
console.log(message); // JavaScript is awesome!

const username = "Mango";
console.log("Username is ", username); // Username is Mango

const message = "JavaScript is awesome!";
alert(message);

// confirm() displays a modal window with a message, and two buttons, Ok and Cancel

// ask the client to confirm hotel reservation
// and save the confirm result to a variable

const isComing = confirm("Please confirm hotel reservation");
console.log(isComing);

// prompt() displays a modal window with an input field and two buttons, Ok and Cancel

// Ask for the name of the hotel where the client would like to stay
// and save the prompt result to a variable.

const hotelName = prompt("Please enter desired hotel name");
console.log(hotelName);

const value = prompt("Please enter a number!");
console.log(typeof value); // "string"
console.log(value); // "5"

// MATH OPERATORS

const x = 10;
const y = 5;

// Addition
console.log(x + y); // 15

// Subtraction
console.log(x - y); // 5

// Multiplication
console.log(x * y); // 50

// Division
console.log(x / y); // 2

// Remainder of a division
console.log(x % y); // 0

// Addition with replacement (also available for all other operators)
let value = 5;

// Similar to value = value + 10;
value += 10;
console.log(value); // 15

// COMPARISON OPERATORS

// a > b and a < b - greater than/less than
// a >= b or a <= b - greater/less than or equal
// a == b - equal
// a != b - not equal
// a === b - strict equality
// a !== b - strict inequality

const x = 5;
const y = 10;
const z = 5;

console.log("x > y:", x > y); // false
console.log("x < y:", x < y); // true
console.log("x < z:", x < z); // false
console.log("x <= z:", x <= z); // true
console.log("x === y:", x === y); // false
console.log("x === z:", x === z); // true
console.log("x !== y:", x !== y); // true
console.log("x !== z:", x !== z); // false

// EQUALITY OPERATORS

console.log(5 === "5"); // false
console.log(5 === 5); // true
console.log(5 !== "5"); // true
console.log(5 !== 5); // false
console.log(1 === true); // false
console.log(1 !== true); // true

// conversion to numbers

const valueA = "5";
console.log(Number(valueA)); // 5
console.log(typeof Number(valueA)); // "number"

const valueB = "random string";
console.log(Number(valueB)); // NaN
console.log(typeof Number(valueB)); // "number"

// Number.parseInt() method parses an integer from the string

console.log(Number.parseInt("5px")); // 5
console.log(Number.parseInt("12qwe74")); // 12
console.log(Number.parseInt("12.46qwe79")); // 12
console.log(Number.parseInt("qweqwe")); // NaN

// Number.parseFloat() method parses a fractional number from the string

console.log(Number.parseFloat("5px")); // 5
console.log(Number.parseFloat("12qwe74")); // 12
console.log(Number.parseFloat("12.46qwe79")); // 12.46
console.log(Number.parseFloat("qweqwe")); // NaN

// To check if a value is a number, you can use the Number.isNaN(val) method

const validNumber = Number("51"); // 51
console.log(Number.isNaN(validNumber)); // false

const invalidNumber = Number("qweqwe"); // NaN
console.log(Number.isNaN(invalidNumber)); // true

// Adding floating-point numbers

console.log(0.1 + 0.2 === 0.3); // false
console.log(0.1 + 0.2); // 0.30000000000000004

console.log(0.17 + 0.24); // 0.41000000000000003
console.log((0.17 * 100 + 0.24 * 100) / 100); // 0.41

// Another way is to add and round the result to a certain decimal place using the toFixed() method

console.log(0.17 + 0.24); // 0.41000000000000003
console.log((0.17 + 0.24).toFixed(2)); // 0.41

// MATH CLASS

// Math.floor(num) returns the smallest integer
// less than or equal to the specified one
console.log(Math.floor(1.7)); // 1

// Math.ceil(num) returns the largest integer
// greater than or equal to the specified number
console.log(Math.ceil(1.2)); // 2

// Math.round(num) returns the value of a number
// rounded to the nearest integer
console.log(Math.round(1.2)); // 1
console.log(Math.round(1.5)); // 2

// Math.max(num1, num2, ...) returns the largest number from a set
console.log(Math.max(20, 10, 50, 40)); // 50

// Math.min(num1, num2, ...) returns the smallest number from a set
console.log(Math.min(20, 10, 50, 40)); // 10

// Math.pow(base, exponent) - exponentiation
console.log(Math.pow(2, 4)); // 16

// Math.random() returns a pseudo-random number in the range (0, 1)
console.log(Math.random()); // random number between 0 and 1
console.log(Math.random() * (10 - 1) + 1); // pseudo-random number from 1 to 10

// STRINGS - an indexed set of zero or more characters, enclosed in single or double quotes.

const username = "Mango";

// concatenation - string addition

const message = "Mango " + "is" + " happy";
console.log(message); // Mango is happy

console.log(1 + "2"); // "12"
console.log(1 + "2" + 4); // "124"
console.log(1 + 2 + "4"); // "34"

// template strings - enclosed in backquotes instead of double or single quotes, and they may contain placeholders with the dollar sign and curly braces - ${expression}

// using variables, you need to make a string with substituted values

const guestName = "Mango";
const roomNumber = 207;
const greeting =
  "Welcome " + guestName + ", your room number is " + roomNumber + "!";
console.log(greeting); // "Welcome Mango, your room number is 207!"

const guestName = "Mango";
const roomNumber = 207;
const greeting = `Welcome ${guestName}, your room number is ${roomNumber}!`;
console.log(greeting); // "Welcome Mango, your room number is 207!"

// string properties and methods

// .length
const message = "Welcome to Bahamas!";
console.log(message.length); // 19
console.log("There is nothing impossible to him who will try".length); // 47

// toLowerCase() and toUpperCase()
const message = "Welcome to Bahamas!";
console.log(message.toLowerCase()); // "welcome to bahamas!"
console.log(message.toUpperCase()); // "WELCOME TO BAHAMAS!"
console.log(message); // "Welcome to Bahamas!"

console.log("saMsUng" === "samsung"); // false
console.log("saMsUng" === "SAMSUNG"); // false

const BRAND_NAME = "SAMSUNG";
const userInput = "saMsUng";
const normalizedToUpperCaseInput = userInput.toUpperCase();

console.log(userInput); // 'saMsUng'
console.log(userInput === BRAND_NAME); // false
console.log(normalizedToUpperCaseInput); // 'SAMSUNG'
console.log(normalizedToUpperCaseInput === BRAND_NAME); // true

// indexof()
const message = "Welcome to Bahamas!";
console.log(message.indexOf("to")); // 8
console.log(message.indexOf("hello")); // -1

// includes()
const productName = "Maintenance droid";

console.log(productName.includes("n")); // true
console.log(productName.includes("N")); // false
console.log(productName.includes("droid")); // true
console.log(productName.includes("Droid")); // false
console.log(productName.includes("Maintenance")); // true
console.log(productName.includes("maintenance")); // false

// endsWith()
const jsFileName = "script.js";
console.log(jsFileName.endsWith(".js")); // true

const cssFileName = "styles.css";
console.log(cssFileName.endsWith(".js")); // false

// replace() and replaceAll()

const jsFileName = "script.js";
const minifiedJsFileName = jsFileName.replace(".js", ".min.js");
console.log(minifiedJsFileName); // "script.min.js"

const cssFileNames = "styles.css, about.css, portfolio.css";
const minifiedCssFileNames = cssFileNames.replaceAll(".css", ".min.css");
console.log(minifiedCssFileNames); // "styles.min.css, about.min.css, portfolio.min.css"

// LOGICAL OPERATORS

// AND expression && expression
const age = 20;
console.log(age > 10 && age < 30); // true && true -> true

const age = 50;
console.log(age > 10 && age < 30); // true && false -> false
console.log(age > 80 && age < 120); // false && true -> false

console.log(1 && 5); // true && true -> 5
console.log(5 && 1); // true && true -> 1
console.log(0 && 2); // false && true -> 0
console.log(2 && 0); // true && false -> 0
console.log("" && "Mango"); // false && true -> ""
console.log("Mango" && ""); // true && false -> ""
console.log("Mango" && "Poly"); // true && true -> "Poly"
console.log("Poly" && "Mango"); // true && true -> "Mango"

// OR expression || expression

const age = 5;
console.log(age < 10 || age > 30); // true || false -> true

const age = 40;
console.log(age < 10 || age > 30); // false || true -> true

const age = 20;
console.log(age < 10 || age > 30); // false || false -> false

onsole.log(true || false); // true
console.log(false || true); // true
console.log(true || true); // true

console.log(3 || false); // 3
console.log(false || 3); // 3
console.log(3 || true); // 3
console.log(true || 3); // true

// NOT !expression

console.log(!true); // false
console.log(!false); // true
console.log(!3); // !3 -> !true -> false
console.log(!"Mango"); // !"Mango" -> !true -> false
console.log(!0); // !0 -> !false -> true
console.log(!""); // !"" -> !false -> true

const isOnline = true;
const isNotOnline = !isOnline; // !isOnline -> !true -> false



