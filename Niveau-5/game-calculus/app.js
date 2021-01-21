"use strict";

let firstNumber = document.querySelector('.js-first-number');
let secondNumber = document.querySelector('.js-second-number');
let btn = document.querySelector('btn');
let form = document.forms.calculusForm;
let random = Math.floor(Math.random() * Math.floor(100));
let secondRandom = Math.floor(Math.random() * Math.floor(100));
let goodResponse = document.querySelector('.js-good-answer');
let badResponse = document.querySelector('.js-bad-answer');
let bonneRep = 0;
let mauvaisesRep = 0;
let level = "easy";
let levels = document.querySelectorAll('.level');
let levelsBtn = document.querySelectorAll('.js-btn-levels')
let phrases = document.querySelector('.js-sentences');
firstNumber.textContent = random;
secondNumber.textContent = secondRandom;

function calculate(event) {
    event.preventDefault();
    let userGuess = Number(form.userResponse.value);
    let result = Number(random + secondRandom);
    if (userGuess === result) {
        phrases.textContent="Bien joué !";
        if (level === 'easy') {
            random = Math.floor(Math.random() * Math.floor(20));
            secondRandom = Math.floor(Math.random() * Math.floor(20));
        } else if (level === 'medium') {
            random = Math.floor(Math.random() * Math.floor(100));
            secondRandom = Math.floor(Math.random() * Math.floor(100));
        } else if (level === difficult) {
            random = Math.floor(Math.random() * Math.floor(1000));
            secondRandom = Math.floor(Math.random() * Math.floor(1000));
        }
        firstNumber.textContent = random;
        secondNumber.textContent = secondRandom;
        bonneRep++;
        goodResponse.textContent = "Tu as " + bonneRep + " bonnes réponses";
    } else {
        phrases.textContent='Essaye encore !';
        mauvaisesRep++
        badResponse.textContent = "Tu as " + mauvaisesRep + " mauvaises réponses";
    }
    form.userResponse.value='';

}
function newLevels(event) {
    event.preventDefault();
    level = event.currentTarget.getAttribute('data-difficulty');
    if (level === 'easy') {
        random = Math.floor(Math.random() * Math.floor(20));
        secondRandom = Math.floor(Math.random() * Math.floor(20));
    } else if (level === 'medium') {
        random = Math.floor(Math.random() * Math.floor(100));
        secondRandom = Math.floor(Math.random() * Math.floor(100));
    } else if (level === 'difficult') {
        random = Math.floor(Math.random() * Math.floor(1000));
        secondRandom = Math.floor(Math.random() * Math.floor(1000));
    }
    firstNumber.textContent = random;
    secondNumber.textContent = secondRandom;
}

for (let elements of levelsBtn) {
    elements.addEventListener('click', newLevels)
}

form.addEventListener('submit', calculate);