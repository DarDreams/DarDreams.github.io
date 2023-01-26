'use strict';

const now = new Date();
console.log(now.getFullYear()); 
console.log(now.getMonth()); 
console.log(now.getDate()); 
console.log(now.getMilliseconds()); 
console.log(now.getDay()); 
console.log(now.getUTCHours()); 

console.log(now.getTimezoneOffset()); 

console.log(now.getTime()); 

let start = new Date();

for (let i = 0;i < 10000000; i++) {
    let some = i ** 3;
}

let end = new Date();

console.log(`WORK FOR ${end-start}mm`);
