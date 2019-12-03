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

let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(arrays.reduce((current, element) => current.concat(element)));
// → [1, 2, 3, 4, 5, 6]