"use strict";

let btn = document.querySelector('.js-btn');
let notification = document.querySelector('.js-alert');
let random = Math.floor(Math.random() * (1000));
let clickCount=0;
let Answer = document.querySelector('.js-answer');

console.log(notification)
function randomNumber(event) {
    event.preventDefault();
    console.log(random)
    let userGuess = document.forms.guessForm['proposition'].value;
    console.log(userGuess)
    clickCount++
    if (clickCount === 5) {
        Answer.textContent='La bonne réponse était ' + random;
    } else if (Number(userGuess) > random) {
        notification.textContent = "C'est moins !";
        notification.classList.replace("alert-info", "alert-danger");
    } else if (Number(userGuess) < random) {
        notification.textContent = "C'est plus !";
        notification.classList.replace("alert-info", "alert-danger");
    } else if (Number(userGuess) === random) {
        notification.textContent = "C'est gagné ! Le nombre a deviné était bien " + random;
        notification.classList.replace("alert-info", "alert-success");
        notification.classList.replace("alert-danger", "alert-success");
        function timeReload() {
            notification.textContent = "Devine le nombre (compris entre 0 et 1000) !";
            notification.classList.replace("alert-success", "alert-info");
            random = Math.floor(Math.random() * (1000));
        }
    
        setTimeout(timeReload, 5000);
    }
}
btn.addEventListener('click', randomNumber);