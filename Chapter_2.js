// let caught = 5 * 5;
// console.log(caught);

// let ten = 10;
// console.log(ten * ten);

// let mood = "Dark";
// console.log(mood);
// mood = "Light";
// console.log(mood);

// let luigisDebt = 140;
// luigisDebt = luigisDebt - 35;
// console.log(luigisDebt);

// let one = 1, two = 2;
// console.log(one + two);

// var greeting = "Fawaka ";
// const name = "Aris";
// console.log(greeting + name);

// // prompt("Enter Passcode");

// let x = 30;
// console.log("The value of is x is", x);

// console.log(Math.max(2,4));

// console.log(Math.min(2,3,4,5) + 100);

// // let string = "10";
// // let theNumber = Number(string);
// // console.log("Your number is the square root of " + theNumber * theNumber);

// let string = "Aris";
// let theNumber = Number(string);
// if (!Number.isNaN(theNumber)) {
//     console.log("Your number is the square root of " + theNumber * theNumber);
// } else {
//     console.log("This is not a number fool!");
// }

// if (1 + 1 === 2) console.log("It's true");

// // let num = 140;

// // if (num < 10) {
// //     console.log("Small");
// // } else if (num < 100) {
// //     console.log("Medium");
// // } else {
// //     console.log("Large");
// // };

// let num = 0;
// while (num <= 12) {
//     console.log(num);
//     num = num + 2;
// };

// // let result = 1, counter = 0;
// // while (counter < 10) {
// //     result = result * 2;
// //     counter = counter + 1;
// // };
// // console.log(result);

// let yourName = "Test";
// do {
//     console.log("Enter your name");
// } while (!yourName);
// console.log(yourName);

// if (false != true) {
//     console.log("This makes sense");
//     if (1 < 2) {
//         console.log("This is true");
//     };
// };

// for ( let nu = 0; nu <= 12; nu += 2) {
//     console.log(nu); 
// }

// let result = 1;
// for (counter = 0; counter < 10; counter ++) {
//     result = result * 2;
// }
// console.log(result);

// for (let current = 20; ; current ++) {
//     if (current % 7 == 0) {
//         console.log(current);
//         break;
//     }
// }

// let weather = "Sunny";
// switch (weather) {
//     case "Rainy":
//         console.log("Pack an umbrella");
//         break;
//     case "Sunny":
//         console.log("Go outside");
//         break;
//     default:
//         console.log("Unknown weather type!");
//         break;
// }

for (let count = "#"; count.length <= 7; count+="#") {
    // console.log(count);
}

for (let number = 1; number <= 100; number++ ) {
    if (number % 3 == 0 && number % 5 != 0) {
        //console.log("Fizz");
    } else if (number % 5 == 0 && number % 3 != 0) {
        //console.log("Buzz");
    } else if (number % 3 == 0 && number % 5 == 0) {
        //console.log("FizzBuzz");
    } else {
        //console.log(number);
    }
}

let string = "";
let line = ""
for (let num = 0; num <= 7; num++) {
    if (num % 2 == 0) {
        for (let subNum = 0; subNum <= 7; subNum ++) {
            if (subNum % 2 == 0) {
                line += " ";
            } else {
                line += "#";
            }
        }
    } else {
        for (let subNum = 0; subNum <= 7; subNum ++) {
            if (subNum % 2 == 0) {
                line += "#";
            } else {
                line += " ";
            }
        }
    }
    string = string + line + "\n";
    line = "";
 }
console.log(string);

