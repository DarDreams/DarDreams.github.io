"use strict";

let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// while (num <= 55) {
//     console.log(num);
//     num++;
// };

// do  {
//     console.log(num);
//     num++;
// } 

// while (num <= 55);

// for (let i = 1; i < 10; i++) {
//     if (i == 6) {
//         // break;
//         continue;
//     }
//     console.log(i);
// }

for (let i = 0; i < 3; i++) {
    console.log(i);
    for (let j = 0; j < 3; j++) {
        console.log(j);
    }
}

let result = '';
const length = 10;

for (let i = 1; i < length; i++) {
    for (let j = 0; j < i; j++) {
        result += "*";
    }
    result += '\n';
}

console.log(result);

first: 
for (let i = 0; i < 3; i++) {
    console.log(`first level: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`second level: ${j}`);
        for (let k = 0; k < 3; k++) {
            if (k === 2) break first;
            console.log(`third level: ${k}`);
        }
    }
}


    // Пишем решение вот тут
    for (let i = 5; i <= 10; i++) {
        console.log(i)
    }

    for (let k = 20; k >= 10; k--) {
        console.log(k)
    }

    for (let j = 2; j <= 10; j += 2) {
        console.log(j)
    }
    
//     for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

let i = 2;

while (i <= 16) {
    i++;
    if (i % 2 === 0) {
                continue;
            } else {
                console.log(i);
            }
}

// Заполните массив цифрами от 5 до 10 включительно. Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]




console.log(`${arrayOfNumbers[0]} + ${arrayOfNumbers[2]} + ${arrayOfNumbers[3]} + ${arrayOfNumbers[4]}`);


const arrayOfNumbers = [];

for (let i = 5; i < 11; i++) {
    arrayOfNumbers[i - 5] = i;
}

console.log(arrayOfNumbers);
// ------------------------------------------------------
// Заполните новый массив (result) числами из старого (arr). Количество элементов в массиве можно получить как arr.length, а к элементам обращаемся все так же: arr[0], arr[1] и тд.
// Должен получиться точно такой же массив

    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
 
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    // Пишем решение вот тут
        for (let i = 0; i < arr.length; i++) {
        result[i] = arr[i];
    }


    console.log(result);
    
//

// Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка строка - то к ней было добавлено " - done".
// Для определения типа данных используйте typeof();
// Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];

    for (let i = 0; i < data.length; i++) {
        if (data[i] > 0) {
            data[i] = data[i]+data[i];
        }
    }
    console.log(data);
    
    