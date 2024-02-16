// Module 1. Variables, Types, Branches, Cycles

// 1 | Variables | <keyword> <variable name> = <value>

const productName = 'Droid'
console.log(productName);
const pricePerItem = 2000
console.log(pricePerItem);

// 2 | Variables | Declaration | let or const

let productName = "Droid";
let pricePerItem = 2000;

productName = 'Repair droid';
pricePerItem = 3500;

// 3 | Variables | Data Types | number, string, boolean

const topSpeed = 160;
const distance = 617.54;
const login = "mango935";
const isOnline = true;
const isAdmin = false;

// 4 | Operators

const pricePerItem = 3500;
const orderedQuantity = 4;

const totalPrice = pricePerItem * orderedQuantity;

// 5 | Template Strings

const productName = "Droid";
const pricePerItem = 3500;

const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;

// 6 | Task | ordering a product

const pricePerDroid = 800;
const orderedQuantity = 6;
const deliveryFee = 50;
const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`

// 7 | Function | execution of a specific task

function sayHi() {
  console.log("Hello, this is my first function!")
}
sayHi();

// 8 | Function | Parameters | data inside ()

function add(a, b, c) {
  console.log(`Addition result equals ${a + b + c}`);
}

add(15, 27, 10);
add(10, 20, 30);
add(5, 10, 15);

// 9 | Function | return

function add(a, b, c) {
 
  return a + b + c;

}

add(2, 5, 8); 

console.log(add(15, 27, 10));
console.log(add(10, 20, 30));
console.log(add(5, 10, 15));

// 10 | Task | template strings 

function makeMessage (name, price) {
 
   const message =`You picked ${name}, price per item is ${price} credits`;
 
  return message;
};

console.log(makeMessage('Radar', 6150));
console.log(makeMessage('Scanner', 3500));
console.log(makeMessage('Reactor', 8000));
console.log(makeMessage('Engine', 4070));

// 11 | Task | math operators

function calculateTotalPrice (orderedQuantity, pricePerItem) {

  const totalPrice = orderedQuantity * pricePerItem;

  return totalPrice;
};

console.log(calculateTotalPrice(5, 100));
console.log(calculateTotalPrice(8, 60));
console.log(calculateTotalPrice(3, 400));
console.log(calculateTotalPrice(1, 3500));
console.log(calculateTotalPrice(12, 70));

// 12 | Task | ordering a product

function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
  
const totalPrice = orderedQuantity * 
  pricePerDroid + deliveryFee;
const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

  return message;
}

console.log(makeOrderMessage(2, 100, 50));
console.log(makeOrderMessage(4, 300, 100));
console.log(makeOrderMessage(10, 70, 200));

// 13 | Comparison Operators

function isAdult(age) {
  
  const passed = (age >= 18);

  return passed;
}

console.log(isAdult(20));
console.log(isAdult(14));
console.log(isAdult(8));
console.log(isAdult(37));

// 14 | Equality Operators | loose and strict

function isValidPassword(password) {
  const SAVED_PASSWORD = 'jqueryismyjam';
  
  const isMatch = (password === SAVED_PASSWORD);

  return isMatch;
}

console.log(isValidPassword("mangodab3st"));
console.log(isValidPassword("kiwirul3z"));
console.log(isValidPassword("jqueryismyjam"));

// 15 | Branches | if - else 


function checkAge(age) {
  let message;

  if (age >= 18) { 
    message = 'You are an adult';
  } else {
    message = 'You are a minor';
  }

  return message;
}
console.log(checkAge(20));
console.log(checkAge(8));
console.log(checkAge(14));
console.log(checkAge(38));

// 16 | Task | goods warehouse

function checkStorage(available, ordered) {
  let message;

  if (ordered >= available) { 
    message = 'Not enough goods in stock!';
  } else {
    message = 'Order is processed, our manager will contact you.';
  }

  return message;
}
console.log(checkStorage(100, 50));
console.log(checkStorage(100, 130));
console.log(checkStorage(200, 20));
console.log(checkStorage(200, 150));
console.log(checkStorage(150, 180));

// 17 | Combined Operators

let a = 5;
let b = 10;
let c = 15;
let d = 20;

a += 2;
b -= 4;
c *= 3;
d /= 10;

// 18 | Task | balance checking

function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  const totalPrice = orderedQuantity * pricePerDroid;
  
  if (totalPrice > customerCredits) { 
    message = 'Insufficient funds!';
  } else {
    customerCredits - totalPrice;
    message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`;
  }
  
  return message;
}
  
console.log(makeTransaction(3000, 5, 23000));
console.log(makeTransaction(1000, 3, 15000));
console.log(makeTransaction(5000, 10, 8000));
console.log(makeTransaction(2000, 8, 10000));
console.log(makeTransaction(500, 10, 5000));

// 19 | Branches | if else

function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;

  if (password === null) { 
    message =  'Canceled by user!';
  } else if (password === "jqueryismyjam") { 
    message = 'Welcome!';
  } else {
    message = 'Access denied, wrong password!';
  }

  return message;
}

// 20 | Task | warehouse

function checkStorage(available, ordered) {
  let message;
  
 if (ordered === 0) {
    message = `There are no products in the order!`;
  } else if (ordered > available) {
    message = `Your order is too large, there are not enough items in stock!`;
  } else {
    message = `The order is accepted, our manager will contact you`;
  }
  
  return message;
}
  
console.log(checkStorage(100, 50));
console.log(checkStorage(100, 130));
console.log(checkStorage(70, 0));
console.log(checkStorage(200, 20));
console.log(checkStorage(200, 250));
console.log(checkStorage(150, 0));

// 21 | Binary Operator | &&

function isNumberInRange(start, end, number) {
  const isInRange = number >= start && number <= end;
  return isInRange;
}

console.log(isNumberInRange(10, 30, 17));
console.log(isNumberInRange(10, 30, 5));
console.log(isNumberInRange(20, 50, 24));
console.log(isNumberInRange(20, 50, 76));

// 22 | Binary Operator | ||

function checkIfCanAccessContent(subType) {
  const canAccessContent = subType === "pro" || subType === "vip";
  return canAccessContent;
}

console.log(checkIfCanAccessContent("pro")); 
console.log(checkIfCanAccessContent("starter")); 
console.log(checkIfCanAccessContent("vip"));
console.log(checkIfCanAccessContent("free"));

// 23 | Unary Operator | !

function isNumberNotInRange(start, end, number) {
  const isInRange = number >= start && number <= end;
  const isNotInRange = !isInRange; 

  return isNotInRange;
}

// 24 | Task | calculating the discount

function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0;
  const BRONZE_DISCOUNT = 0.02;
  const SILVER_DISCOUNT = 0.05;
  const GOLD_DISCOUNT = 0.1;
  let discount;
  
if (totalSpent >= 50000) {
    discount = GOLD_DISCOUNT;
  } else if (totalSpent >= 20000 && totalSpent < 50000) {
    discount = SILVER_DISCOUNT;
  } else if (totalSpent >= 5000 && totalSpent < 20000) {
    discount = BRONZE_DISCOUNT;
  } else {
    discount = BASE_DISCOUNT;
  }
  
  return discount;
}
console.log(getDiscount(137000)); 
console.log(getDiscount(46900)); 
console.log(getDiscount(8250));
console.log(getDiscount(1300));
console.log(getDiscount(5000)); 
console.log(getDiscount(20000)); 
console.log(getDiscount(50000));

// 25 | Ternary Operator | <condition > ? <if true> : <if false>

function checkStorage(available, ordered) {
  let message;
  
  message = ordered > available 
    ? "Not enough goods in stock!" 
    : "The order is accepted, our manager will contact you";

  if (ordered > available) {
    message = "Not enough goods in stock!";
  } else {
    message = "The order is accepted, our manager will contact you";
  }
  
  return message;
}
console.log(checkStorage(100, 50)); 
console.log(checkStorage(100, 130)); 
console.log(checkStorage(200, 20));
console.log(checkStorage(200, 150));
console.log(checkStorage(150, 180));

// 26 | Task | password verification

function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;
  
  message = password === ADMIN_PASSWORD 
    ? "Access is allowed" 
    : "Access denied, wrong password!";

  
  return message;
}

console.log(checkPassword("jqueryismyjam")); 
console.log(checkPassword("angul4r1sl1f3")); 
console.log(checkPassword("r3actsux"));

// 27 | Branches | Switch

function getSubscriptionPrice(type) {
  let price;

 switch (type) { 
   case "starter" : 
      price = 0; 
      break;

    case "professional": 
      price = 20; 
      break;

    case "organization": 
      price = 50; 
      break;
  }

  return price;
}

console.log(getSubscriptionPrice("professional")); 
console.log(getSubscriptionPrice("organization")); 
console.log(getSubscriptionPrice("starter"));

// 28 | Branches | Switch

function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;
  
  switch (password) {
    case null:
      message = "Canceled by user!";
      break;
    case ADMIN_PASSWORD:
      message = "Welcome!";
      break;
    default:
      message = "Access denied, wrong password!";
  }

  return message;
}
 
console.log(checkPassword("mangohackzor")); 
console.log(checkPassword(null)); 
console.log(checkPassword("polyhax"));
console.log(checkPassword("jqueryismyjam"));

// 29 | Task | goods delivery

function getShippingCost(country) {
  let message;
  
switch (country) { 
   case "China" :
      price = 100;
      message = `Shipping to ${country} will cost ${price} credits`;
      break;

    case "Chile": 
      price = 250; 
      message = `Shipping to ${country} will cost ${price} credits`;
      break;

    case "Australia": 
      price = 170; 
      message = `Shipping to ${country} will cost ${price} credits`;
      break;

    case "Jamaica": 
      price = 120; 
      message = `Shipping to ${country} will cost ${price} credits`;
      break;
    
    default:
      message = "Sorry, there is no delivery to your country";
  }
  
  return message;
}

console.log(getShippingCost("Australia")); 
console.log(getShippingCost("Germany")); 
console.log(getShippingCost("China"));
console.log(getShippingCost("Chile"));
console.log(getShippingCost("Jamaica")); 
console.log(getShippingCost("Sweden")); 

// 30 | String | length

function getNameLength(name) {
  const message = `Name ${name} is ${name.length} characters long`; 

  return message;
}

console.log(getNameLength("Poly")); 
console.log(getNameLength("Harambe")); 
console.log(getNameLength("Billy"));
console.log(getNameLength("Joe"));

// 31 | String | index

const courseTopic = "JavaScript essentials";

const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
const lastElement = courseTopic[courseTopic.length - 1];

// 32 | String | slice

function getSubstring(string, length) {
  const substring = string.substring(0, length); 

  return substring;
}

console.log(getSubstring("Hello world", 3)); 
console.log(getSubstring("Hello world", 6)); 
console.log(getSubstring("Hello world", 8));
console.log(getSubstring("Hello world", 11));
console.log(getSubstring("Hello world", 0));
console.log(getSubstring("Hello world", 0));

// 33 | Task | message formatting

function formatMessage(message, maxLength) {
  let result;
  

  if (message.length <= maxLength) {
    result = message;
  } else {
    result = message.substring(0, maxLength) + '...';
  }
 
  return result;
}

console.log(formatMessage("Curabitur ligula sapien", 16)); 
console.log(formatMessage("Curabitur ligula sapien", 23));
console.log(formatMessage("Vestibulum facilisis purus nec", 20));
console.log(formatMessage("Vestibulum facilisis purus nec", 30));
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15));
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41));

// 34 | String | normalize

function normalizeInput(input) {
  const normalizedInput = input.toLowerCase(); 

  return normalizedInput;
}

console.log(normalizeInput("Hello world")); 
console.log(normalizeInput("This ISN'T SpaM")); 
console.log(normalizeInput("Big SALE"));

// 35 | String | substring

function checkForName(fullName, name) {
 const result = fullName.includes(name); 
  return result;
}

console.log(checkForName("Egor Kolbasov", "Egor")); 
console.log(checkForName("Egor Kolbasov", "egor")); 
console.log(checkForName("Egor Kolbasov", "egOr"));
console.log(checkForName("Egor Kolbasov", "Zhenya")); 
console.log(checkForName("Vadim Nekrasov", "Vadim")); 
console.log(checkForName("Vadim Nekrasov", "vadim"));
console.log(checkForName("Vadim Nekrasov", "Dima"));

// 36 | Task | spam check

function checkForSpam(message) {
  let result;
  
const lowerCaseMessage = message.toLowerCase();
result = lowerCaseMessage.includes('spam') || lowerCaseMessage.includes('sale');
  
  return result;
}

console.log(checkForSpam("Latest technology news")); 
console.log(checkForSpam("JavaScript weekly newsletter")); 
console.log(checkForSpam("Get best sale offers now!"));
console.log(checkForSpam("Amazing SalE, only tonight!")); 
console.log(checkForSpam("Trust me, this is not a spam message")); 
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!"));
console.log(checkForSpam("[SPAM] How to earn fast money?"));


