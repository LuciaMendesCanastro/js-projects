"use strict";

let btn = document.querySelector('.js-btn');
let colors = ["pink", "red", "green", "purple", "yellow",];
let randomColor = Math.floor(Math.random() * colors.length);
let card = document.querySelector('.js-color');
let nouveauStyle = document.querySelector('.js-color-box');

function theColors(event) {
    event.preventDefault();
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    card.textContent = randomColor;
    nouveauStyle.style.backgroundColor = randomColor;
    nouveauStyle.style.color="white";
}
btn.addEventListener('click', theColors)