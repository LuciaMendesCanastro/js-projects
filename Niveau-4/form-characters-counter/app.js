"use strict";

let btn = document.querySelector('.js-btn');
let info = document.querySelector('.js-info');
let userForm = document.forms.charactersCounterForm;

function nbCaracteres (event){
    event.preventDefault(); 
    info.textContent="Ce texte contient " + userForm.texte.value.length
    + " caractères";
}
btn.addEventListener('click', nbCaracteres)