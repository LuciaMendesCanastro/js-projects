"use strict";

let btn = document.querySelector('.js-btn');
let result = document.querySelector('.js-random');
let form = document.forms.tempConverterForm;
function number(event) {
    event.preventDefault();
    let mini = Number(form.minimum.value);
    let maxi = Number(form.maximum.value);
    result.textContent = Math.floor(Math.random() * (maxi - mini)) + mini;
    if (mini > maxi) {
        alert('Ton nombre minimum est plus grand que le maximum');
    }
}

form.addEventListener('submit', number);