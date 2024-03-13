/* Example 1 | Basic operations with an array

1. Create an array genres with elements "Jazz" and "Blues".
2. Add "Rock and Roll" to the end.
3. Print the first element of the array to the console.
4. Print the last element of the array to the console. The code should work for an array random length.
5. Remove the first element and print it to the console.
6. Insert "Country" and "Reggae" at the beginning of the array. */

// 1. Create an array genres with elements "Jazz" and "Blues".
let genres = ["Jazz", "Blues"];

// 2. Add "Rock and Roll" to the end.
genres.push("Rock and Roll");

// 3. Print the first element of the array to the console.
console.log("First element:", genres[0]);

// 4. Print the last element of the array to the console.
console.log("Last element:", genres[genres.length - 1]);

// 5. Remove the first element and print it to the console.
let firstElement = genres.shift();
console.log("Removed first element:", firstElement);

// 6. Insert "Country" and "Reggae" at the beginning of the array.
genres.unshift("Country", "Reggae");

// Print the updated array
console.log("Updated array:", genres);

console.log(genres); //['Reggae', 'Country', 'Rock and Roll']

/* Example 2 | Arrays and strings

Write a function getRectArea(dimensions) to calculate the area of a rectangle with sides,
the values of which will be passed to the dimensions parameter as a string.
Values are guaranteed to be separated by a space.

Step 1: Start
Step 2: Define function `getRectArea` with parameter `dimensions`
Step 3: Split `dimensions` string by space into an array `data`
Step 4: Multiply elements at index 0 and index 1 of `data` to calculate area
Step 5: Return the calculated area
Step 6: End */

const values = '8 11';

function getRectArea(dimensions = '') {
  const data = dimensions.split(' '); ["8", "11"]
  return data[0] * data[1];
}

console.log(getRectArea('8 11'));

const values = "8 11"; // Input values as a string separated by space

// Split the string into an array of numbers
const sides = values.split(" ").map(Number);

// Calculate the area of the rectangle
const area = sides[0] * sides[1];

console.log("Area of the rectangle:", area);

/* Example 3 | Array iteration

Write a script to iterate over the fruits array with a for loop.
For each array element print a string in the format element_number: element_value to the console.
Element numbering must start from 1.

Step 1: Start
Step 2: Define function `logItems` with parameter `items`
Step 3: Initialize a for loop that starts from index 0 to the length of `items` array
For each iteration, print the item number (index + 1) and item value in the format "<index + 1> - <item value>"
Step 4: End */

const logItems = function (items = []) {
  for (let i = 0; i < items.length; i += 1) {
    console.log(`${i + 1}: ${items[i]}`);
  }
};

logItems(['Mango', 'Poly', 'Ajax']);
logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

const fruits = ["🍎", "🍇", "🍑", "🍌", "🍋"];

for (let i = 0; i < fruits.length; i++) {
  console.log(`element_${i + 1}: ${fruits[i]}`);
}

/* Example 4 | Arrays and loops

Write a script that prints the user's name and phone number to the console. 
The names and phones variables store strings of names and phone numbers, separated by commas.
The sequence number of names and phone numbers in the lines indicates a match.
The number of names and phone numbers is guaranteed to be the same.

*/

const names = "Jacob,William,Solomon,Artemis";
const phones = "89001234567,89001112233,890055566377,890055566300";

function printContactsInfo({ names, phones }) {
  const namesList = names.split(",");
  const phonesList = phones.split(",");

  for (let i = 0; i < namesList.length; i += 1) {
    console.log(namesList[i] + ":" + phonesList[i]);
  }
}

printContactsInfo({ names, phones });
// Jacob:89001234567
// William:89001112233
// Solomon:890055566377
// Artemis:890055566300

/* 
Example 5 | Arrays and strings

Write a script that prints to the console all the words of a string except the first and the last one.
The resulting string must not start or end whitespace character.The script should work for any line.

const string = 'Welcome to the future';
*/

const wordstring = "Welcome to the future";

function printWordsExceptFirstAndLast(str) {
  const words = str.trim().split(/\s+/); // Split the string into words
  const result = words.slice(1, -1).join(" "); // Remove the first and last word, then join the remaining words
  console.log(result);
}

printWordsExceptFirstAndLast(wordstring); // "to the"

/* 
Example 6 | Arrays and strings

Write a script that "unwraps" a string (reverse letter order) and prints it to the console.

const string = 'Welcome to the future';
//erutuf eht ot emocleW

*/

let string = "Welcome to the future";
string = string.split("").reverse().join("");
console.log(string);

let word = "racecar";

if (word) {
	console.log("word is a palindrome");
} else {
	console.log("Word is not a palindrome");
}

/* 
Example 7 | Sorting an array with a loop

Write a script to sort an array of strings alphabetically by the first letter of an element.

const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby']; 

Output: ['c++', 'haskel', 'javascript', 'python', 'php', 'ruby']
*/

const langs = ["python", "javascript", "c++", "haskel", "php", "ruby"];
langs.sort();
console.log(langs); //['c++', 'haskel', 'javascript', 'php', 'python', 'ruby']

const langs = ["python", "javascript", "c++", "haskell", "php", "ruby"];

function sortByFirstLetter(arr) {
  return arr.sort((a, b) => {
    const firstLetterA = a.charAt(0).toLowerCase();
    const firstLetterB = b.charAt(0).toLowerCase();
    if (firstLetterA < firstLetterB) {
      return -1;
    }
    if (firstLetterA > firstLetterB) {
      return 1;
    }
    return 0;
  });
}

const sortedLangs = sortByFirstLetter(langs);
console.log(sortedLangs);

/*(6) ['c++', 'haskell', 'javascript', 'python', 'php', 'ruby']
0: "c++"
1: "haskell"
2: "javascript"
3: "python"
4: "php"
5: "ruby"
length: 6
[[Prototype]]: Array(0)/

/* 
Example 8 | Search for an element
    
Write a script to find the smallest number in an array. 
The code should work for any array of numbers. Use a loop to solve problems.

const numbers = [2, 17, 94, 1, 23, 37];
let min;
console.log(min); // 1
*/
const numbers = [2, 17, 94, 1, 23, 37];

function getMin(array) {
	//Write your code below here.
	let min = array[0]; //1

	for (let i = 1; i < array.length; i++) {
		if (array[i] < min) min = array[i];
	}

	return min;
}

console.log(getMin([2, 17, 94, 1, 23, 37])); //1
//console.log(getMin([42, 85, 11, 32, 15])); //11

