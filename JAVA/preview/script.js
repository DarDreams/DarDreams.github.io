"use strict";
//СОБЫТИЯ
//https://oddler.ru/blog/i63  
//https://developer.mozilla.org/ru/docs/Web/Events
    
const btn = document.querySelectorAll("button");
const overlay = document.querySelector(".overlay");

// btn.onclick = function() {
//     alert("RABOTAET???");
// };


//let i = 0;
const deleteElement = (event) => {
    //e.target.remove();
    console.log(event.target);     //currentTarget;
    console.log(event.type);
    // i++;
    // if (i == 1) {
    //     btn.removeEventListener("click", (deleteElement));
    // }
};

// btn.addEventListener("click", deleteElement);
// overlay.addEventListener("click", deleteElement);

btn.forEach(btn => {
    btn.addEventListener("click", deleteElement, {once:true});
});

const link = document.querySelector("a");

link.addEventListener("click", function(event) {
    event.preventDefault();
    console.log(event.target);
});

///////////////////////
const video = document.getElementsByTagName("video")[0];

const time = video.currentTime;



let timerId2 = setInterval(() => console.log(document.getElementsByTagName("video")[0].currentTime), 2000);
    
let timerId2 = setInterval(() => console.log(document.getElementsByTagName("video")[0].currentTime), 2000);

let func = (arg1, arg2, ...argN) => expression;