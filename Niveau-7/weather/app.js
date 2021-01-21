"use strict";

let form = document.forms.weatherForm;
let userChoice = form.ville;
let btn = document.querySelector('.js-btn');
let ville = document.querySelector('.js-city');
let date = document.querySelector('.js-date');
let temperature = document.querySelector('.js-temperature');
let imagePrincipale = document.querySelector('.js-img');
let info = document.querySelector('.js-info');
let infoDescription = document.querySelector('.js-info-description');
let vent = document.querySelector('.js-wind-speed');
let humidite = document.querySelector('.js-humidity');
let precipitations = document.querySelector('.js-rain');
let neige = document.querySelector('.js-snow');
let traduction = 
function meteoStatus(event) {
    event.preventDefault();
    let request = new XMLHttpRequest();
    request.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=' + document.forms.weatherForm.ville.value + '&appid=21c648a48875373e9ee6429cbe81f964&units=metric&lang=fr');
    request.send();
    request.addEventListener('load', function updateMeteo(event) {
        event.preventDefault();
        if (request.status === 200) {
            console.log(request.response);
            let text = JSON.parse(request.response);
            console.log(text)
            ville.textContent = userChoice.value.charAt(0).toUpperCase() + userChoice.value.substring(1).toLowerCase();
            let accurateDate = new Date();
            let dayNameFr = accurateDate.toLocaleDateString('fr-FR', {weekday: 'long'}) 
            date.textContent= dayNameFr.charAt(0).toUpperCase() + dayNameFr.substring(1).toLowerCase() + ", " + accurateDate.getHours() + " h " + accurateDate.getMinutes();;
            console.log(date)
            imagePrincipale.setAttribute('src', 'http://openweathermap.org/img/wn/' + text.weather[0].icon + '@2x.png')
            temperature.textContent = text.main.temp;
            vent.textContent = text.wind.speed;
            humidite.textContent = text.main.humidity;
            info.textContent = text.weather[0].main;
            infoDescription.textContent = text.weather[0].description;
            if (text.hasOwnProperty(text.rain)) {
                precipitations.textContent = text.rain['1h'];
            }
            if (text.hasOwnProperty(text.snow)) {
                neige.textContent = text.snow['1h'];
            }
        } else {
            alert('Une erreur est survenue !');
        }
    });
}
form.addEventListener('submit', meteoStatus);