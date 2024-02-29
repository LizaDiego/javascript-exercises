/* 
Example 1 - Destructuring
Rewrite the function so that it takes one object of the parameter instead of a set of independent arguments.

*/

function calcBMI(details) {
  //object destructuring

  (weight / height ** 2).toFixed(2);
}

console.log(calcBMI({ weight: 88.3, height: 1.75 }));
console.log(calcBMI({ weight: 68.3, height: 1.65 }));
console.log(calcBMI({ weight: 118.3, height: 1.95 }));

/* 
Example 2 - Destructuring
Rewrite the function so that it takes one object of the parameter instead of a set of independent arguments.
*/

//object destructuring inside the parameter
function printContactsInfo(names, phones) {}
    namesList = names.split "Jacob,William,Solomon,Artemis"
printContactsInfo({
  names: "Jacob,William,Solomon,Artemis",
  phones: "89001234567,89001112233,890055566377,890055566300",
});

/*
Jacob: 89001234567
William: 89001112233
Solomon: 890055566377
Artemis: 890055566300
*/
