//"use strict";

// 1) Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба (тоже базовая математика, иногда используется в создании анимаций). Эта функция принимает в себя целое число со значением длины ребра куба. Ответ выведите в формате строки, который изображен в примерах.
// Если в функцию попал неправильный аргумент или вычислить значения невозможно - вернуть строку "При вычислении произошла ошибка"
// НЕ ИСПОЛЬЗУЙТЕ ОПЕРАТОР СТЕПЕНИ ** - в онлайн среде браузера он не работает и тесты будут ломаться. Это из-за того, что этот оператор из более нового стандарта, чем тут доступен.
// Примеры:
// calculateVolumeAndArea(5)  => 'Объем куба: 125, площадь всей поверхности: 150'
// calculateVolumeAndArea(15)  => 'Объем куба: 3375, площадь всей поверхности: 1350'
// calculateVolumeAndArea(15.5)  => 'При вычислении произошла ошибка'
// calculateVolumeAndArea('15')  => 'При вычислении произошла ошибка'
// calculateVolumeAndArea(-15)  => 'При вычислении произошла ошибка'

function calculateVolumeAndArea(lenghtCube) {
    // let lenghtCube = 5.5;
    // console.log(Number.isInteger(lenghtCube));

    if (typeof(lenghtCube) != 'number' || Number.isInteger(lenghtCube) != true || lenghtCube < 0 ) { 
        console.log("При вычислении произошла ошибка");
        return;
    }

    let vCube = lenghtCube * lenghtCube * lenghtCube;
    let sCube = 6 * lenghtCube * lenghtCube;
    console.log(`Объем куба: ${vCube}, площадь всей поверхности: ${sCube}`);
}

//calculateVolumeAndArea(5);
calculateVolumeAndArea();

// Функция принимает только целое число от 1 до 36.
// Если переданный аргумент не число, отрицательное или дробное - возвращается сообщение:
// "Ошибка. Проверьте правильность введенного номера места"
// Если число 0 или больше 36, то сообщение: "Таких мест в вагоне не существует"
// Пример:
// getCoupeNumber(33)  => 9
// getCoupeNumber(7)  => 2
// getCoupeNumber(300)  => "Таких мест в вагоне не существует"
// getCoupeNumber(0)  => "Таких мест в вагоне не существует"
// getCoupeNumber(7.7)  => "Ошибка. Проверьте правильность введенного номера места"
// getCoupeNumber(-10)  => "Ошибка. Проверьте правильность введенного номера места"
// getCoupeNumber('Hello')  => "Ошибка. Проверьте правильность введенного номера места"



function getCoupeNumber(num) {
    if (Number.isInteger(num) == false || typeof(num) != "number" || num < 0) {
        console.log("Ошибка. Проверьте правильность введенного номера места");
        return("Ошибка. Проверьте правильность введенного номера места");
    }
    if ( num > 36 || num == 0 ) {
        console.log("Таких мест в вагоне не существует");
        return("Таких мест в вагоне не существует");
    }
    let vagon = Math.ceil(num / 4);
    return(vagon);
}
getCoupeNumber('heello');


// 1) Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки. (Смотри пример). Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры. Если вместо аргумента приходит не число, дробное или отрицательное число - функция возвращает строку "Ошибка, проверьте данные"
// Внимание! Давайте пока ограничимся максимум 600ю минутами (10 часов). Так как проверки на большие числа будут раздувать код (33 часа, 31 час, 11 часов и тд). Этого будет достаточно и код будет проверять именно этот промежуток (1 - 10 часов). Но вы можете реализовать и полный скрипт, он тоже должен проходить тесты.
// Пример:
// getTimeFromMinutes(150) => "Это 2 часа и 30 минут"
// getTimeFromMinutes(50) => "Это 0 часов и 50 минут"
// getTimeFromMinutes(0) => "Это 0 часов и 0 минут"
// getTimeFromMinutes(-150) => "Ошибка, проверьте данные"

function getTimeFromMinutes(min) {
    if (Number.isInteger(min) == false || typeof(min) != "number" || min < 0) {
        console.log("Ошибка, проверьте данные");
        return("Ошибка, проверьте данные");
    }

    let h = Math.floor(min / 60);
    let m = Math.floor(min % 60);

    let hT = "";

    switch (h) {
        case 0: hT="часов"; break;
        case 1: hT="час";   break;
        case 2: hT="часа"; break;
        case 3: hT="часа"; break;
        case 4: hT="часа"; break;
        default: hT = 'часов';
    }

    console.log(`Это ${h} ${hT} и ${m} минут`);
    return(`Это ${h} ${hT} и ${m} минут`);
}
getTimeFromMinutes(180);


// Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. 
//Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.
// Пример:
// findMaxNumber(1, 5, 6.6, 11); =>  11
// findMaxNumber(1, 5, '6', '10');  =>  0



// Место для второй задачи
function findMaxNumber(a,b,c,d) {
    if (typeof(a) !== "number" ||
        typeof(b) !== "number" ||
        typeof(c) !== "number" ||
        typeof(d) !== "number") {
        return 0;
    } else {
         console.log('Math.max(a,b,c,d)', Math.max(a,b,c,d));
         return(Math.max(a,b,c,d));
    }
}

// Это одна из классических задач в программировании на самых разных языках. Скорее всего вы слышали про числа Фибоначчи, где первые два числа равны 0 и 1, а каждое последующее число равно сумме двух предыдущих чисел. И на собеседованиях часто дают задачи, связанные с этими числами. Есть разные вариации и тут мы попробуем решить одну из них.
// Сразу скажу, что есть варианты решения через прием, называемый рекурсия. Он дальше по курсу. Но этот вариант нужно решить без её применения. Такие условия часто ставят на собеседованиях. Когда вы пройдете урок по рекурсии, вы можете вернуться в это задание и попробовать решить по другому. Так же подсказку (но не решение этой задачи) можно найти тут. Но постарайтесь не открывать 🙂
// Задача:
// Создайте функцию, которая будет принимать в себя один аргумент-целое положительное число. Она должна возвращать строку, в которой будут через пробел выведены числа Фибоначчи. Причем, их количество должно быть равно переданному аргументу.
// Если переданный аргумент не число - вернуть пустую строку. Решать без применения рекурсии.
// Пример:
// fib(4) => ''0 1 1 2"
// fib(7) => ''0 1 1 2 3 5 8"
// fib('7') => ''"
// fib(1) => "0"
// fib(0) => ''"

function fib(int) {
    const fibArray = [0, 1];
      let result = "";
    if (int == 1) {
        // console.log("0") ;
        result = "0";
        return result;   
    }
    if (typeof(int) !== 'number' || int === 0 || !Number.isInteger(int) ){
        // console.log("blank space");
        result = "";
        return result;    
    }
    else {
        for (let i = 2; i < int; i++) {
            fibArray[i] = fibArray[i-1]+fibArray[i-2];
        }
        for (let k = 0; k < int; k++) {
            result += " "+fibArray[k]; 
        }
        // console.log('result =', "|"+result.trim()+"|");
        return(result.trim());
    }
}
fib(7.2);

// 1) Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и возвращать строку с опытом.
// Пример: showExperience(personalPlanPeter) => '1 month'

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
             js: '20%',
             php: '10%',
             dlphi: "90%"
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(plan) {
        let {age} = plan;
        let {languages} = plan.skills;
        let str = `Мне ${age} и я владею языками: `;
        languages.forEach(function(lang) {
            
            str += `${lang.toUpperCase()} `;
        
        });
        console.log(str);
    return str;
    }
};

function showExperience(plan) {
    const {exp} = plan.skills;
    return exp;
}

//showExperience(personalPlanPeter);

// 2) Напишите функцию showProgrammingLangs, которая будет принимать в себя объект со всеми данными и возвращать строку в нужном виде.
// Пример:
// showProgrammingLangs(personalPlanPeter)  => "Язык js изучен на 20% Язык php изучен на 10%"

function showProgrammingLangs(plan) {
    let str = "";
    
    const {programmingLangs} = plan.skills;
    if (Object.keys(personalPlanPeter.skills.programmingLangs).length == 0) {console.log(0); return 0;}
    
    for (let key in programmingLangs) {
       str +=  `Язык ${key} изучен на ${programmingLangs[key]}\n`;
       
    }
    console.log(str);
    return str;
        
}
    
   // showProgrammingLangs(personalPlanPeter);

   personalPlanPeter.showAgeAndLangs(personalPlanPeter);


// Создайте метод showAgeAndLangs внутри объекта personalPlanPeter. При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде.
// Пример:
// personalPlanPeter.showAgeAndLangs(personalPlanPeter)
// => 'Мне 29 и я владею языками: RU ENG'
// Заметьте, что возраст и языки подставляются автоматически из объекта, а языки всегда в верхнем регистре (большими буквами). Если данные в объекте поменяются, то и сообщение тоже изменится.


// 1) Напишите функцию showFamily, которая будет принимать в себя массив строк и возвращать сообщение в нужном формате.
// showFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda'
// Имена подставляются автоматически из массива. Если массив пустой, то выводится сообщение 'Семья пуста'

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let str = "";
    arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из: '; 

    arr.forEach(member => {
        str += `${member} `;
    });
    console.log(str);
    return str;
} 

showFamily(family);


// 2) напишите функцию standardizeStrings, которая будет принимать в себя массив строк и будет выводить в консоль эти строки в нижнем регистре.
// Пример:
// standardizeStrings(favoriteCities)  выведет в консоль
// lisbon
// rome
// milan
// dublin

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
  arr.forEach(item => {
    console.log(item.toLowerCase());
});  
}

standardizeStrings(favoriteCities);



// 3) Задача с собеседований. Напишите функцию reverse, которая принимает в себя строку и возвращает эту строку в обратном порядке.
// Пример:
// const someString = 'This is some strange string';
// reverse(someString) => 'gnirts egnarts emos si sihT'
// Функцию можно применить к любой строке. Если в функцию приходит не строка - вернуть сообщение "Ошибка!"
// Это очень интересная задача, которую можно решить несколькими способами. Её дают для того, чтобы оценить навыки и знания программиста, посмотреть как он думает. Как небольшая подсказка, есть метод, который может вам помочь. И часть дополнительных вариантов решения мы тоже изучим в течении курса.

// Может показать сложной с первого взгляда, но это совсем не так 🙂

const someString = 'This is some strange string';

function reverse(str) {
    if (typeof(str) !== 'string') {
        return "Ошибка!";
    }
    console.log(str.split('').reverse().join(''));
    //return str.split('').reverse().join('');
}

reverse(someString);


// 4) Представьте такую реальную ситуацию. У вас есть банкомат, который выдает деньги из двух разных банков в разных валютах. Один банк основной с базовыми валютами, второй дополнительный с прочими валютами:
// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
// Вам нужно создать главную функцию банкомата availableCurr, которая принимает два аргумента: первый - это массив со всеми доступными валютами из двух банков сразу (сейчас представим, что они не могут повторяться), второй - необязательный аргумент, который указывает ту валюту, которая сейчас закончилась в банкомате. Если массив в первом аргументе пустой - то функция возвращает строку 'Нет доступных валют'. Функция возвращает строку в нужном виде.
// Пример:
// availableCurr(['UAH', 'RUB', 'CNY'], 'CNY')
// Вернет строку:
// Доступные валюты:
// UAH
// RUB
// Заметьте:
// - CNY (юань) исчез из списка валют, значит такая валюта закончилась
// - После валюты: стоит перенос строки \n, и после каждой валюты тоже. Это важно для тестов
// - Данные для первого аргумента должны приходить сразу из двух банков, причем сначала baseCurrencies, потом additionalCurrencies по порядку

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let str = '';
    arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';
    arr.forEach(curr => {
       if (curr !== missingCurr) {
        str += `${curr}\n`;
        }
    });
  console.log(str);
  return str;
}

availableCurr(['UAH', 'RUB', 'CNY'], 'CNY');