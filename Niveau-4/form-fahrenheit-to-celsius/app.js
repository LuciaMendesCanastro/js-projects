"use strict";

let btn = document.querySelector('.js-btn');

function convert(event) {
    event.preventDefault();
    let userFahrenheit = document.forms.tempConverterForm['tempFahrenheit'].value;
    let fToCel = (userFahrenheit - 32) * 5 / 9;
    document.forms.tempConverterForm['tempCelsius'].value = fToCel;
}
btn.addEventListener('click', convert);