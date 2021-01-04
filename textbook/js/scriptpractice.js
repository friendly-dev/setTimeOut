'use strict';

// Деструктуризация объектов

const options = {
    name: 'Dmitriy',
    age: 18,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log('Test');
    }
};


options.makeTest();

const {border, bg} = options.colors; /* вытаскиваем нужные свойсва */
/* console.log(Object.keys(options).length); */


/* console.log(options['colors']['border']);  */

/* delete options.name;
console.log(options);  */

for (let key in options) {                 /* перевобор объекта */
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${key} имеет значение ${options[key][i]}`);
        }
        } else {
            console.log(`Свойство ${key} имеет значение ${options[key]}`);
    }
}

// массивы и псевдомассивы

const arr = [1, 3, 5, 7, 9];

arr.pop();
arr.push('asd');

console.log(arr);