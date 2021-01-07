'use strict';

// Деструктуризация объектов

// const options = {
//     name: 'Dmitriy',
//     age: 18,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function() {
//         console.log('Test');
//     }
// };


// options.makeTest();

// const { border, bg } = options.colors; /* вытаскиваем нужные свойсва */
/* console.log(Object.keys(options).length); */


/* console.log(options['colors']['border']);  */

/* delete options.name;
console.log(options);  */

// for (let key in options) { /* перевобор объекта */
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${key} имеет значение ${options[key][i]}`);
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     }
// }

// массивы и псевдомассивы

const arr = [1, 3, 5, 7, 9];
// // элемент массива, номер по порядку, ссылка на массив который мы перебираем
// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// arr.pop();
// arr.push('asd');

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

// const str = prompt('', '');
// const products = str.split(', ');
// products.sort();
// console.log(products.join('; '));

let a = 5,
    b = a;

b = 10 + b;

console.log(b);

const obj = {
    a: 5,
    b: 1
};

const copy = obj;

copy.a = 10;

console.log(copy);
console.log(obj);


function getCopy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 4,
    b: 5,
    c: {
        x: 7,
        y: 8
    }
};

const newNumbers = getCopy(numbers);

newNumbers.a = 10;

console.log(newNumbers);
console.log(numbers);