let str = "some";
let strObj = new String(str);

console.log('typeof(str)',typeof(str));
console.log('typeof(strObj)',typeof(strObj));

console.dir([1,2,3]);




const soldier = {
    healths: 400,
    armor: 100,
    sayHello: function() {
        console.log("hello");
    }
};

const john = Object.create(soldier);  // СОЗДАЕТ ПРОТОТИП


// const john = {
//     healths: 100,

// };

//john.__proto__ = soldier;  //УСТАРЕВШЕЕ
 
//Object.setPrototypeOf(john, soldier); УСТАНАВЛИВАЕТ ПРОТОТИП

//console.log('john',john.armor);
john.sayHello();