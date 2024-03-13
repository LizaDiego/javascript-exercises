/* 1 | variable assignment

Assign to the variable apartment an object describing an apartment with the following characteristics:

imgUrl - photo, value "https://via.placeholder.com/640x480";
descr - description, meaning "Spacious apartment in the city center";
rating - rating, value 4;
price - price, value 2153;
tags - meta information, array ["premium", "promoted", "top"]. */

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
};

/* 2 | nested group data

Supplement the apartment object with the owner property, 
the value of which will be an object with information about the owner. 
Add the following properties to it:

name - owner's name, value "Henry";
phone - phone, value "982-126-1588";
email - mail, value "henry.carter@aptmail.com". */

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

/* 3 | object.property_key

Supplement the code by assigning to the declared variables 
the expressions of the call to the corresponding properties of the apartment object.

aptRating - rating;
aptDescr - description;
aptPrice - price;
aptTags - tags. */

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
};

// Change code below this line
const aptRating = apartment.rating;
const aptDescr = apartment.descr;
const aptPrice = apartment.price;
const aptTags = apartment.tags;
// Change code above this line

/* 4 | nested _object.property_key | dot chain

Supplement the code by assigning to the declared variables 
the expressions of the call to the corresponding properties of the apartment object.

ownerName - owner's name;
ownerPhone - owner's phone;
ownerEmail - owner's mail;
numberOfTags - the number of array elements in the tags property;
firstTag - the first element of the array in the tags property;
lastTag - the last element of the array in the tags property. */

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

// Change code below this line
const ownerName = apartment.owner.name;
const ownerPhone = apartment.owner.phone;
const ownerEmail = apartment.owner.email;
const numberOfTags = apartment.tags.length;
const firstTag = apartment.tags[0];
const lastTag = apartment.tags[2];

/* 5 | nested object["property_key"]

Complete the code by assigning to the declared variables 
the expressions for accessing the corresponding properties of 
the apartment object using the "square brackets" syntax.

aptRating - rating;
aptDescr - description;
aptPrice - price;
aptTags - tags. */

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
};

// Change code below this line
const aptRating = apartment["rating"];
const aptDescr = apartment["descr"];
const aptPrice = apartment["price"];
const aptTags = apartment["tags"];

/* 6 | changing property values using dot.notation 

Complete the code by updating the property values ​​of the apartment object:

Update the price in the price property to 5000;
update the apartment rating in the rating property to 4.7;
Update the name of the owner in the attached property name to "Henry Sibola";
Update the array of tags in the tags property by adding the "trusted" string to the end. */

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

// Change code below this line
apartment.price = 5000;
apartment.rating = 4.7;
apartment.owner.name = "Henry Sibola";
apartment.tags.push("trusted");

/* 7 | adding properties using dot.notation

Add a few new properties to the apartment object:

area - area in square meters, number 60;
rooms - number of rooms, number 3;
location - the location of the apartment, the object with the following nested properties;
country - country, string "Jamaica";
city - city, string "Kingston". */

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4.7,
  price: 5000,
  tags: ["premium", "promoted", "top", "trusted"],
  owner: {
    name: "Henry Sibola",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

// Change code below this line
apartment.area = 60;
apartment.rooms = 3;
apartment.location = {
  country: "Jamaica",
  city: "Kingston",
};

/* 8 | shorthand properties

Complete the object declaration code so that 
it has properties name, price, image and tags with values 
​​from variables with similar names. Be sure to use shorthand properties. */

const name = "Repair Droid";
const price = 2500;
const image = "https://via.placeholder.com/640x480";
const tags = ["on sale", "trending", "best buy"];

const product = {
   // Change code below this line
  name,
  price,
  image,
  tags,
};

/* 9 | computed properties 

Complete the code for declaring the object credentials so that 
as a result it has two properties: email and password, 
the names of which are stored in the variables emailInputName and passwordInputName.

The value of the email property should be the string "henry.carter@aptmail.com", 
and the value of the password property should be the string "jqueryismyjam" */

const emailInputName = "email";
const passwordInputName = "password";

const credentials = {
  // Change code below this line
  [emailInputName]: "henry.carter@aptmail.com",
  [passwordInputName]: "jqueryismyjam"
};
  
/* 10 | keys | for in loop

Iterate over the apartment object using the for...in loop 
and write all its keys to the keys array, and all its property values ​​to the values ​​array. */

const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const keys = [];
const values = [];
// Change code below this line
for (const key in apartment) {
  keys.push(key);
  values.push(apartment[key]);
}

console.log(keys);
console.log(values);

/* 11 | hasOwnProperty() | for in loop

Refactor the solution to the previous task 
by adding a check for the own property to the for...in loop. */

const keys = [];
const values = [];
const advert = {
  service: "apt",
};
const apartment = Object.create(advert);
apartment.descr = "Spacious apartment in the city center";
apartment.rating = 4;
apartment.price = 2153;

for (const key in apartment) {
  // Change code below this line
  if (apartment.hasOwnProperty(key)) {
    keys.push(key);
    values.push(apartment[key]);
  }
}

/* 12 | counting properties

Write a function countProps(object), that counts and returns 
the number of an object's own properties in the object parameter. 
Use the variable propCount to store the number of properties of the object. */

function countProps(object) {
  let propCount = 0;
  // Change code below this line
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      propCount++;
    }
  }
  return propCount;
}

/* 13 | Object.keys(obj) | for of loop

Iterate over the apartment object using the Object.keys() method and the for...of loop. 
Assign to the variable keys the array of the keys of the own properties of the object apartment, 
and add all the values ​​of its properties to the array values. */

const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const values = [];
// Change code below this line
const keys = Object.keys(apartment);
for (let key of keys) {
  values.push(apartment[key]);
}

/* 14 | counting properties

Refactor the countProps(object) function using the 
Object.keys() method and optionally a for...of loop. */

function countProps(object) {
  // Change code below this line
  let propCount = 0;

  let keys = Object.keys(object);

  for (let key of keys) {
    propCount += 1;
  }

  return propCount;
}

/* 15 | Object.keys(obj)

Write to the variable keys an array of the keys of the own properties of the object apartment, 
and to the variable values an array of all the values ​​of its properties. 
Use the methods Object.keys() and Object.values​​(). */

const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
// Change code below this line
const keys = Object.keys(apartment);
const values = Object.values(apartment);

/* 16 | payroll expenses

Write a function called countTotalSalary that takes an object salaries as a parameter. 
Each property of the salaries object represents an employee's name and their corresponding salary. 
The function should calculate and return the total amount of salaries of all employees. 
Tips:
Use the Object.values() method to extract the values (salaries) from the salaries object.
Initialize a variable totalSalary with a value of 0.
Iterate over the extracted values using a loop and add each value to the totalSalary variable.
Finally, return the totalSalary. */

function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Change code below this line
  const salaryValues = Object.values(salaries);

  for (const salary of salaryValues) {
    totalSalary += salary;
  }
  // Change code above this line
  return totalSalary;
}

/* 17 | for of loop 

Iterate over the array of colors objects using a for...of loop. 
Add the hex property values ​​to the hexColors array, and the rgb property values 
​​from all the colors array objects to the rgbColors array. */

const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line
for (const color of colors) {
  hexColors.push(color.hex);
  rgbColors.push(color.rgb);
}

/* 18 | finding an object by property value

Write a function getProductPrice(productName) that takes one parameter, productName - the name of the product. 
The function looks for a product object with this name (the name property) 
in the products array and returns its price (the price property). 
If no product with the same name is found, the function returns null. */

const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  // Change code below this line
  for (let product of products) {
    if (product["name"] === productName) {
      return product.price;
    }
  }
  return null;
}

/* 19 | property values collection

Write a function getAllPropValues(propName) that takes one parameter 
propName - the name (key) of the property. 
The function should return an array of all the values of the property 
with that name from each object in the products array. 
If the objects do not have a property with the same name, the function returns an empty array. */

const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Change code below this line
  const propValues = [];

  for (const product of products) {
    if (propName in product) {
      propValues.push(product[propName]);
    }
  }
  return propValues;
}

/* 20 | total price

Write a function calculateTotalPrice(productName) that takes 
one parameter productName - the name of the product. 
The function should return the total cost (price * quantity) 
of the product with this name from the products array. */

const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  // Change code below this line
  for (const product of products) {
    if (product.name === productName) {
      return product.price * product.quantity;
    }
  }
  return 0;
}

/* 21 | destructuring - "unpack" the values ​​of an object's properties into local variables

The three-day forecast of maximum temperatures came and we calculate 
the average temperature for three days (meanTemperature). 
Replace the declarations of the variables yesterday, today and tomorrow 
with one destructuring operation of the properties of the object highTemperatures. */

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line

const { yesterday, today, tomorrow } = highTemperatures;

// Change code above this line
const meanTemperature = (yesterday + today + tomorrow) / 3;

/* 22 | destructuring nonexistent properties

The maximum temperature forecast can also have an optional icon property - the weather icon. 
Replace the declarations of the variables yesterday, today, tomorrow and icon 
with one destructuring operation of the properties of the highTemperatures object. 
Set the default value for icon - the string"https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg". */

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line

const {
  yesterday,
  today,
  tomorrow,
  icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
} = highTemperatures;

// Change code above this line
const meanTemperature = (yesterday + today + tomorrow) / 3;

/* 23 | destructuring | changing variables

Replace the declarations of the variables highYesterday, highToday, highTomorrow and highIcon 
with one operation of destructuring the properties of the object highTemperatures. 
Set the default value for highIcon - string "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg". */

/* 24 | destructuring | for of loop

Refactor the for...of loop so that it uses object destructuring. */

const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line

for (const { hex, rgb } of colors) {
  hexColors.push(hex);
  rgbColors.push(rgb);
}

/* 25 | destructuring | nested objects

We received a weather forecast for two days, 
with minimum and maximum temperatures, as well as optional icons. 
Replace all variable declarations with one destructuring operation 
of properties of the forecast object. Set the default value for icons, 
use the variables todayIcon and tomorrowIcon, and use the string
"https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg". */

const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};
// Change code below this line

const {
  today: {
    low: lowToday,
    high: highToday,
    icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
  },
  tomorrow: {
    low: lowTomorrow,
    high: highTomorrow,
    icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
  },
} = forecast;

/* 26 | setting object pattern

The calculateMeanTemperature(forecast) function takes one parameter forecast - 
a temperature object for two days of the following format:

{
  today: { low: 10, high: 20 },
  tomorrow: { low: 20, high: 30 }
}

Replace the declarations of the variables todayLow, todayHigh, tomorrowLow and tomorrowHigh 
with one operation of destructuring the properties of the object forecast. */

// Change code below this line
function calculateMeanTemperature(forecast) {
  const {
    today: {
      low: todayLow,
      high: todayHigh
    },
    tomorrow: {
      low: tomorrowLow,
      high: tomorrowHigh
    }
  } = forecast;

  // Change code above this line
  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}

/* 27 | (...) spread | Math.max() and Math.min( ) methods

The scores variable stores an array of test results. 
Using spreading and the Math.max() and Math.min() methods, 
modify the code so that the bestScore variable has the highest score, 
and the worstScore variable has the lowest. */

const scores = [89, 64, 42, 17, 93, 51, 26];
// Change code below this line
const bestScore = Math.max(...scores);
const worstScore = Math.min(...scores);

/* 28 | (...) spread

The variables firstGroupScores, secondGroupScores and thirdGroupScores 
store the test results of individual groups. Using spread, add the code so that:

The variable allScores stored an array of all the results from the first to the third group.
The variable bestScore had the highest overall score.
The worstScore variable had the lowest overall score. */

const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];
// Change code below this line
const allScores = [
  ...firstGroupScores,
  ...secondGroupScores,
  ...thirdGroupScores,
];
const bestScore = Math.max(...allScores);
const worstScore = Math.min(...allScores);

/* 29 | (...) spread

In the constructor, you can create new tests for which there are default settings 
that are stored in the defaultSettings variable. 
During test creation, all or part of the settings can be overridden, 
they are stored in the overrideSettings variable.

In order to get the final test settings, you need to take the default settings 
and apply the overridden settings on top of them. 
Add the code so that the finalSettings variable contains the final test settings object. */

const defaultSettings = {
  theme: "light",
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};
// Change code below this line
const finalSettings = { ...defaultSettings, ...overrideSettings };

/* 30 | task card

Write a function makeTask(data) that takes one parameter data - an object with the following properties.

text - the text of the task.
category - task category.
priority - the priority of the task

The function should compose and return a new task object 
without directly modifying the data parameter. 
The new object must have a completed property, 
the value of which is stored in the local variable of the same name.

The data parameter is guaranteed to contain only the text property,
and the other two, category and priority, may be missing. 
Then, in the new task object, the category and priority properties 
should contain the default values ​​stored in the local variables of the same name. */

function makeTask(data) {
  const completed = false;
  const category = "General";
  const priority = "Normal";
  // Change code below this line
  const task = {
    text: data.text,
    category: data.category || category,
    priority: data.priority || priority,
    completed: completed,
  };
  return task;
}

/* 31 | (...args) rest

Using the rest operation, supplement the add() function code so that 
it accepts any number of arguments (args parameter), reads, and returns their sum. */

// Change code below this line
function add(...args) {
  const sum = args.reduce((total, current) => total + current, 0);
  return sum;
  // Change code above this line
}
add(15, 27);
add(12, 4, 11, 48);
add(32, 6, 13, 19, 8);
add(74, 11, 62, 46, 12, 36);

/* 32 | (...) rest

The addOverNum() function is designed to calculate the sum of all arguments passed to it. 
However, we want to modify this function to only count the sum of arguments 
that are greater than a specified number. 
The specified number should be the first parameter of the function.

To solve this task, you need to make changes to the function parameters and body. 
The first parameter should represent the specified number, 
and the rest of the arguments should be collected using the rest parameter syntax (...args). 
Inside the function, initialize a variable named total to 0. 
Then, iterate over each argument using a loop or iteration method. 
Check if each argument is greater than the specified number, and if it is, 
add it to the total using the addition operator (+=). Finally, return the total sum. */

// Change code below this line
function addOverNum(num, ...args) {
  let total = 0;

  for (const arg of args) {
    if (arg > num) {
    total += arg;
    }
  }

  return total;
  // Change code above this line
}

/* 33 | array of matches

Write a function called findMatches that takes an array as its first argument
and an arbitrary number of additional arguments. 
The first argument represents an array of numbers, 
and the rest of the arguments are individual numbers. 
The function should return a new array matches that contains only those numbers 
from the additional arguments that are present in the array specified as the first argument.

For example, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) should return an array [1, 2], 
because only those numbers are in the first argument array.
Tips:
Use the rest parameter (...args) to capture all the additional arguments as an array.
Iterate over each argument in args using a loop.
Use the includes() method on the array to check if each argument exists in the array.
If an argument is found in the array, push it to the matches array.
Finally, return the matches array.*/

// Change code below this line
function findMatches(array, ...args) {
  const matches = []; // Don't change this line
  for(const arg of args) {
    if (array.includes(arg)) {
      matches.push(arg);
    }
  }
  // Change code above this line
  return matches;
}

/* 34 | object method | function inside object used for working with data

Expand the functionality of the bookShelf object by adding two new methods. 
These methods should operate similarly to the existing getBooks() 
and addBook(bookName) methods, but with different purposes.

The removeBook(bookName) method should return a string in the format 
"Deleting book <book name>", where <book name> is the value of the bookName parameter.
The updateBook(oldName, newName) method should return a string in the format 
"Updating book <old name> to <new name>", where <old name> and <new name> 
are the values of the oldName and newName parameters, respectively. */

const bookShelf = {
  // Change code below this line
  books: ["The last kingdom", "The guardian of dreams"],
  getBooks() {
    return "Returning all books";
  },
  addBook(bookName) {
    return `Adding book ${bookName}`;
  },
  removeBook(bookName) {
    return `Deleting book ${bookName}`;
  },
  updateBook(oldName, newName) {
    return `Updating book ${oldName} to ${newName}`;
  },
  // Change code above this line
};

/* 35 | this keyword | indexOf() and splice()

Modify the updateBook(oldName, newName) method so that it changes the book title 
from oldName to newName in the books property. 
Use indexOf() to find the desired element in the array, and splice() to replace that element. */

const bookShelf = {
  books: ["The last kingdom", "Haze", "The guardian of dreams"],
  updateBook(oldName, newName) {
    // Change code below this line
    let idx = this.books.indexOf(oldName);
    if (idx >= 0) {
      this.books.splice(idx, 1, newName);
    }
    // Change code above this line
  },
};

/* 36 | the potion shop

We were approached by the owner of the potions shop "At the Old Toad", 
he ordered a program for keeping an inventory - adding, removing, searching and updating potions. 
Add to the object atTheOldToad the property potions, the value of which is an empty array. */

const atTheOldToad = {
  // Change code below this line
  potions: [],
};

/* 37 | the potion shop | get all the potion

Add the getPotions() method to the atTheOldToad object, which simply returns the value of the potions property. */

const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
};

/* 38 | the potion shop | add a new potion

Modify the addPotion(potionName) method to add the potionName 
to the end of the potions array in the potions property. */

const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  addPotion(potionName) {
    // Change code below this line
let NewPotion = this.potions.push(potionName);
},

/* 39 | the potion shop | remove the potion

Complete the removePotion(potionName) method to remove the potionName 
potion from the potion array in the potions property. */

const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  removePotion(potionName) {
    // Change code below this line
  let oldPotion = this.potions.indexOf(potionName);
  this.potions.splice(oldPotion, 1);
  },
},

/* 40 | the potion shop | update the potion

Complete the updatePotionName(oldName, newName) method so that it updates 
the potion name from oldName to newName in the potions array in the potions property. */
    
const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  updatePotionName(oldName, newName) {
    // Change code below this line
  const potionIndex = this.potions.indexOf(oldName);
    if (potionIndex !== -1) {
      this.potions[potionIndex] = newName;
    }
    // Change code above this line
  },
    },
};

/* 41 | the potion shop | expanding inventory

The customer has requested a change to the inventory system of the Old Toad potion shop. 
Previously, the potions were stored as an array of strings, but now they want each potion 
to be represented as an object with additional properties.

{
  name: "Dragon breath",
  price: 700
}

Your task is to refactor the methods of the atTheOldToad object to work with this new inventory format.

The atTheOldToad object currently has the following methods:

getPotions(): Returns all potions in the inventory as an array.
addPotion(newPotion): Adds a new potion to the inventory. 
However, now the newPotion parameter is an object representing the potion, 
with properties name and price. Check if a potion with the same name 
already exists in the inventory before adding it. 
If it exists, return an error message.
removePotion(potionName): Removes a potion from the inventory based on its name. 
Find the potion object with the matching name property and remove it from the inventory array.
updatePotionName(oldName, newName): Updates the name property of a potion in the inventory. 
Find the potion object with the matching name property and update its name value to the new name.
To complete this task, modify the code of each method to work with the new array of potion objects. 
Make sure to access the name and price properties of each potion object correctly. 
Use loops or iteration methods to iterate over the inventory array and perform the necessary checks and updates. */

const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    if (this.potions.some(potion => potion.name === newPotion.name)) {
      return `Error! Potion ${newPotion.name} is already in your inventory!`;
    }
    this.potions.push(newPotion);
  },
  removePotion(potionName) {
    const potionIndex = this.potions.findIndex(potion => potion.name === potionName);
    if (potionIndex === -1) {
      return `Potion ${potionName} is not in inventory!`;
    }
    this.potions.splice(potionIndex, 1);
  },
  updatePotionName(oldName, newName) {
    const potionIndex = this.potions.findIndex(potion => potion.name === oldName);
    if (potionIndex === -1) {
      return `Potion ${oldName} is not in inventory!`;
    }
    this.potions[potionIndex].name = newName;
  },
};





