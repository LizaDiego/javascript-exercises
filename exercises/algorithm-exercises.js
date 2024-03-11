// Example 1 - Body mass index
// Write a function calcBMI(weight, height) that calcolates and returns the body mass index of a person. To do this, divide the weight in kilograms by square of a person's height in meters.

// The weight and height will be specially passed as strings. Non-integer numbers can be specified as 24.7 or 24.7, i.e. a comma can be used as a decimal separator.

// Body mass index must be rounded to one decimal place;

// Step 1: Start
// Step 2: Define function `calcBMI` with parameters `weight` and `height`
// Step 3: Replace comma with dot in `weight` and `height` strings and convert to number
// Step 4: Calculate BMI: weight (kg) / (height (m))^2
// Step 5: Round `bmi` to one decimal place and return
// Step 6: End

function calcBMI(weight = '', height = '') {
  const parsedWeight = Number(weight.replace(',', '.'));
  const parsedHeight = Number(height.replace(',', '.'));

  return (parsedWeight / parsedHeight ** 2).toFixed(1);
}

const bmi = calcBMI('88,3', '1.75');
console.log(bmi); // 28.8

// Example 2 - Smaller of numbers
// Write a function min(a,b) that returns the smaller of the numbers a and b.

// Step 1: Start
// Step 2: Define function `min` with parameters `a` and `b`
// Step 3: If `a` is less than `b`, return `a`
// Step 4: Otherwise, return `b`
// Note: This could also be achieved with a ternary operator or by using the Math.min function
// Step 5: End

// const min = function (a, b) {
//   if (a < b) return a;
//   else return b;

//   // return a < b ? a : b

//   // return Math.min(a, b)
// };

console.log(min(2, 5)); // 2
console.log(min(3, -1)); // -1
console.log(min(1, 1)); // 1

// Example 3 - Area of a rectangle
// Write a function getRectArea(dimensions) to calculate the area of a rectangle with sides, the values of which will be passed to the dimensions parameter as a string. Values are guaranteed to be separated by a space.

// Step 1: Start
// Step 2: Define function `getRectArea` with parameter `dimensions`
// Step 3: Split `dimensions` string by space into an array `data`
// Step 4: Multiply elements at index 0 and index 1 of `data` to calculate area
// Step 5: Return the calculated area
// Step 6: End

// function getRectArea(dimensions = '') {
//   const data = dimensions.split(' '); // ["8", "11"]
//   return data[0] * data[1];
// }

console.log(getRectArea('8 11'));

// Example 4 - Element logging
// Write a function logItems(items) that takes an array and uses a for loop that for each element of the array will print a message to the console in the format <item number> - <item value>. The numbering of elements shoold start with 1.

// For example, for the first element of the array ['Mango', 'Poly', 'Ajax'] with index 0 will print 1 - Mango and for index 2 will print 3 - Ajax.

// Step 1: Start
// Step 2: Define function `logItems` with parameter `items`
// Step 3: Initialize a for loop that starts from index 0 to the length of `items` array
// For each iteration, print the item number (index + 1) and item value in the format "<index + 1> - <item value>"
// Step 4: End

const logItems = function (items = []) {
  for (let i = 0; i < items.length; i += 1) {
    console.log(`${i + 1}: ${items[i]}`);
  }
};

logItems(['Mango', 'Poly', 'Ajax']);
logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

// Example 5 - Contact logging
// Write a function printContactsInfo(names, phones) that prints to the console the name and the user's phone number. The names and phones parameters will be passed strings of names and phone numbers separated by commas. Sequence number of names and phone numbers in the rows indicate a match. Number of names and phones guaranteed to be the same.

// Step 1: Start
// Step 2: Define function `printContactsInfo` with parameters `names`, `phones`, and `ages`
// Step 3: Split the `names` string by commas into an array `namesArr`
// Step 4: Split the `phones` string by commas into an array `phonesArr`
// Step 5: Split the `ages` string by commas into an array `yearsArr`
// Step 6: Initialize a for loop that starts from index 0 to the length of `namesArr` array
// For each iteration, print the name, phone, and age of the user in the format "name: <name>; phone: <phone>; age: <age>"
// Step 7: End

// function printContactsInfo(...rest) {
//   const namesArr = rest[0].split(',');
//   const phonesArr = rest[1].split(',');
//   const yearsArr = rest[2].split(',');

//   for (let i = 0; i < namesArr.length; i++) {
//     console.log(
//       `name: ${namesArr[i]}; phone: ${phonesArr[i]}; age: ${yearsArr[i]}`
//     );
//   }
// }

printContactsInfo(
  'Jacob,William,Solomon,Artemis',
  '89001234567,89001112233,890055566377,890055566300',
  '28,21,18,31'
);

// Example 6 - Finding the largest element
// Write a function findLargestNumber(numbers) that looks for the largest number in array.

function findLargestNumber(numbers) {
  return Math.max(...numbers);
}

console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83

// Example 7 - Average value
// Write a calAverage() function that takes an arbitrary number of arguments and returns their average. All arguments will be only numbers.

function calAverage(...args) {
  let sum = 0;

  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }

  return sum / args.length;
}

console.log(calAverage(1, 2, 3, 4)); // 2.5
console.log(calAverage(14, 8, 2)); // 8
console.log(calAverage(27, 43, 2, 8, 36)); // 23.2

// Example 8 - Time Formatting
// Write a function formatTime(minutes) that will translate the value of minutes (number of minutes) to a string in hour and minute format HH:MM.

// Step 1: Start
// Step 2: Define function `formatTime` with parameter `minutes`
// Step 3: Calculate hours by dividing `minutes` by 60 and rounding down to the nearest whole number
// Step 4: Calculate remaining minutes using the modulus operator with 60
// Step 5: Convert `hours` to string and pad with leading zeros to ensure two digits
// Step 6: Convert `minutes` (remainder) to string and pad with leading zeros to ensure two digits
// Step 7: Concatenate `hours` and `minutes` with a colon (:) separator to form HH:MM format
// Step 8: Return the formatted time string
// Step 9: End


const hours = Math.floor(totalMinutes / 60);
const minutes = totalMinutes % 60;
console.log(hours);
console.log(minutes);

const doubleDigitHours = String(hours).padStart(2, 0);
const doubleDigitMinutes = String(minutes).padStart(2, 0);
console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);

// function formatTime(minutes) {
//   const hours = Math.floor(minutes / 60)
//     .toString()
//     .padStart(2, 0);
//   const min = (minutes % 60).toString().padStart(2, 0);

//   return `${hours}:${min}`;
// }

console.log(formatTime(70)); // "01:10"
console.log(formatTime(450)); // "07:30"
console.log(formatTime(1441)); // "24:01"

// Example 9 - Write functions to work with the courses collection of training courses:

// addCourse(name) - adds a course to the end of the collection
// removeCourse(name) - removes a course from the collection
// updateCourse(oldName, newName) - changes the name to a new one
// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

addCourse('Express');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
addCourse('CSS'); // ' You already have this course'

removeCourse('React');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
removeCourse('Vue'); // 'Course with this name was not found'

updateCourse('Express', 'NestJS');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']

const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

function addCourse(newCourse) {
  if (courses.includes(newCourse)) {
    console.log('You already have this course');
    return;
  }

  courses.push(newCourse);
}

function replaceCourse(name, newName = noll) {
  const courseIndex = courses.indexOf(name);

  if (courseIndex === -1) {
    console.log('Course with this name was not found');
    return;
  }

  courses.splice(courseIndex, 1);
}

function updateCourse(name, newName) {
  const courseIndex = courses.indexOf(name);

  if (courseIndex === -1) {
    console.log('Course with this name was not found');
    return;
  }

  courses[courseIndex] = newName;
}

addCourse('Express');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
addCourse('CSS'); // 'You already have this course'

removeCourse('React');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
removeCourse('Vue'); // 'Course with this name was not found'

updateCourse('Express', 'NestJS');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']

