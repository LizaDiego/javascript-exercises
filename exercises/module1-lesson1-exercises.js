/*  Example 1 | Mathematical operators

Display the total number of apples and grapes on the screen. The difference between apples and grapes.
*/

const apples = 47;
const grapes = 135;
const total = apples + grapes;
console.log(total) // 182
const diff = grapes - apples;
console.log(diff) // 88

/* Example 2 | Combined operators

Replace or override the expression with the combined operator +=. 

The += operator is used to add 50 to the existing value of students (100), effectively increasing it by 50.*/

let students = 100;
students += 50;
console.log(students); // 150

/* Example 3 | Operators priority

Disassemble operators priority in the variable value assignment instruction result. 

1. Multiply 2 * 5.
2. Add 108 + 223.
3. Subtract the result of step 1 from step 2 */

const result = 108 + 223 - 2 * 5;
console.log(result);  // 321

/* Example 4 | Math | floor, ceiling, round values

Write a script that prints to the console rounded up/down, etc. values of variable value. 
Use the methods Math.floor(), Math.ceil() and Math.round().Check what happens in the console for the values "27.3" and "27.9". */

const value = 27.5;

const floorValue = Math.floor(value);
const ceilValue = Math.ceil(value);
const roundValue = Math.round(value); 

console.log(value); //27.5
console.log(floorValue); //27
console.log(ceilValue);  //28
console.log(roundValue);  //28

/* Example 5 | Template string

Compose a phrase using the template string where A has B bots in stock, where A, B - variables inserted into a line. */

const companyName = 'Cyberdyne Systems';
const repairBots = 150;
const defenceBots = 50;
const message = `${companyName} has ${repairBots + defenceBots} bots in stock`;
console.log(message); // "Cyberdyne Systems has 200 bots in stock"

/* Example 6 | String method | chaining

Write a script that calculates a person's body mass index. For this you need to divide the weight in 
kilograms by the square of the person's height in meters.

Weight and height are stored in the weight and height variables, but not as numbers, 
but in as strings(specially for the task).Non - integer numbers can be given as 24.7 or 24, 7, that is, 
as a separator of the fractional part can be comma. 

The body mass index should be rounded to one decimal place. */

const weight = "88,3";
const height = "1.75";

const convertedWeight = parseFloat(weight);
const convertedHeight = parseFloat(height);

const bmi = convertedWeight / Math.pow(convertedHeight, 2);
console.log(bmi); // 28.73469387755102
console.log(bmi.toFixed(2)); //28.73

/* Example 7 | Comparison operators | Type casting

What will be the result of the expressions?

greater than >
less than <
greater than or equal >=
less than or equal <=
equality operator ==
strict equality operator === (comparing the values on the left and right operand and we also check if they have the same data type)

1 - represents the boolean true
0 - represents the boolean false */

console.log(5 > 4); //true
console.log(10 >= "7"); //true
console.log("2" > "12"); //true
console.log("2" < "12"); //false
console.log("4" == 4); //true
console.log("6" === 6); //false
console.log("false" === false); //false
console.log(1 == true); //true
console.log(1 === true); //false
console.log("0" == false); //true
console.log("0" === false); //false
console.log("Papaya" < "papaya"); //true
console.log("Papaya" === "papaya"); //false
console.log(undefined == null); //true
console.log(undefined === null); //false

/* Example 8 |  Logical operators

What will be the result of the expressions? */

console.log(true && 3); // 3
console.log(false && 3); // false
console.log(true && 4 && 'kiwi'); // kiwi
console.log(true && 0 && 'kiwi'); // 0
console.log(true || 3); // true
console.log(true || 3 || 4); // true
console.log(true || false || 7); // true
console.log(null || 2 || undefined);  // 2
console.log((1 && null && 2) > 0); // false
console.log(null || (2 && 3) || 4); // 3

/* Example 9 | Default value | Null merge perator

Refactor the code so that the value is assigned to the value variable incomingValue
if it is not equal to undefined or null. Otherwise, defaultValue must be assigned.
Check work script for the following values of the incomingValue variable: null, undefined, 0, false.
Use operator ?? (nullish coalescing operator).

?? nullish coalescing operator works like || but only for null/undefined */

const incomingValue = 5;
const defaultValue = 10;
const value = incomingValue ?? defaultValue;
console.log(value); // 5

/* Example 10 | String method | % operator

Write a script that will convert the value of totalMinutes (number of minutes) to string in hour and minute format HH:MM.

70 will show 01:10
450 will show 07:30
1441 will show 24:01 */

const totalMinutes = 70;
const hours = 450;
const minutes = 1441;
console.log(hours);
console.log(minutes);

const doubleDigitHours = hours < 10 ? `0${hours}` : `${hours}`;
const doubleDigitMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
console.log(`${doubleDigitHours}:${doubleDigitMinutes}`); 

const totalMinutes = 70;

// Calculate hours and minutes
const hours = Math.floor(totalMinutes / 60);
const minutes = totalMinutes % 60;

// Convert to double-digit format
const doubleDigitHours = hours < 10 ? `0${hours}` : `${hours}`;
const doubleDigitMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;

// Output in HH:MM format
console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);

function convertToHHMM(totalMinutes) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    const doubleDigitHours = hours < 10 ? `0${hours}` : `${hours}`;
    const doubleDigitMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    return `${doubleDigitHours}:${doubleDigitMinutes}`;

}

console.log(convertToHHMM(totalMinutes)); // 01:10
console.log(convertToHHMM(hours1)); // 07:30
console.log(convertToHHMM(minutes1)); // 24:01

/* Time Formatting

Write a function formatTime(minutes) that will translate the value of minutes (number of minutes) to a string in hour and minute format HH:MM.

Step 1: Start
Step 2: Define function `formatTime` with parameter `minutes`
Step 3: Calculate hours by dividing `minutes` by 60 and rounding down to the nearest whole number
Step 4: Calculate remaining minutes using the modulus operator with 60
Step 5: Convert `hours` to string and pad with leading zeros to ensure two digits
Step 6: Convert `minutes` (remainder) to string and pad with leading zeros to ensure two digits
Step 7: Concatenate `hours` and `minutes` with a colon (:) separator to form HH:MM format
Step 8: Return the formatted time string
Step 9: End 
*/

const hours = Math.floor(totalMinutes / 60);
const minutes = totalMinutes % 60;
console.log(hours);
console.log(minutes);

const doubleDigitHours = String(hours).padStart(2, 0);
const doubleDigitMinutes = String(minutes).padStart(2, 0);
console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);

function formatTime(minutes) {
   const hours = Math.floor(minutes / 60)
     .toString()
     .padStart(2, 0);
   const min = (minutes % 60).toString().padStart(2, 0);

   return `${hours}:${min}`;
}

console.log(formatTime(70)); // "01:10"
console.log(formatTime(450)); // "07:30"
console.log(formatTime(1441)); // "24:01"