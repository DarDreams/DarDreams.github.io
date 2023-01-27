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


var date = new Date(1969, 0, 0, 0, 8, 0, 0);
console.log( date.setMilliseconds(date));

var ms = new Date();
console.log(ms.setTime(194*1000));
console.log(ms.getMinutes());
console.log(ms.getSeconds());
console.log(ms.getMilliseconds());





