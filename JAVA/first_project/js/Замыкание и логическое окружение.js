"use strict";
// let number = 5;

// function logNumber() {
//     console.log(number);
// }

// number = 6;
// logNumber();

function createCounter() {
    ++createCounter.counter;
    let counter = 0;
    const myFunction = function() {
        counter = counter + 1;
        return counter;
    };
    return myFunction;
}
createCounter.counter = 0;
createCounter();
createCounter();

//console.log(counter);

const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();

console.log(c1,c2,c3);

console.log(typeof(NaN));


const user = {
    name: 'Alex',
    age: 25
}
const {name, age} = user;

console.log(name);

console.log(0 || NaN || false || null);


function foo(a,b) {
    const [first] = a;
    const {eng} = b;
 
    return `${first} ${eng}`;
}
 
const result = foo(['Hello', 'Привет'], {ru: 'Мир', eng: 'World'});
console.log(result);

let time = '';
5 > 3 || 2 ? time = 'Day' : time = 'Night';
console.log(time);

let x = 5;
console.log(x++);

console.log([] = false - null + true);

let y= 1;
let x = y = 2; 
console.log(x);


