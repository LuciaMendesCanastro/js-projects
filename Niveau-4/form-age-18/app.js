"use strict";

let btn = document.querySelector('.js-btn');
let notification = document.querySelector('.js-alert');
let userAge = document.forms.welcome['age'];
function changeMessage(event) {
    event.preventDefault();
    if (userAge.value < 18) {
        notification.textContent = "Tu es mineur";
    } else if (userAge.value>=18) {
        notification.textContent = "Tu es majeur";
    }
}
btn.addEventListener('click', changeMessage);