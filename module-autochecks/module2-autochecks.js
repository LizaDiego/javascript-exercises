// 1 | Early Return | (if-else)

function checkAge(age) {
  if (age >= 18) { 
    return "You are an adult";
  }

  return "You are a minor";
}

console.log(checkAge(20));
console.log(checkAge(8));
console.log(checkAge(14));

// 2 | Task | Early Return | password verification

function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
 
  if (password === ADMIN_PASSWORD) {
    return "Welcome!";
  }
    return "Access denied, wrong password!";
  }

console.log(checkPassword("mangohackzor"));
console.log(checkPassword("polyhax"));
console.log(checkPassword("jqueryismyjam"));

// 3 | Task | Early Return | warehouse

function checkStorage(available, ordered) {
  
  if (ordered === 0) {
    return "Your order is empty!";
  }
  
  if (ordered > available) {
    return "Your order is too large, not enough goods in stock!";
  }
  
  return "Your order is accepted, our staff will process it soon.";

}

console.log(checkStorage(100, 50));
console.log(checkStorage(100, 130));
console.log(checkStorage(70, 0));
console.log(checkStorage(200, 20));
console.log(checkStorage(200, 250));
console.log(checkStorage(150, 0));

// 4 | Array Literal

const fruits = ["apple", "plum", "pear", "orange"];


// 5 | Arrays | Index | elements

const fruits = ["apple", "plum", "pear", "orange"];


const firstElement = fruits[0];
const secondElement = fruits[1];
const lastElement = fruits[fruits.length - 1];

console.log("firstElement:", firstElement);  
console.log("secondElement:", secondElement);  
console.log("lastElement:", lastElement);  

// 6 | Array | Index | replace index

const fruits = ["apple", "plum", "pear", "orange"];

fruits[1] = "peach";
fruits[3] = "banana";
console.log(fruits);

// 7 | Array | length

const fruits = ["apple", "peach", "pear", "banana"];


const fruitsArrayLength = fruits.length;
console.log(fruitsArrayLength);

// 8 | Array | length + lastElement

const fruits = ["apple", "peach", "pear", "banana"];


const lastElementIndex = fruits.length - 1;
const lastElement = fruits[lastElementIndex];

// 9 | Task | Array | edge elements of an array

function getExtremeElements(array) {
  
    if (array.length === 0) {
        return []; 
    } else {
        
        return [array[0], array[array.length - 1]];
    }

}
console.log(getExtremeElements([1, 2, 3, 4, 5]));
console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));

// 10 | Array | Split Delimiter

function splitMessage(message, delimiter) {
  let words;
 
  words = message.split(delimiter);

  return words;
}

console.log(splitMessage("Mango hurries to the train", " "));
console.log(splitMessage("Mango", ""));
console.log(splitMessage("best_for_week", ""));

// 11 | Task | Length & Split Delimiter | engraving jewelry

function calculateEngravingPrice(message, pricePerWord) {
   
  const words = message.split(" ");
  const totalCost = words.length * pricePerWord;

  return totalCost;

}

console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
console.log(calculateEngravingPrice("Web-development is creative work", 40));
console.log(calculateEngravingPrice("JavaScript is in my blood", 20));

// 12 | Array | Join Delimiter

function makeStringFromArray(array, delimiter) {
  let string;
  
  string = array.join(delimiter);

  return string;
}

console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "));
console.log(makeStringFromArray(["M", "a", "n", "g", "o"], ""));
console.log(makeStringFromArray(["top", "picks", "for", "you"], "_"));

// 13 | Task | slug generator 


function slugify(title) {
  
  const slug = title.toLowerCase().split(' ').join('-');
  return slug;
  
}

console.log(slugify("Arrays for begginers"));
console.log(slugify("English for developer"));
console.log(slugify("Ten secrets of JavaScript"));
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));


function slugify(title) {
  
    let string = title.split(' ').join('-');
    return string.toLowerCase();

}

// 14 | Array | Slice


const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

const firstTwoEls = fruits.slice(0, 2);
const nonExtremeEls = fruits.slice(1, -1);
const lastThreeEls = fruits.slice(-3);

console.log(fruits.slice(0, 2));
console.log(fruits.slice(1, -1));
console.log(fruits.slice(-3));


// 15 | Array | Concatenation

const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
const newClients = ['Peach', 'Houston'];

const allClients = oldClients.concat(newClients); // Change this line

console.log(oldClients); 
console.log(newClients);
console.log(allClients);

// 16 | Task | Array Composition

function makeArray(firstArray, secondArray, maxLength) {

  const newArray = firstArray.concat(secondArray);
  
  if (newArray.length > maxLength) {
    return newArray.slice(0, maxLength);
    
    } else {
    
    return newArray;
  }
  
}

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); 
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); 
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));

// 17 | Loop 


const start = 3;
const end = 7;

for (let i = start; i <= end; i+= 1) { 
  console.log(i);
}

// 18 | Task | for Loop

function calculateTotal(number) {

let total = 0;
  for (let i = 1; i <= number; i++) {
    total += i;
  }
  return total;

}

console.log(calculateTotal(1));
console.log(calculateTotal(3));
console.log(calculateTotal(7));
console.log(calculateTotal(18));
console.log(calculateTotal(24));
console.log(calculateTotal());

// 19 | Array | for loop


const fruits = ['apple', 'plum', 'pear', 'orange'];

for (let i = 0; i < fruits.length; i += 1) { 
  const fruit = fruits[i]; 
  console.log(fruit);
}

// 20 | Task | purchase cost calculation


function calculateTotalPrice(order) {
  let total = 0;
  
  for (let i = 0; i < order.length; i += 1) {
    total += order[i];
  }
  return total;
}

console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([164, 48, 291]));
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
console.log(calculateTotalPrice());


// 21 | Task | find the longest word


function findLongestWord(string) {
  if (typeof string !== 'string' || string.trim() === '') {
    return "Please provide a valid non-empty string input";
  }
  const words = string.split(' ');

  let longestWord = words[0];

  for (let i = 1; i < words.length; i++) {
    
    if (words[i].length > longestWord.length) {
     
      longestWord = words[i];
    }
  }

  return longestWord;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWord("Google do a roll"));
console.log(findLongestWord("May the force be with you"));
console.log(findLongestWord());

// 22 | Array | push ()

function createArrayOfNumbers(min, max) {
  const numbers = [];

  numbers.push(i);

    for (let i = 0; i < max - min + 1; i++) {
      numbers.push(min + i);
    }
    
  return numbers;
}

console.log(createArrayOfNumbers(1, 3));
console.log(createArrayOfNumbers(14, 17));
console.log(createArrayOfNumbers(29, 34));
console.log(createArrayOfNumbers());

// 23 | Task | filtering an array of numbers

function filterArray(numbers, value) {

const newArray = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > value) {
            newArray.push(numbers[i]);
        }
 }
    return newArray;

}

console.log(filterArray([1, 2, 3, 4, 5], 3));
console.log(filterArray([1, 2, 3, 4, 5], 4));
console.log(filterArray([1, 2, 3, 4, 5], 5));
console.log(filterArray([12, 24, 8, 41, 76], 38));
console.log(filterArray([12, 24, 8, 41, 76], 20));
console.log(filterArray());

// 24 | Array | includes ()

function checkFruit(fruit) {
  const fruits = ["apple", "plum", "pear", "orange"];

  return fruits.includes(fruit);
}

console.log(checkFruit("plum"));
console.log(checkFruit("mandarin"));
console.log(checkFruit("pear"));
console.log(checkFruit("Pear"));
console.log(checkFruit("apple"));
console.log(checkFruit());

// 25 | Task | common elements

function getCommonElements(array1, array2) {
  
  let newArray = [];
  
  for (let i = 0; i < array1.length; i++) {
    if (array2.includes(array1[i])) {
      newArray.push(array1[i]);
    }
  }

  return newArray;
 
}

console.log(getCommonElements([1, 2, 3], [2, 4]));
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
console.log(getCommonElements([1, 2, 3], [10, 20, 30]));
console.log(getCommonElements());

// 26 | Function | for of

function calculateTotalPrice(order) {
  let total = 0;


  for (const item of order) {
    total += item;
  }

  return total;
}

console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([164, 48, 291]));
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
console.log(calculateTotalPrice([]));
console.log(calculateTotalPrice());

// 27 | Task | filtering an array of numbers

function filterArray(numbers, value) {
  
  const filteredNumbers = [];

  for (const number of numbers) {
    if (number > value) {
      filteredNumbers.push(number);
    }
  }

  return filteredNumbers;

}

console.log(filterArray([1, 2, 3, 4, 5], 3));
console.log(filterArray([1, 2, 3, 4, 5], 4));
console.log(filterArray([1, 2, 3, 4, 5], 5));
console.log(filterArray([12, 24, 8, 41, 76], 38));
console.log(filterArray([12, 24, 8, 41, 76], 20));


// 28 | Modulo

const a = 3 % 3;
const b = 4 % 3;
const c = 11 % 4;
const d = 12 % 7;
const e = 8 % 6;

// 29 | Task | Even Numbers

function getEvenNumbers(start, end) {

const evenNumbers = [];

  for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            evenNumbers.push(i);
        }
    }
  return evenNumbers;

  }

console.log(getEvenNumbers(2, 5));
console.log(getEvenNumbers(3, 11));
console.log(getEvenNumbers(6, 12));
console.log(getEvenNumbers(8, 8));
console.log(getEvenNumbers(7, 7));

// 30 | Loop | break

const start = 6;
const end = 27;
let number;

for (let i = start; i < end; i += 1) {
  if (i % 5 === 0) {
    number = i;
    break;
  }
}


// 31 | Early Return | refactor


function findNumber(start, end, divisor) {
  
  let number;

  for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) {
      return i;
    }
  }

  return undefined;
  
}

console.log(findNumber(2, 6, 5));
console.log(findNumber(8, 17, 3));
console.log(findNumber(6, 9, 4));
console.log(findNumber(16, 35, 7));



// 32 | Task | includes()

function includes(array, value) {
  
for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}

console.log(includes([1, 2, 3, 4, 5], 3));
console.log(includes([1, 2, 3, 4, 5], 17));
console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"));
console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus"));
console.log(includes(["apple", "plum", "pear", "orange"], "plum"));
console.log(includes(["apple", "plum", "pear", "orange"], "kiwi"));
  

