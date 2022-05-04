'use strict'

// Elements

const heroNavMenu = document.querySelector('#hero-nav-menu');
const heroNavBurger = document.querySelector('#hero-nav-btn-burger');

const adultsDecrementBtn = document.querySelector('.adults-decrement');
const adultsIncrementBtn = document.querySelector('.adults-increment');
const adultsNumber = document.querySelector('.adults-number');

let currentAdultsNumber = Number(adultsNumber.textContent);

const kidsDecrementBtn = document.querySelector('.kids-decrement');
const kidsIncrementBtn = document.querySelector('.kids-increment');
const kidsNumber = document.querySelector('.kids-number');

let currentKidsNumber = Number(kidsNumber.textContent);

const roomsPrevBtn = document.querySelector('#rooms-arr-left');
const roomsNextBtn = document.querySelector('#rooms-arr-right');
const roomsSlider = document.querySelector('#rooms-slider');
const roomsSliderCards = document.querySelectorAll('.rooms-slider-card');

const testimonialsPrevBtn = document.querySelector('#testimonials-arr-left');
const testimonialsNextBtn = document.querySelector('#testimonials-arr-right');
const testimonialsSlider = document.querySelector('#testimonials-slider');
const testimonialsSliderCards = document.querySelectorAll('.testimonials-slider-card');

const blogPrevBtn = document.querySelector('#blog-arr-left');
const blogNextBtn = document.querySelector('#blog-arr-right');
const blogSlider = document.querySelector('#blog-slider');
const blogSliderCards = document.querySelectorAll('.blog-slider-card');

// Event listeners

heroNavBurger.addEventListener('click', () => {
    heroNavMenu.classList.toggle('active');
});

adultsDecrementBtn.addEventListener('click', () => {
    if (currentAdultsNumber > 0) {
        currentAdultsNumber--;
        adultsNumber.textContent = currentAdultsNumber;
    } else {
        adultsNumber.textContent = 0;
    };
});

adultsIncrementBtn.addEventListener('click', () => {
    if (currentAdultsNumber >= 0 && currentAdultsNumber < 5) {
        currentAdultsNumber++;
        adultsNumber.textContent = currentAdultsNumber;
    } else if (currentAdultsNumber === 5) {
        adultsNumber.textContent = 5;
    };
});

kidsDecrementBtn.addEventListener('click', () => {
    if (currentKidsNumber > 0) {
        currentKidsNumber--;
        kidsNumber.textContent = currentKidsNumber;
    } else {
        kidsNumber.textContent = 0;
    };
});

kidsIncrementBtn.addEventListener('click', () => {
    if (currentKidsNumber >= 0 && currentKidsNumber < 5) {
        currentKidsNumber++;
        kidsNumber.textContent = currentKidsNumber;
    } else if (currentKidsNumber === 5) {
        kidsNumber.textContent = 5;
    };
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

testimonialsSliderCards.forEach((sliderCard) => {
    let cardDimensions = sliderCard.getBoundingClientRect();
    let cardWidth = cardDimensions.width + 34;

    testimonialsNextBtn.addEventListener('click', () => {
        testimonialsSlider.scrollLeft += cardWidth;
    });

    testimonialsPrevBtn.addEventListener('click', () => {
        testimonialsSlider.scrollLeft -= cardWidth;
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