"use strict";

let balloons = document.querySelectorAll('.js-balloon');
let resultat = document.querySelector('.js-result');
let recommencer = document.querySelector('.js-btn');
let debut;
let fin;

function theBalloons(event) {
    event.currentTarget.classList.toggle('balloon-hidden');
    let hiddenBalloons = document.querySelectorAll('.balloon-hidden');
    console.log(hiddenBalloons);
    if (hiddenBalloons.length === 1) {
        debut = Date.now();
    } else if (hiddenBalloons.length === 14) {
       fin = Date.now();
       resultat.textContent = "Tu as pris " + (fin - debut)/1000 + " secondes a éclater tout les ballons";


    }
    console.log(debut);
    console.log(fin);
    console.log(hiddenBalloons.length);

}

function refresh() {
    document.location.reload(true);
}
for (let elements of balloons) {
    elements.addEventListener('click', theBalloons);
}
recommencer.addEventListener('click', refresh);
