// DESTRUCTURING | PASSING ARGUMENTS

/* ...spread - makes it possible to spread a collection of elements (array, string or object) to the places where a set of single values is expected */


const temps = [14, -4, 25, 8, 11];

// The console will have an array,
console.log(temps);
// ❌ This will not work because you are passing the entire array
console.log(Math.max(temps)); // NaN

// The console will have a set of separate numbers
console.log(...temps);
// ✅ Spread the collection of elements as separate arguments
console.log(Math.max(...temps)); // 25

// creating a new array

const temps = [14, -4, 25, 8, 11];

// This is an exact but independent copy of the temps array
const copyOfTemps = [...temps];
console.log(copyOfTemps); // [14, -4, 25, 8, 11]

const lastWeekTemps = [14, 25, 11];
const currentWeekTemps = [23, 17, 18];
const allTemps = [...lastWeekTemps, ...currentWeekTemps];
console.log(allTemps); // [14, 25, 11, 23, 17, 18]

// creating a new object

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

// ...rest - makes it possible to collect a group of independent elements into a new collection

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

// collecting part of function arguments

function multiply(firstNumber, secondNumber, ...otherArgs) {
  console.log(firstNumber); // First argument value
  console.log(secondNumber); // Second argument value
  console.log(otherArgs); // Array of other arguments
}

multiply(1, 2);
multiply(1, 2, 3);
multiply(1, 2, 3, 4);

// OBJECT DESTRUCTURING

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

const accessType = book.isPublic ? "public" : "private";
const message = `Book ${book.title} by author ${book.author} with rating ${book.rating} is in ${accessType} access.`;

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

// destructuring
const { title, author, isPublic, rating, coverImage } = book;
console.log(coverImage); // undefined

const accessType = isPublic ? "public" : "private";
const message = `Book ${title} by author ${author} with rating ${rating} is in ${accessType} access.`;

// default values

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
};

// add a cover picture if it is not in the book object
const {
  title,
  coverImage = "https://via.placeholder.com/640/480",
  author,
} = book;

console.log(title); // The Last Kingdom
console.log(author); // Bernard Cornwell
console.log(coverImage); // https://via.placeholder.com/640/480

// changing variable name

const firstBook = {
  title: "The Last Kingdom",
  coverImage:
    "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
};

const {
  title: firstTitle,
  coverImage: firstCoverImage = "https://via.placeholder.com/640/480",
} = firstBook;

console.log(firstTitle); // The Last Kingdom
console.log(firstCoverImage); // https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg

const secondBook = {
  title: "The Dream of a Ridiculous Man",
};

const {
  title: secondTitle,
  coverImage: secondCoverImage = "https://via.placeholder.com/640/480",
} = secondBook;

console.log(secondTitle); // The Dream of a Ridiculous Man
console.log(secondCoverImage); // https://via.placeholder.com/640/480

// destructuring in loops

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
];

for (const book of books) {
  console.log(book.title);
  console.log(book.author);
  console.log(book.rating);
}

for (const book of books) {
  const { title, author, rating } = book;

  console.log(title);
  console.log(author);
  console.log(rating);
}

for (const { title, author, rating } of books) {
  console.log(title);
  console.log(author);
  console.log(rating);
}

// deep destructuring

const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const {
  name,
  tag,
  stats: { followers, views: userViews, likes: userLikes = 0 },
} = user;

console.log(name); // Jacques Gluke
console.log(tag); // jgluke
console.log(followers); // 5603
console.log(userViews); // 4827
console.log(userLikes); // 1308

// array destructuring

const rgb = [200, 255, 100];
const [red, green, blue] = rgb;

console.log(`R:${red},G:${green},B:${blue}`); // "R:200,G:255,B:100"

const rgb = [200, 255, 100];
let red, green, blue;

[red, green, blue] = rgb;

console.log(`R:${red},G:${green},B:${blue}`); // "R:200,G:255,B:100"

const rgb = [200, 100, 255];

const [red, green, blue, alfa = 0.3] = rgb;

console.log(`R:${red},G:${green},B:${blue},Alfa:${alfa}`); // "R:200,G:100,B:255,Alfa:0.3"

const rgb = [200, 255, 100];

const [red, ...colors] = rgb;

console.log(red); // "200"
console.log(colors); // [255, 100]

const rgb = [200, 100, 255];

const [, , blue] = rgb;

console.log(`Blue: ${blue}`); // "Blue: 255"

// parameter object

function doStuffWithBook(book) {
  // doing something with object properties
  console.log(book.title);
  console.log(book.numberOfPages);
  // and so on
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
  // and so on
}

function doStuffWithBook({
  title,
  numberOfPages,
  downloads,
  rating,
  isPublic,
}) {
  console.log(title);
  console.log(numberOfPages);
  // and so on
}