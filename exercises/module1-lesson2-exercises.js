
/*
for(statement1, statement2, statement3) {
    //CODE TO EXECUTE
}
*/

for (let i = 5; i >= 1; i--) {
	console.log(i);
}

// 5, 4, 3, 2, 1
// while loop

/*
    while(condition) {
        //code to execute if condition is true
    }
*/
// let x = 1;
// while (false) {
// 	console.log("Hahahaha");
// }

/*
    do {
        //code to run if its true and it would run once if the condition starts as false.
    }while(condition)
*/
do {
	console.log("You will only see me one time");
} while (false);

/* Example 1 | User input | branching

Using the if..else and prompt constructs, write code that will ask: "What is the official name of JavaScript?". 
If the user enters ECMAScript, then show an alert with the string "Correct!", otherwise - "Do not know? ECMAScript!"

const answer = prompt('What is the official name of JavaScript?');
const rightAnswer = 'ECMAScript';

Write if else code below this line */

const answer = prompt("What is the official name of JavaScript?");
const rightAnswer = "ECMAScript";

if (answer.toLowerCase() === rightAnswer.toLowerCase()) {
    alert("Correct!");
} else {
    alert("Do not know? ECMAScript!");
}

/* Example 2 | Time display | if - else

Write a script to display hours and minutes in the browser console as a string format "14 hours 26 minutes.". 
If the value of the minutes variable is 0, then output the string "14 o'clock", without minutes.

const hours = 14;
const minutes = 26;
let timestring;
console.log(timestring); */

const hours = 14;
const minutes = 0;
let timestring;

if (minutes > 0) {
    timestring = `${hours} hours ${minutes} minutes.`;
} else {
    timestring = `${hours} o'clock`;
}
console.log(timestring); // "14 o'clock"

/* Example 3 | Branching

Write a script that prints the string "This is a positive number" to the console, 
if the user entered a number greater than zero in the prompt.

If zero was entered, output to the console the string "This is zero".

If a negative number is passed, in the console should be the string "This is a negative number".

Write if, else if, else code below this line */

const userInput = prompt("Enter the number");

if (Number(userInput) === 0) {
    console.log("This is zero");
} else if (Number(userInput) > 0) {
    console.log("This is a positive number");
} else if (Number(userInput) < 0) {
    console.log("This is a negative number");
} else {
    console.log("Please input a number");
}

/* Example 4 | Nested branches

Write a script that compares the numbers in variables a and b. 

If both values greater than 100,then print the maximum of them to the console.

Otherwise, the console should show the sum of the value b and the number 512.

const a = 120;
const b = 180;

if (a > 100 && b > 100) {
    //print to the console the maximum value between a and b here
} else {
    //print to the console the sum of b and number 512 here
} */

const a = 20;
const b = 180;

if (a > 100 && b > 100) {
    if (a > b) {
        console.log(a);
    } else {
        console.log(b);
    }
} else {
    console.log(b + 512); // 692
}

/* Example 5 | Link formatting | if else

Write a script that checks if the value of the link variable ends symbol /. 
if not, add this character to the end of the link value.
Use if...else construction. */

let link = "https://my-site.com/about";

if (link.endsWith("/")) {
    console.log("The link already ends with '/':", link);
} else {
    link += "/";
    console.log("Added '/' to the end of the link:", link);
}
console.log(link);

/* Example 6 | Link formatting | includes()

Write a script that checks if the value of the link variable ends by symbol /. 
If not, append this character to the end of the link value, but only if link contains the substring "my-site".
Use construction if...else. */

let link = 'https://somesite.com/about';

if (link.includes("my-site")) {
    if (link.endsWith("/")) {
        console.log("The link already ends with '/':", link);
    } else {
        link += "/";
        console.log("Added '/' to the end of the link:", link);
    }
} else {
    console.log("The link doesn't contain 'my-site'.");
}

/* Example 7 | Link Formatting | Ternary operator

Make code refactoring of the task number 6 code using ternary operator. */

let link = 'https://somesite.com/about';
if (!link.endsWith('/') && link.includes('my-site')) {
  link += '/';
}
console.log(link);

/* Example 8 | Logical operators | if - else

Write a script that will output a string to the browser console depending on hours variable values.

If the value of the variable hours:
- less than 17, output the string "Pending"
- greater than or equal to 17 and less than or equal to 24, output the string "Expires"
- greater than 24 , output the string "Overdue" */

const hours = 15;

if (hours < 17) console.log("Pending");
else if (hours >= 17 && hours <= 24) console.log("Expires");
else console.log("Overdue"); // Pending

/* Example 9 | Project submission deadline | if - else

Write a script to display the project deadline time. 

Use if...else construction.
- If there are 0 days before the deadline - output the string "Today"
- If it's 1 day before the deadline - output the string "Tomorrow"
- If it's 2 days before the deadline - output the string "The day after tomorrow"
- If it's 3+ days before the deadline - print the string "Date in the future" */

const daysUntilDeadline = 0;

if (daysUntilDeadline === 0) console.log("Today");
else if (daysUntilDeadline === 1) console.log("Tomorrow");
else if (daysUntilDeadline === 2) console.log("The day after tomorrow");
else console.log("Date in the future"); // Today

/* Example 10 | Project submission deadline | switch

Refactor the code in Example 9 using switch. */

const daysUntilDeadline = 5;

if (daysUntilDeadline === 0) {
  console.log('Today');
} else if (daysUntilDeadline === 1) {
  console.log('Tomorrow');
} else if (daysUntilDeadline === 2) {
  console.log('The day after tomorrow');
} else {
  console.log('Date in the future');
} //  Date in the future
 
/* Example 11 | For loop

Write a for loop that prints numbers in ascending order to the browser console from min to max, 
but only if the number is a multiple of 5. */

const max = 100;
const min = 20;

for (let i = min; i <= max; i += 1) {
    if (i % 5 === 0) {
        console.log(i);
    }
}

/* Example 12 | User input | branching

Write a script that will ask for login using prompt and log result in browser console.

- If the visitor enters "Admin", then prompt prompts for a password
- If nothing is entered or the Esc key is pressed - print the line "Canceled"
- Otherwise print the string "I don't know you"

Check password like this:
- If the password is "I'm an admin", then output the string "Hello!"
Else output the string "Wrong password"  */

const login = prompt("Enter login");

if (login === "Admin") {
  const password = prompt("Enter password");
  if (password === "I'm an admin") {
    console.log("Hello!");
  } else if (password === null || password === "") {
    console.log("Canceled");
  } else {
    console.log("Wrong password");
  }
} else if (login === null || login === "") {
  console.log("Canceled");
} else {
  console.log("I don't know you");
}
