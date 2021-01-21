"use strict";

let notif = document.querySelectorAll('.js-notification');

function timeSupp() {
   for (let element of notif) {
      element.remove();

   }
}
setTimeout(timeSupp, 5000)