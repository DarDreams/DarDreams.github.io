"use strict";

//const obj = new Object();





// delete options.name;
// console.log('options.name - ',options);

// let counter = 0;

// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//         console.log(`Свойство  ${i} имеет значение ${options[key][i]}`);     
//        // counter++;
//     }
// } else {
//     console.log(`Свойство  ${key} имеет значение ${options[key]}`);
//     counter++;
// }
// }

// console.log('counter',counter);

const options = {
    name: 'test',
    width: 1024,
    hieght: 1024,
    colors: {
        border: "black",
        bg: "red"
    },
    makeTest: function() {
        console.log("test");
    }
};

//console.log(Object.keys(options).length);

options.makeTest();

const {border, bg} = options.colors;
console.log(bg);


