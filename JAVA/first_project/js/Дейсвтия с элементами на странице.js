"use strict";

//https://learn.javascript.ru/css-selectors

const box = document.getElementById("box");



//console.log(box);

const buttons = document.getElementsByTagName('button');

//console.log(buttons[1]);

const circles = document.getElementsByClassName("circle");
//console.log(circles);

const hearts = document.querySelectorAll(".heart");

hearts.forEach(item => {
  //  console.log(item);
});

const oneHeart = document.querySelector(".heart");
//console.log(oneHeart);

// box.style.backgroundColor = 'blue';
// box.style.width = "500px";

box.style.cssText = "background-Color: blue;width: 500px;";

buttons[1].style.border = "solid 1px red";
buttons[1].style.borderRadius = "100%";

circles[0].style.backgroundColor = "red";

for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = "lime";
}

hearts.forEach(item => {
    item.style.backgroundColor = "green";
});

const div = document.createElement('div');
//const text = document.createTextNode("SEX");
div.classList.add("black");


const wrapper = document.querySelector(".wrapper");
wrapper.append(div);
//wrapper.appendChild(div);
//wrapper.prepend(div);
//hearts[2].before(div);
// hearts[0].after(div);
//wrapper.insertBefore(div,hearts[0]);
// circles[0].remove();
//wrapper.removeChild(hearts[1]);

// hearts[0].replaceWith(circles[0]);
//wrapper.replaceChild(circles[0], hearts[0]);

div.innerHTML = "<h1>Hello Wolrd</h1>";

//div.textContent = "Hello";

div.insertAdjacentHTML('afterend',"<h2>hello</h2>");

wrapper.querySelector('.heart');








