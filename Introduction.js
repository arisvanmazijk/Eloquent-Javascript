// let total = 0, count = 1;
// while (count <= 10) {
//   total += count;
//   count += 1;
// }
// console.log(total);

function myFirstFunction(n) {
  if (n == 0) {
    return 1;
  } else {
    return myFirstFunction(n - 1) * n;
  }
}

console.log(myFirstFunction(8));