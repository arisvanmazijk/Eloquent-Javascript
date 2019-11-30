function range(start, end) {
    let array = [];
    for(; start <= end; start++) {
        array.push(start)
    }
    return array;
}

function sum(array) {
    let sum = 0;
    for(let num of array) {
        sum += num;
    }
    return sum;
} 

//console.log(sum(range(1,9)));

function reverseArray(array) {
    let reverseArray = [];
    for(let i of array) {
        reverseArray.unshift(i);
    }
    return reverseArray;
}

function reverseArrayInPlace(array) {
    for (let i = 0; i <= Math.floor(array.length / 2); i++) {
        let temp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temp;
    }
    return array;
}

//console.log(reverseArray([1, 2, 3, 4, 5, 6]));
//console.log(reverseArrayInPlace([1, 2, 3, 4]));

function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
        list = {value: array[i], rest: list};
    }
    return list;
}

function listToArray(list) {
    let array = [];
    for (let node = list; node; node = node.rest) {
        array.push(node.value);
    }
    return array;
}

function prepend(element, list) {
    let newList = {};
    newList.value = element;
    newList.rest = list;
    return newList;
}

// function nth(list, number) {
//     let int = 0;
//     for (let node = list; node; node = node.rest) {
//         if (int == number) {
//             return node.value;
//         } else {
//             int++;
//         }
//     }
// }

function nth(list, number) {
    if (!list) return undefined;
    else if (number == 0) return list.value;
    else return nth(list.rest, number - 1);
}

function deepEqual(value1, value2) {
    if (value1 === value2) return true;
    if (value1 == null || typeof value1 != "object" ||
    value2 == null || typeof value2 != "object") return false;
    let keysA = Object.keys(value1), keysB = Object.keys(value2);
    if (keysA.length != keysB.length) return false;
    for (let key of keysA) {
        if (!keysB.includes(key) || !deepEqual(value1[key], value2[key])) return false;
    }
    return true;
}

// console.log(arrayToList([10, 20, 30]));
// console.log(listToArray(arrayToList([10, 20, 30])));
// console.log(prepend(10, prepend(20, null)));
// console.log(nth(arrayToList([10, 20, 30]), 1));

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
console.log(deepEqual(10,null));