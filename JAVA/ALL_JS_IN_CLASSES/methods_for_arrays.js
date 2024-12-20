'use strict';

//filter

// const names = ['ivan', 'ann', 'ksenia', 'voldemart'];

// const shortNames = names.filter(function(name) {
//     return name.length < 5;
// });

// console.log(shortNames);

//map

let answers = ['IvAn', 'AnnA', 'Hello'];

answers = answers.map(item => item.toLowerCase());

console.log(answers)

//  every/some

// const some = [4, 5, 6];
// console.log(some.some(item => typeof(item) === 'number'));
// console.log(some.every(item => typeof(item) === 'number'));

// reduce

// const arr = [4, 5, 1, 3, 2, 6];

// const res = arr.reduce((sum, current) => sum + current);

// console.log(res);

// const arr = ['apple', 'pear', 'plum'];

// const res = arr.reduce((sum, current) => `${sum}, ${current}`,'sugar');

// console.log(res);

const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'amimal',
    cat: 'animal'
}

const newArr = Object.entries(obj)
.filter(item => item[1] === 'persone')
.map(item => item[0]);

console.log(newArr);
