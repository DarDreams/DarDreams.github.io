"use strict";

if (4 == 9) {
console.log("OK");
} else {
    console.log("error");
}



// if (num < 49) {
//     console.log("error");
// } else if (num > 100){
//     console.log("много");
// } else {
//     console.log("OK");
// }

// (num == 50) ? console.log("OK") : console.log("error");

const num = 50;

switch (num) {
    case 49:
        console.log("НЕВЕРНО");
        break;
    case 100: 
        console.log("НЕВЕРНО");
        break;
    case 50:
        console.log("В точку!");
        break;
    default: 
        console.log("НЕ в этот раз");
        break;
}

// const hamburger = 3;
// const fries = 1;
// const cola = 0;

// console.log(hamburger === 3 && cola && fries);

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && 'asd');

// if (hamburger === 3 && cola === 1 && fries === 1) {
//     console.log("Все сыты");
// } else {
//     console.log("Мы уходим");
// }

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;


if (hamburger ===3 && cola === 2 || fries === 3 && nuggets) {
    console.log("Все сыты");
} else {
    console.log("Мы уходим");
}

let johnReport, alexReport, samReport, mariaReport = 'done';

console.log(johnReport || alexReport || samReport || mariaReport);

