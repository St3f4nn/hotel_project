'use strict'

// Elements

const heroNavMenu = document.querySelector('#hero-nav-menu');
const heroNavBurger = document.querySelector('#hero-nav-btn-burger');

const roomsPrevBtn = document.querySelector('#rooms-arr-left');
const roomsNextBtn = document.querySelector('#rooms-arr-right');
const roomsSlider = document.querySelector('#rooms-slider');
const roomsSliderCards = document.querySelectorAll('.rooms-slider-card');

// Event listeners

heroNavBurger.addEventListener('click', () => {
    heroNavMenu.classList.toggle('active');
});

roomsSliderCards.forEach((sliderCard) => {
    let cardDimensions = sliderCard.getBoundingClientRect();
    let cardWidth = cardDimensions.width + 30;

    roomsNextBtn.addEventListener('click', () => {
        roomsSlider.scrollLeft += cardWidth;
    });

    roomsPrevBtn.addEventListener('click', () => {
        roomsSlider.scrollLeft -= cardWidth;
    });
});