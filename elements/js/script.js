'use strict';

const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart'),
    section = document.querySelector('.new__section');


box.style.width = '1000px';
box.style.cssText = 'background-color: black; width: 500px';

circles[1].style.backgroundColor = 'aqua';

hearts.forEach(item => {
    item.style.backgroundColor = 'yellow';
});

const p = document.createElement('p');

p.classList.add('black');

// const a = document.createElement('a');
// a.classList.add('black');

// document.body.append(p);

// section.append(p);

// section.prepend(p)

hearts[1].after(p);

// btns[0].remove();
// btns[1].replaceWith(hearts[0]);