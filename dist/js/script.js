'use strict'

// Elements

const heroNavMenu = document.querySelector('#hero-nav-menu');
const heroNavBurger = document.querySelector('#hero-nav-btn-burger');

const roomsPrevBtn = document.querySelector('#rooms-arr-left');
const roomsNextBtn = document.querySelector('#rooms-arr-right');
const roomsSlider = document.querySelector('#rooms-slider');
const roomsSliderCards = document.querySelectorAll('.rooms-slider-card');

const blogPrevBtn = document.querySelector('#blog-arr-left');
const blogNextBtn = document.querySelector('#blog-arr-right');
const blogSlider = document.querySelector('#blog-slider');
const blogSliderCards = document.querySelectorAll('.blog-slider-card');

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

blogSliderCards.forEach((sliderCard) => {
    let cardDimensions = sliderCard.getBoundingClientRect();
    let cardWidth = cardDimensions.width + 30;

    blogNextBtn.addEventListener('click', () => {
        blogSlider.scrollLeft += cardWidth;
    });

    blogPrevBtn.addEventListener('click', () => {
        blogSlider.scrollLeft -= cardWidth;
    });
});