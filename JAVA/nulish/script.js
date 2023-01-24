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

//////////////////////////////////////////////////////
const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1993',
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
};

for (const key in user) {
    console.log(user[key]);
        
    }

    const arr = ['b','a','c'];

    for (const key in arr) {
            
        }
    
        /////////////////Сделать объект итерируемым///////////////////
        const salaries = {
            john: 500,
            ivan: 1000,
            ann: 5000
        };
        
        salaries[Symbol.iterator] = function () {
            return {
                current: this.john,
                last: this.ann,

                next() {
                    if (this.current < this.last) {
                        this.current = this.current  + 500;
                        return {done: false, value: this.current};
                    } else {
                        return {done: true};
                    }
                }
            };
        };

for (let res of salaries) {
    console.log(res);
};

/////////////////////////////////////////////////////
// const user = {
//     name: 'Alex',
//     surname: 'Smith',
//     birthday: '20/04/1993',
//     showMyPublicData: function() {
//         console.log(`${this.name} ${this.surname}`);
//     }
// };

const shops = [
    {rice: 500},
    {oil: 200},
    {bread: 50}
];


const map = new Map();

map.set(shops[0],5000)
   .set(shops[1],15000)
   .set(shops[2],25000);
console.log(map);