"use strict";

let item = document.querySelectorAll(".js-checklist-item");

function addRemove(event) {
    event.currentTarget.classList.toggle("checklist-item-checked");
}

for (let elements of item) {
    elements.addEventListener('click', addRemove);
}