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



function findMaxNumber(a,b,c,d) {
  let numb = [a,b,c,d];
  for (let i = 0; i < 3; i++) {
    if (typeof(numb[i]) != "number" || typeof(numb[i]) == "NaN" || Number.isInteger(numb[i]) == false) {
    return(0);
    } else {
         return(Math.max(a,b,c,d));
    }
}
}

findMaxNumber(1,5,3,"5");