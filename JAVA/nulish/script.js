'use strict';

const box = document.querySelector('.box');

const newHeight = 100;
const newWidth = 400;

function changeParams(elem, h, w) {
    elem.style.height = `${h ?? 200}px`;
    elem.style.width = `${w ?? 200}px`;
}

changeParams(box, newHeight, newWidth);

let userName;
let userKey;

console.log(userName ?? userKey ?? 'user');

const block = document.querySelector('.box');
console.log(block?.textContent);
////////////////////////////////////////////////
const userData = {
    name: "Ivan",
    age: null,
    say : function() {
        console.log(`hello`);
    }
};

console.log(userData.skills?.js);

userData.say();
userData.sayy?.();

///////////////////////////////////////////////////
const boxesQuery = document.querySelectorAll('.box');
const boxesGet = document.getElementsByClassName('box');

boxesQuery.forEach(box => {
    if (box.matches('.this')) console.log('this one');
});

console.log(boxesQuery[0].closest('.wrapper'));

boxesQuery[0].remove();
boxesGet[0].remove();

for (let i = 0; i < 5; i++) {
    const div =document.createElement('div');
    div.classList.add('box');
    document.body.append(div);
}

console.log(boxesQuery);
console.log(boxesGet);
console.log(document.body.children);

console.log((Array.from(boxesGet)));

/////////////////////////////////////////////////////////////////////
const obj = {
    name: 'text',
    [Symbol('id')]: 1
};

let id = Symbol('id');
obj[id] = 1;
console.log(obj[id]);

const myAwesomeDB = {
    movies: [],
    actors: [],
    [Symbol('id')]: 123          //Object.getOwnPropertySymbols(obj)[0];
}

///Стороний код

myAwesomeDB.id = '2342342343';

///////////////////////////////////////////////////

const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1993',
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
};

Object.defineProperty(user,'birthda',{writeable: false});

console.log(Object.getOwnPropertyDescriptor(user, 'name'));

Object.defineProperty(user,'name',{writeable: false});
// Object.defineProperty(user,'gender',{value: 'male'});
// console.log(Object.getOwnPropertyDescriptor(user, 'gender'));

//writeable
//enumerable
//configurable
