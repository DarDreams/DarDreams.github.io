'user strict';
const btns = document.querySelectorAll('button');

//console.log(btns[0].classList.length);
//console.log(btns[0].classList.item(0));
//console.log(btns[0].classList.add('red', 'eewr'));
//console.log(btns[0].classList.remove('red'));
btns[0].classList.toggle("sex");

if (btns[1].classList.contains('red')) {
    console.log(true);
};