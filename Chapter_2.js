let caught = 5 * 5;
console.log(caught);

let ten = 10;
console.log(ten * ten);

let mood = "Dark";
console.log(mood);
mood = "Light";
console.log(mood);

let luigisDebt = 140;
luigisDebt = luigisDebt - 35;
console.log(luigisDebt);

let one = 1, two = 2;
console.log(one + two);

var greeting = "Fawaka ";
const name = "Aris";
console.log(greeting + name);

// prompt("Enter Passcode");

let x = 30;
console.log("The value of is x is", x);

console.log(Math.max(2,4));

console.log(Math.min(2,3,4,5) + 100);

// let string = "10";
// let theNumber = Number(string);
// console.log("Your number is the square root of " + theNumber * theNumber);

let string = "Aris";
let theNumber = Number(string);
if (!Number.isNaN(theNumber)) {
    console.log("Your number is the square root of " + theNumber * theNumber);
} else {
    console.log("This is not a number fool!");
}

if (1 + 1 === 2) console.log("It's true");

let num = 140;

if (num < 10) {
    console.log("Small");
} else if (num < 100) {
    console.log("Medium");
} else {
    console.log("Large")
}