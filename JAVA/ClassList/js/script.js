'use strict';
const btns = document.querySelectorAll('button');

//console.log(btns[0].classList.length);
//console.log(btns[0].classList.item(0));
//console.log(btns[0].classList.add('red', 'eewr'));
//console.log(btns[0].classList.remove('red'));
btns[0].classList.toggle("sex");

if (btns[1].classList.contains('red')) {
    console.log(true);
};

btns[0].addEventListener('click', () => {
    if (!btns[1].classList.contains('red')) {
        btns[1].classList.add('red');
    } else {
        btns[1].classList.remove('red');
    }
});

const wrapper = document.querySelector('.btn-block');

// wrapper.addEventListener('click', (event) => {
//     if (event.target && event.target.tagName == "BUTTON") {
//         console.log('hello');
//     }
// });

wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.matches('button.red')) {
        console.log('hello');
    }
});

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);