// ITERATING ARRAYS

// pure function - does not change the values of the arguments

const pureMultiply = (array, value) => {
  const newArray = [];

  array.forEach(element => {
    newArray.push(element * value);
  });

  return newArray;
};

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = pureMultiply(numbers, 2);

// There is no mutation in the original data
console.log(numbers); // [1, 2, 3, 4, 5]
// The function returns a new array with modified data
console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// side effect function

const dirtyMultiply = (array, value) => {
  for (let i = 0; i < array.length; i += 1) {
    array[i] = array[i] * value;
  }
};

const numbers = [1, 2, 3, 4, 5];
dirtyMultiply(numbers, 2);
// The original data - the numbers array - underwent mutation
console.log(numbers); // [2, 4, 6, 8, 10]

// array iteration

array.method(callback[(currentValue, index, array)]);

array.method((item, idx, arr) => {
  // logic that will be used in each iteration
});

array.method((item) => {
  // logic that will be used in each iteration
});

// map() method

array.map((element, index, array) => {
  // Callback body
});

const planets = ["Earth", "Mars", "Venus", "Jupiter"];

const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
console.log(planetsInUpperCase); // ['EARTH', 'MARS', 'VENUS', 'JUPITER']

const planetsInLowerCase = planets.map(planet => planet.toLowerCase());
console.log(planetsInLowerCase); // ['earth', 'mars', 'venus', 'jupiter']

// The original array has not changed
console.log(planets); // ['Earth', 'Mars', 'Venus', 'Jupiter']

// array of objects

const students = [
  { name: "Mango", score: 83 },
  { name: "Poly", score: 59 },
  { name: "Ajax", score: 37 },
  { name: "Kiwi", score: 94 },
  { name: "Houston", score: 64 },
];

const names = students.map(student => student.name);
console.log(names); // ['Mango', 'Poly', 'Ajax', 'Kiwi', 'Houston']

// flatMap(callbackfn[, thisArg])

array.flatMap((element, index, array) => {
  // Callback body
});

const students = [
  { name: "Mango", courses: ["mathematics", "physics"] },
  { name: "Poly", courses: ["informatics", "mathematics"] },
  { name: "Kiwi", courses: ["physics", "biology"] },
];

students.map(student => student.courses);
// [['mathematics', 'physics'], ['informatics', 'mathematics'], ['physics', 'biology']]

students.flatMap(student => student.courses);
// ['mathematics', 'physics', 'informatics', 'mathematics', 'physics', 'biology']

// filter(callbackfn[, thisArg])

array.filter((element, index, array) => {
  // Callback body
});

// filter(callbackfn) is a shorthand for filter

array.filter((element, index, array) => {
  // Callback body
});

const values = [51, -3, 27, 21, -68, 42, -37];

const positiveValues = values.filter(value => value >= 0);
console.log(positiveValues); // [51, 27, 21, 42]

const negativeValues = values.filter(value => value < 0);
console.log(negativeValues); // [-3, -68, -37]

const bigValues = values.filter(value => value > 1000);
console.log(bigValues); // []

// The original array has not changed
console.log(values); // [51, -3, 27, 21, -68, 42, -37]

// filtering unique elements

const uniqueCourses = allCourses.filter(
  (course, index, array) => array.indexOf(course) === index
);

//  Array of all courses
// ['mathematics', 'physics', 'informatics', 'mathematics', 'physics', 'biology']

const students = [
  { name: "Mango", courses: ["mathematics", "physics"] },
  { name: "Poly", courses: ["informatics", "mathematics"] },
  { name: "Kiwi", courses: ["physics", "biology"] },
];

const allCourses = students.flatMap(student => student.courses);
// ['mathematics', 'physics', 'informatics', 'mathematics', 'physics', 'biology']

// array of objects

const LOW_SCORE = 50;
const HIGH_SCORE = 80;
const students = [
  { name: "Mango", score: 83 },
  { name: "Poly", score: 59 },
  { name: "Ajax", score: 37 },
  { name: "Kiwi", score: 94 },
  { name: "Houston", score: 64 },
];

const best = students.filter(student => student.score >= HIGH_SCORE);
console.log(best); // Array of objects named Mango and Kiwi

const worst = students.filter(student => student.score < LOW_SCORE);
console.log(worst); // Array with one Ajax object

// In a callback function, it is convenient to destructure the properties of an object
const average = students.filter(
  ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
);
console.log(average); // Array of objects named Poly and Houston

// find(callback[, thisArg]) - returns value of the first element in the array that satisfies the provided testing

array.find((element, index, array) => {
  // Callback body
});

const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

colorPickerOptions.find(option => option.label === "blue"); // { label: 'blue', color: '#2196F3' }
colorPickerOptions.find(option => option.label === "pink"); // { label: 'pink', color: '#E91E63' }
colorPickerOptions.find(option => option.label === "white"); // undefined

// findIndex()

array.findIndex((element, index, array) => {
  // Callback body
});

const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

colorPickerOptions.findIndex(option => option.label === "blue"); // 2
colorPickerOptions.findIndex(option => option.label === "pink"); // 3
colorPickerOptions.findIndex(option => option.label === "white"); // -1

// every( )

array.every((element, index, array) => {
  // Callback body
});

// Are all elements greater than or equal to zero? - yes
[1, 2, 3, 4, 5].every(value => value >= 0); // true

// Are all elements greater than or equal to zero? - no
[1, 2, 3, -10, 4, 5].every(value => value >= 0); // false

// some()

array.some((element, index, array) => {
  // Callback body
});

// Is there at least one element greater than or equal to zero? - yes
[1, 2, 3, 4, 5].some(value => value >= 0); // true

// Is there at least one element greater than or equal to zero? - yes
[-7, -20, 3, -10, -14].some(value => value >= 0); // true

// Is there at least one element less than zero? - no
[1, 2, 3, 4, 5].some(value => value < 0); // false

// Is there at least one element less than zero? - yes
[1, 2, 3, -10, 4, 5].some(value => value < 0); // true

// array of objects

const fruits = [
  { name: "apples", amount: 100 },
  { name: "bananas", amount: 0 },
  { name: "grapes", amount: 50 },
];

// every returns true only if all fruits are greater than 0
const allAvailable = fruits.every(fruit => fruit.amount > 0); // false

// some returns true if at least one fruit is greater than 0
const anyAvailable = fruits.some(fruits => fruits.amount > 0); // true

// reduce(callback[, initialValue])

array.reduce((previousValue, element, index, array) => {
  // Callback body
}, initialValue);

const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
  return previousValue + number;
}, 0);

console.log(total); // 32

/* First, the reduce() method creates an internal accumulator variable and
assigns it the value of the initialValue parameter or the first element
of the array to iterate over if initialValue is not set.
previousValue = 0

Next, a callback is called for each array element. The current value 
of the previousValue parameter is what the callback function returned in the last iteration.
Iteration 1 -> previousValue = 0 -> number = 2 -> return 0 + 2 -> return 2
Iteration 2 -> previousValue = 2 -> number = 7 -> return 2 + 7 -> return 9
Iteration 3 -> previousValue = 9 -> number = 3 -> return 9 + 3 -> return 12
Iteration 4 -> previousValue = 12 -> number = 14 -> return 12 + 14 -> return 26
Iteration 5 -> previousValue = 26 -> number = 6 -> return 26 + 6 -> return 32

After iterating over the entire array, reduce() returns the accumulator value. Result: 32 */

// array of objects

const students = [
  { name: "Mango", score: 83 },
  { name: "Poly", score: 59 },
  { name: "Ajax", score: 37 },
  { name: "Kiwi", score: 94 },
  { name: "Houston", score: 64 },
];

// The accumulator name can be arbitrary, it is just a function parameter
const totalScore = students.reduce((total, student) => {
  return total + student.score;
}, 0);

const averageScore = totalScore / students.length;

// advance reduce(callback, initialValue?)

const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

// Iterate over all collection elements and add values of the likes property
// to the accumulator with 0 as initial value.
const likes = tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);

console.log(likes); // 32

// Counting likes is probably not a single operation, so let's write a function
// to calculate the likes from a collection
const countLikes = tweets => {
  return tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
};

console.log(countLikes(tweets)); // 32

const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

// Iterate over all collection elements and add values of the tags property
// to the accumulator with an empty array [] as initial value.
// In each iteration, push all the tweet.tags elements into the accumulator and return it.
const tags = tweets.reduce((allTags, tweet) => {
  allTags.push(...tweet.tags);

  return allTags;
}, []);

console.log(tags);

// Collecting tags is probably not a single operation, so let's write a function
// to collect tags from the collection
const getTags = (tweets) =>
  tweets.reduce((allTags, tweet) => {
    allTags.push(...tweet.tags);

    return allTags;
  }, []);

console.log(getTags(tweets));
const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

const getTags = (tweets) =>
  tweets.reduce((allTags, tweet) => {
    allTags.push(...tweet.tags);

    return allTags;
  }, []);

const tags = getTags(tweets);

// Write the callback separately and pass a reference to it in reduce.
// This is standard practice when callback functions are big enough.

// If the acc accumulator object does not have own property with the tag key,
// create it and assign it 0.
// Otherwise, increase the value by 1.
const getTagStats = (acc, tag) => {
  if (!acc.hasOwnProperty(tag)) {
    acc[tag] = 0;
  }

  acc[tag] += 1;

  return acc;
};

// The initial accumulator value is an empty object {}
const countTags = (tags) => tags.reduce(getTagStats, {});

const tagCount = countTags(tags);
console.log(tagCount);

// sort(compareFunction) method can be used on arrays to sort them based on some criteria

const scores = [61, 19, 74, 35, 92, 56];
scores.sort();
console.log(scores); // [19, 35, 56, 61, 74, 92]

const scores = [27, 2, 41, 4, 7, 3, 75];
scores.sort();
console.log(scores); // [2, 27, 3, 4, 41, 7, 75]

const students = ["Vika", "Andrey", "Oleg", "Julia", "Boris", "Katya"];
students.sort();
console.log(students); // ['Andrey', 'Boris', 'Julia', 'Katya', 'Oleg', 'Vika'];

const letters = ["b", "B", "a", "A", "c", "C"];
letters.sort();
console.log(letters); // ['A', 'B', 'C', 'a', 'b', 'c']

const scores = [61, 19, 74, 35, 92, 56];
const ascendingScores = [...scores].sort();

console.log(scores); // [61, 19, 74, 35, 92, 56]
console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

// custom sort order for numbers

array.sort((a, b) => {
  // Callback body
});

const scores = [61, 19, 74, 35, 92, 56];
const ascendingScores = [...scores].sort((a, b) => a - b);
console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

const scores = [61, 19, 74, 35, 92, 56];
const descendingScores = [...scores].sort((a, b) => b - a);
console.log(descendingScores); // [92, 74, 61, 56, 35, 19]

// custom sort order for strings

firstString.localeCompare(secondString);

"a".localeCompare("b"); // -1
"b".localeCompare("a"); // 1
"a".localeCompare("a"); // 0
"b".localeCompare("b"); // 0

const students = ["Vika", "Andrey", "Oleg", "Julia", "Boris", "Katya"];

const inAlphabetOrder = [...students].sort((a, b) => a.localeCompare(b));
console.log(inAlphabetOrder); // ['Andrey', 'Boris', 'Julia', 'Katya', 'Oleg', 'Vika']

const inReversedOrder = [...students].sort((a, b) => b.localeCompare(a));
console.log(inReversedOrder); // ['Vika', 'Oleg', 'Katya', 'Julia', 'Boris', 'Andrey']

// sorting objects

const students = [
  { name: "Mango", score: 83 },
  { name: "Poly", score: 59 },
  { name: "Ajax", score: 37 },
  { name: "Kiwi", score: 94 },
];

const inAscendingScoreOrder = students.sort(
  (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
);

const inDescendingScoreOrder = students.sort(
  (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
);

const inAlphabeticalOrder = students.sort((firstStudent, secondStudent) =>
  firstStudent.name.localeCompare(secondStudent.name)
);

// method chaining

const students = [
  { name: "Mango", score: 83, courses: ["mathematics", "physics"] },
  { name: "Poly", score: 59, courses: ["informatics", "mathematics"] },
  { name: "Ajax", score: 37, courses: ["physics", "biology"] },
  { name: "Kiwi", score: 94, courses: ["literature", "informatics"] },
];

const sortedByAscendingScore = [...students].sort((a, b) => a.score - b.score);
const names = sortedByAscendingScore.map(student => student.name);

console.log(names); // ['Ajax', 'Poly', 'Mango', 'Kiwi']

const names = [...students]
  .sort((a, b) => a.score - b.score)
  .map(student => student.name);

console.log(names); // ['Ajax', 'Poly', 'Mango', 'Kiwi']

/* Make a copy of the original array before sorting.
Call the sort() method on the copy.
Apply the map() method to the result of the sort() method.
The variable names is assigned the result of the map() method. */

const uniqueSortedCourses = students
  .flatMap(student => student.courses)
  .filter((course, index, array) => array.indexOf(course) === index)
  .sort((a, b) => a.localeCompare(b));

console.log(uniqueSortedCourses); // ['biology', 'informatics', 'literature', 'mathematics', 'physics']

/* Call flatMap() on the original array and create a flattened array of all courses.
Apply the filter() method to the result of the flatMap() method in order to filter unique elements.
Call sort() on the result of the filter() method.
The variable uniqueSortedCourses is assigned the result of the sort() method. */


