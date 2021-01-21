"use strict";
let btn = document.querySelector('.js-btn');
let clickCount = 0;
function doNotClick (event) {
    event.preventDefault();
    clickCount++;
    if (clickCount<3) {
        alert('Tu ne sais pas lire ?');   
        } else if(clickCount<10) {
            alert("Oh!! Arrête de cliquer");
        } else if (clickCount<15) {
            alert("Je vais m'enerver");
        } else if (clickCount<20) {
            alert("Arreeeeeeeeete");
        } else if (clickCount<25) {
            alert("Je te deteste");
        }
        
}

btn.addEventListener('click', doNotClick);