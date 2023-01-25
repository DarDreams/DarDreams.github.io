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
////////////////////SET униккальный массив без повторений////////////////////////////
const arr = ['Alex', 'Anna', 'Oleg', 'Alex'];

const set = new Set(arr);

set.add('Ivan');
set.add('Ivan');

console.log(set);

// set.delete(value);
// set.has(value);
// set.clear();
// set.size;

// for (const value of set) {console.log(value);}

// set.forEach((value, valueAgain, set) => {
//     console.log(value, valueAgain);
// });

// console.log(set.values());
// console.log(set.keys());
// console.log(set.entries());

function unique(arr) {
    return Array.from(new Set(arr));
}

console.log(unique(arr));



// В каждой книге есть n страниц с номерами страниц от 1 до n. Написать функцию amountOfPages, аргумент которой summary составляется путем сложения количества цифр всех номеров страниц. Эта функция возвращает число - количество страниц n в книге. Чтобы было понятно что такое количество цифр, давайте рассмотрим примеры.
// Пример:
// Если на входе функции summary = 25, то на результат должен быть 17. Всего в числах от 1 до 17 содержится 25 цифр: 1234567891011121314151617.
// Функция на вход как раз принимает это общее количество цифр, а возвращает конечное число, то есть последнюю страницу книги.
//         amountOfPages(5) => 5
//         amountOfPages(25) => 17
//         amountOfPages(1095) => 401   
//         amountOfPages(185) => 97

function amountOfPages(summary){
    let arr = [];
    let res = 0;
    for (let i = 0; i < summary; i++) {
        arr[i] = summary;
        summary += summary - 1;
         
    }
    return arr;
}

console.log(amountOfPages(5));

/////Панграмма — это предложение, в котором каждая буква алфавита встречается хотя бы по одному разу без повторений. Например, предложение «The quick brown fox jumps over the lazy dog» является панграммой, поскольку в нем хотя бы один раз используются буквы от A до Z (регистр значения не имеет).
//Напишите функцию isPangram, которая принимает в себя строку и возвращает логическое значение. Если строка является панграммой - вернется true, если нет - false.

function isPangram(string) {
  let arr = string.split("");
  const set = new Set(arr);
  console.log(set.size);
  if (set.size === 28) {
    return true
  } else {
    return false
  }
}

console.log(isPangram('The quick brown fox jumps over the lazy dog'));


// Создайте функцию deepCount, которая будет считать количество всех элементов в массиве, включая и вложенные массивы. Учтите, что сам вложенный массив тоже входит в счет. Чтобы понять задачу детальнее, давайте рассмотрим примеры:
// deepCount([1, 5, 3]) => 3
// deepCount(["1", 5, "3", ["10"]]) => 5 (Заметьте, что последний элемент был посчитан сам + его внутренность)
// deepCount([1, 2, [3, 4, [5]]]) => 7
// deepCount([]) => 0
// deepCount([[[[[[[[[]]]]]]]]]) => 8

function deepCount(a){
    let count = a.length;
    for (let i=0; i<a.length; i++) if (Array.isArray(a[i])) count += deepCount(a[i]);
    return count;
}

