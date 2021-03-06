// let array = ["Aris", "Indar", "Janka", "Theo", "Aad"];
// let names = ["Erszebet", "Jannie", "Agnes", "Niko", "Jeroen", "Indar"];

// function findName(array, names) {
//     for (let name of names) {
//         if (array.some(() => {
//             return array.includes(name);
//         })) return name;
//     }   
// }

// console.log(findName(array, names));

// Flattening
let arrays = [[1, 2, 3], [4, 5], [6]];
// console.log(arrays.reduce((current, element) => current.concat(element), []));
// → [1, 2, 3, 4, 5, 6]

// Your own loop
function loop(value, test, update, body) {
    for(let i = value; test(i); i = update(i)) {
        body(i);
    }
}

// loop(3, n => n > 0, n => n - 1, console.log);

// Everything
// function every(array, test) {
//     for(let i of array) {
//         if (!test(i)) return false;
//     }
//     return true;
// }

function every(array, test) {
    return !array.some(element => !test(element)); 
}

// console.log(every([1, 3, 5], n => n < 10));
// console.log(every([2, 4, 16], n => n < 10));
// console.log(every([], n => n < 10));

//Dominant writing direction
require('./scripts.js');

function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
      let name = groupName(item);
      let known = counts.findIndex(c => c.name == name);
      if (known == -1) {
        counts.push({name, count: 1});
      } else {
        counts[known].count++;
      }
    }
    return counts;
  }

  function characterScript(code) {
    for (let script of SCRIPTS) {
      if (script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })) {
        return script;
      }
    }
    return null;
  }  

function dominantDirection(text) {
    let scripts = countBy(text, char => {
      let script = characterScript(char.codePointAt(0));
      return script ? script.direction : "none";
    }).filter(({name}) => name != "none");
    
    return scripts.reduce((a,b)=>a.count < b.count ? b : a).name;
  }
  
  console.log(dominantDirection("Hello!"));
  // → ltr
  console.log(dominantDirection("Hey, مساء الخير"));
  // → rtl