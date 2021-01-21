"use strict";

let userName = document.querySelector('.js-username');
let formName = document.forms.welcome["firstname"];
let btn = document.querySelector('.js-btn');

function name (event) {
userName.textContent=formName.value;
event.preventDefault()
}

btn.addEventListener('click', name);