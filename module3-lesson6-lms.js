// MODULE 3 LESSON 06 | spread | passing arguments

const temps = [14, -4, 25, 8, 11];

// The console will have an array,
console.log(temps);
// ❌ This will not work because you are passing the entire array
console.log(Math.max(temps)); // NaN

// The console will have a set of separate numbers
console.log(...temps);
// ✅ Spread the collection of elements as separate arguments
console.log(Math.max(...temps)); // 25

// MODULE 3 LESSON 06 | spread | creating a new array

const temps = [14, -4, 25, 8, 11];

// This is an exact but independent copy of the temps array
const copyOfTemps = [...temps];
console.log(copyOfTemps); // [14, -4, 25, 8, 11]

// MODULE 3 LESSON 06 | spread | creating a new object

const first = { propA: 5, propB: 10 };
const second = { propC: 15 };
const third = { ...first, ...second };
console.log(third); // { propA: 5, propB: 10, propC: 15 }

const first = { propA: 5, propB: 10, propC: 50 };
const second = { propC: 15, propD: 20 };

const third = { ...first, ...second };
console.log(third); // { propA: 5, propB: 10, propC: 15, propD: 20 }

const fourth = { ...second, ...first };
console.log(fourth); // { propA: 5, propB: 10, propC: 50, propD: 20 }

const first = { propA: 5, propB: 10, propC: 50 };
const second = { propC: 15 };

const third = { propB: 20, ...first, ...second };
console.log(third); // { propA: 5, propB: 10, propC: 15 }

const fourth = { ...first, ...second, propB: 20 };
console.log(fourth); // { propA: 5, propB: 20, propC: 15 }

const fifth = { ...first, propB: 20, ...second };
console.log(fifth); // { propA: 5, propB: 20, propC: 15 }

// MODULE 3 LESSON 06 | rest | collecting all function arguments

// How to declare function parameters so
// that any number of arguments can be passed?
function multiply() {
  // ...
}

multiply(1, 2);
multiply(1, 2, 3);
multiply(1, 2, 3, 4);

function multiply(...args) {
  console.log(args); // array of all arguments
}

multiply(1, 2);
multiply(1, 2, 3);
multiply(1, 2, 3, 4);

// MODULE 3 LESSON 06 | rest: collecting part of function arguments


function doStuffWithBook(title, numberOfPages, downloads, rating, public) {
  // Doing something with parameters
  console.log(title);
  console.log(numberOfPages);
  // And so on
}

// ❌ What is 736? What is 10283? What is true?
doStuffWithBook("The Last Kingdom", 736, 10283, 8.38, true);

function doStuffWithBook(book) {
  // Doing something with object properties
  console.log(book.title);
  console.log(book.numberOfPages);
  // And so on
}

// ✅ Everything is clear
doStuffWithBook({
  title: "The Last Kingdom",
  numberOfPages: 736,
  downloads: 10283,
  rating: 8.38,
  isPublic: true,
});

function doStuffWithBook(book) {
  const { title, numberOfPages, downloads, rating, isPublic } = book;
  console.log(title);
  console.log(numberOfPages);
  // And so on
}

