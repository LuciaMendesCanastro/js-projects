"use strict";

let btn = document.querySelector('.js-btn');
let notification = document.querySelector('.js-alert');
function newNumber (event) {
    event.preventDefault();
    notification.textContent=Math.floor(Math.random() * Math.floor(1000));
}

btn.addEventListener('click', newNumber);