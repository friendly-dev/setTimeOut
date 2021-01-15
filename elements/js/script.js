'use strict';

const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart');

box.style.width = '1000px';
box.style.cssText = 'background-color: black; width: 500px';

circles[1].style.backgroundColor = 'aqua';