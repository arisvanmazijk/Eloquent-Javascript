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
    let max = Math.floor(array.length / 2);
    for(let i = 0; i <= max; i++) {
        let temp = array[i];
        array[i] = array[array.length - 1 - i];
    }
    return array;
}

//console.log(reverseArray([1, 2, 3, 4, 5, 6]));
console.log(reverseArrayInPlace([1, 2, 3, 4, 5]));
