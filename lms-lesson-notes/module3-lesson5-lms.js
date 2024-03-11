// OBJECTS - serves to describe and group the characteristics of an entity

// object creation

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

// nested properties

const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  location: {
    country: "Jamaica",
    city: "Ocho Rios",
  },
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

// dot notation

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

const bookTitle = book.title;
console.log(bookTitle); // 'The Last Kingdom'

const bookGenres = book.genres;
console.log(bookGenres); // ['historical prose', 'adventure']

const bookPrice = book.price;
console.log(bookPrice); // undefined

// nested properties

const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  location: {
    country: "Jamaica",
    city: "Ocho Rios",
  },
  hobbies: ["swimming", "music", "sci-fi"],
};

const location = user.location;
console.log(location); // object location

const country = user.location.country;
console.log(country); // 'Jamaica'

const hobbies = user.hobbies;
console.log(hobbies); // ['swimming', 'music', 'sci-fi']

const firstHobby = user.hobbies[0];
console.log(firstHobby); // 'swimming'

const numberOfHobbies = user.hobbies.length;
console.log(numberOfHobbies); // 3

// square brackets

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

const bookTitle = book["title"];
console.log(bookTitle); // 'The Last Kingdom'

const bookGenres = book["genres"];
console.log(bookGenres); // ['historical prose', 'adventure']

const propKey = "author";
const bookAuthor = book[propKey];
console.log(bookAuthor); // 'Bernard Cornwell'

// property value change

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

book.rating = 9;
book.isPublic = false;
book.genres.push("drama");

console.log(book.rating); // 9
console.log(book.isPublic); // false
console.log(book.genres); // ['historical prose', 'adventure', 'drama']

// adding properties

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

book.pageCount = 836;
book.originalLanguage = "en";
book.translations = ["ua", "ru"];

console.log(book.pageCount); // 836
console.log(book.originalLanguage); // 'en'
console.log(book.translations); // ['ua', 'ru']

// shorthand

const name = "Henry Cibola";
const age = 25;

const user = {
  name,
  age,
};

console.log(user.name); // "Henry Cibola"
console.log(user.age); // 25

// computed

const propName = "name";
const user = {
  age: 25,
  // The name of this property will be taken from the value of the variable propNam
  [propName]: "Henry Cibola",
};

console.log(user.name); // 'Henry Cibola'

// OBJECT METHOD - the property value is a function

// ✅ Entities grouped logically and syntactically
const bookShelf = {
  books: ["The Last Kingdom", "Dream Guardian"],
  // This is an object method
  getBooks() {
    console.log("This method will return all books, the books property");
  },
  // This is an object method
  addBook(bookName) {
    console.log("This method will add a new book to the books property");
  },
};

// Method calls
bookShelf.getBooks();
bookShelf.addBook("New book");

// this | accessing object properties inside methods

const bookShelf = {
  books: ["The Last Kingdom"],
  getBooks() {
    console.log(this);
  },
};

// Dot is preceded by the bookShelf object,
// so when the method is called, this will store a reference to it.
bookShelf.getBooks(); // {books: ['The Last Kingdom'], getBooks: f}

const bookShelf = {
  books: ["The Last Kingdom"],
  getBooks() {
    return this.books;
  },
  addBook(bookName) {
    this.books.push(bookName);
  },
  removeBook(bookName) {
    const bookIndex = this.books.indexOf(bookName);
    this.books.splice(bookIndex, 1);
  },
};

console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
bookShelf.addBook("The Mist");
bookShelf.addBook("Dream Guardian");
console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'The Mist', 'Dream Guardian']
bookShelf.removeBook("The Mist");
console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'Dream Guardian']

// ITERATION - to iterate over objects, a special for...in loop should be used, which iterates over the keys of object

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};

for (const key in book) {
  // Key
  console.log(key);
  // The property value with this key
  console.log(book[key]);
}

// hasOwnProperty() 

const animal = {
  legs: 4,
};
const dog = Object.create(animal);
dog.name = "Mango";

console.log(dog); // {name: 'Mango'}
console.log(dog.name); // 'Mango'
console.log(dog.legs); // 4

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};

for (const key in book) {
  // If this property is own, execute the if body
  if (book.hasOwnProperty(key)) {
    console.log(key);
    console.log(book[key]);
  }

  // If this is an inherited property, do nothing
}

// Object.keys()

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};
const keys = Object.keys(book);
console.log(keys); // ['title', 'author', 'genres', 'rating']

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};
const keys = Object.keys(book);

for (const key of keys) {
  // Key
  console.log(key);
  // Property value
  console.log(book[key]);
}

// Object.values()

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  rating: 8.38,
};
const keys = Object.keys(book);
console.log(keys); // ['title', 'author', 'rating']

const values = Object.values(book);
console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]

const goods = {
  apples: 6,
  grapes: 3,
  bread: 4,
  cheese: 7,
};

const values = Object.values(goods); // [6, 3, 4, 7]

let total = 0;

for (const value of values) {
  total += value;
}

console.log(total); // 20

// Object.entries();

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  rating: 8.38,
};
const keys = Object.keys(book);
console.log(keys); // ['title', 'author', 'rating']

const values = Object.values(book);
console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]

const entries = Object.entries(book);
console.log(entries);
// [["title", "The Last Kingdom"], ["author", "Bernard Cornwell"], ["rating", 8.38]]

// ARRAY OF OBJECTS - all objects in the array have absolutely the same set of properties, but with different values

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
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
];

for (const book of books) {
  // Book object
  console.log(book);
  // Title
  console.log(book.title);
  // Author
  console.log(book.author);
  // Rating
  console.log(book.rating);
}

const bookNames = [];

for (const book of books) {
  bookNames.push(book.title);
}

console.log(bookNames); // ["The Last Kingdom", "Beside Still Waters", "The Dream of a Ridiculous Man"]

let totalRating = 0;

for (const book of books) {
  totalRating += book.rating;
}

const averageRating = (totalRating / books.length).toFixed(1);
console.log(averageRating); // 8.2

