"use strict";
let btn = document.querySelectorAll('.js-btn');

function notifRemove(event) {
    event.preventDefault();
    event.currentTarget.parentElement.remove();      
}
for (let elements of btn) {
    elements.addEventListener('click', notifRemove);
}