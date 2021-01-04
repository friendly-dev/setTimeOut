'use strict';

const options = {
    name: 'Dmitriy',
    age: 18,
    colors: {
        border: 'black',
        bg: 'red'
    }
};

console.log(Object.keys(options));


/* console.log(options['colors']['border']);  */

/* delete options.name;
console.log(options);  */

for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${key} имеет значение ${options[key][i]}`);
        }
        } else {
            console.log(`Свойство ${key} имеет значение ${options[key]}`);
    }
}