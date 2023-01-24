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
