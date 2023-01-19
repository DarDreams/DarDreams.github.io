//To string 
//1)
console.log(typeof(String(null)));
console.log(typeof(String(5)));


//2)
console.log(typeof(5+''));

const num = 5;
console.log("https://vk.com/catalog/" + num);

const fontSize = 26 + 'px';

// to Number
//1) 
console.log(typeof(Number("5")));
//2)
console.log(typeof(+"5"));

//3)
console.log(typeof(parseInt("15px",10)));

let answer = +prompt("","");

//To boolean 

//let x = [0, "", undefined, Nan];


//1)
let switcher = null;

if (switcher) {
    console.log("Working...");
}

//2)
console.log(typeof(Boolean("4")));

//3)
console.log(typeof(!!"4"));

