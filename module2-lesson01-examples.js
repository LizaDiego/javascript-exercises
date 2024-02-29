/* 
Example 1 - Basic operations with an array

1. Create an array genres with elements "Jazz" and "Blues".
2. Add "Rock and Roll" to the end.
3. Print the first element of the array to the console.
4. Print the last element of the array to the console. The code should work for an array random length.
5. Remove the first element and print it to the console.
6. Insert "Country" and "Reggae" at the beginning of the array.

*/

console.log(genres); //['Reggae', 'Country', 'Rock and Roll']

/* 
Example 2 - Arrays and Strings

- Write a script to calculate the area of a rectangle with sides, whichvalues values are stored in the values variable as a string. 
- Values guaranteed separated by a space.

const values = '8 11';
*/

/* 
Example 3 - Array iteration

Write a script to iterate over the fruits array with a for loop.
For each array element print a string in the format element_number: element_value to the console.
Element numbering must start from 1.

const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

*/

/* 
Example 4 - Arrays and Loops

Write a script that prints the user's name and phone number to the console. 
The names and phones variables store strings of names and phone numbers, separated by commas.
The sequence number of names and phone numbers in the lines indicates a match.
The number of names and phone numbers is guaranteed to be the same.

const names = 'Jacob,William,Solomon,Artemis';
const phones = '89001234567,89001112233,890055566377,890055566300';
*/

/* 
Example 5 - Arrays and Strings

Write a script that prints to the console all the words of a string except the first and the last one.
The resulting string must not start or end whitespace character.The script should work for any line.

const string = 'Welcome to the future';
*/

/* 
Example 6 - Arrays and Strings

Write a script that "unwraps" a string (reverse letter order) and prints it to the console.

const string = 'Welcome to the future';
//erutuf eht ot emocleW

*/

// let string = "Welcome to the future";
// string = string.split("").reverse().join("");
// console.log(string);

let word = "car";

if (word) {
	console.log("word is a palindrome");
} else {
	console.log("Word is not a palindrome");
}

/* 
Example 7 - Sorting an array with a loop

Write a script to sort an array of strings alphabetically by the first letter of an element.

const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby']; 

Output: ['c++', 'haskel', 'javascript', 'python', 'php', 'ruby']
*/

const langs = ["python", "javascript", "c++", "haskel", "php", "ruby"];
langs.sort();
console.log(langs); //['c++', 'haskel', 'javascript', 'php', 'python', 'ruby']

/* 
Example 8 - Search for an element
    
Write a script to find the smallest number in an array. The code should work for any array of numbers. Use a loop to solve problems.

const numbers = [2, 17, 94, 1, 23, 37];
let min;
console.log(min); // 1
*/

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

