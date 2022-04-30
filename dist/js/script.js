'use strict'

// Elements

const heroNavMenu = document.querySelector('#hero-nav-menu');
const heroNavBurger = document.querySelector('#hero-nav-btn-burger');

// Event listeners

heroNavBurger.addEventListener('click', () => {
    heroNavMenu.classList.toggle('active');
});