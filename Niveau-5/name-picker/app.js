"use strict";
let btn = document.querySelector('.js-btn');
let userNames = document.forms.ageCalculatorForm;
let names = [];
let text = document.querySelector('.js-result');

function storage(event) {
    event.preventDefault();
    names.push(userNames.prenom.value);
    console.log(names)
    
}
function random (event) {
    event.preventDefault();
    let randomNames = names[Math.floor(Math.random() * names.length)];
    text.textContent=randomNames;

}
userNames.addEventListener('submit', storage);
btn.addEventListener('click', random);