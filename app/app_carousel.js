/*--------- IntroCarousel ---------*/

const carousel = document.querySelector('.tours_carousel');
const btnPrev = carousel.querySelector('.slide_btn--prev');
const btnNext = carousel.querySelector('.slide_btn--next');

btnPrev.addEventListener('click', slidePrev);
btnNext.addEventListener('click', slideNext);

function slidePrev() {
    let slideAll = carousel.querySelectorAll('.tour_item');
    let currentSlide = carousel.querySelector('.active_slide');
    let slideArray = Array.from(slideAll);

    let coverAll = document.querySelectorAll('.intro_img');
    let currentCover = document.querySelector('.active_cover');
    let coverArray = Array.from(coverAll);
    
    let s = slideArray.indexOf(currentSlide);
    let c = coverArray.indexOf(currentCover);

    if(s > 0) {
        s = s - 1;
    } else {
        s = slideArray.length - 1;
    }

    if(c > 0) {
        c = c - 1;
    } else {
        c = slideArray.length - 1;
    }

    let slideActive = slideArray[s];
    let coverActive = coverArray[c];

    currentSlide.classList.remove('active_slide');
    currentCover.classList.remove('active_cover');

    slideActive.classList.add('active_slide');
    coverActive.classList.add('active_cover');
}

function slideNext() {
    let slideAll = carousel.querySelectorAll('.tour_item');
    let currentSlide = carousel.querySelector('.active_slide');
    let slideArray = Array.from(slideAll);

    let coverAll = document.querySelectorAll('.intro_img');
    let currentCover = document.querySelector('.active_cover');
    let coverArray = Array.from(coverAll);
    
    let s = slideArray.indexOf(currentSlide);
    let c = coverArray.indexOf(currentCover);

    if(s < slideArray.length -1) {
        s = s + 1;
    } else {
        s = 0;
    }

    if(c < slideArray.length -1) {
        c = c + 1;
    } else {
        c = 0;
    }

    let slideActive = slideArray[s];
    let coverActive = coverArray[c];

    currentSlide.classList.remove('active_slide');
    currentCover.classList.remove('active_cover');

    slideActive.classList.add('active_slide');
    coverActive.classList.add('active_cover');
}

