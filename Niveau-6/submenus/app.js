"use strict";
let link = document.querySelectorAll('.menu-item-link');
let subMenu = document.querySelector('.menu-item-submenu');

function menu(event) {
    event.preventDefault();
    subMenu.classList.toggle('menu-item-submenu')
}
for (let elements of link) {
elements.addEventListener('click', menu);
}