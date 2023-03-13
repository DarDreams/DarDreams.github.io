//const btn = document.querySelector('.btn');

//   let timerId,
//       i = 0;


// btn.addEventListener('click', () => {
//    // const timerId = setTimeout(logger, 2000, 'hello');
//     timerId = setInterval(logger, 2000, 'hello');
// });





// function logger () {
//     if (i === 3) {
//         clearInterval(timerId);
//     }
//     console.log('text');
//     i++;
// }

// let id = setTimeout(function log() {
//     console.log('hello');
//     id = setTimeout(log,500);
// }, 500);

const btn = document.querySelector('.btn');
const elem = document.querySelector('.box');
let pos = 0;
//   let timerId,
//       i = 0;

function myAnimation() {
    pos++;
    elem.style.top = pos + 'px';
    elem.style.left = pos +'px';
    if (pos < 300) {
        requestAnimationFrame(myAnimation);    
    }

    
    
}

btn.addEventListener('click', () => requestAnimationFrame(myAnimation));

// let id = requestAnimationFrame(myAnimation)
// cancelAnimationFrame(id);