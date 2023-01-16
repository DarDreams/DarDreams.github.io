"use strict";

//arr.pop();
// arr.push("10");
// console.log('arr',arr);

const arr = [1, 2, 3, 6, 8];
//   const arr = {
//     0: 1,
//     1: 2,
//     2: 3,
//     3: 6,
//     4: 8
// };

const str = "10, 2, 32, 61, 8"; //prompt("","");
const products = str.split(", ");
products.sort(function(a,b) {
    return a - b;
});

console.log('products - ',products.join("; "));






arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);  
});

for (let i = 0; i < arr.length; i++) {
    console.log('arr[i]',arr[i]);
}

for (let value of arr) {
    console.log('value',value);
}


