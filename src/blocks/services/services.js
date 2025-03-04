const sliderCards = document.querySelector('.services__cards');
const sliderContainer = document.querySelector('.services__cards-container');
const firstServiceCard = document.querySelector('.services-card');
const arrowLeftEl = document.querySelector('.services__arrow-left');
const arrowRightEl = document.querySelector('.services__arrow-right');

// settings slider
let startCardNumber = 0;
let offset = 0;
let maxDisplayCards = document.querySelectorAll('.services-card').length;
let shift = 1;

const widthCard = firstServiceCard.getBoundingClientRect().width;
const spacing = 30;
const offsetX = (widthCard + spacing) * shift;
let offsetAmount = 0;

window.addEventListener('resize', getVisibleSlidesCount);

arrowLeftEl.addEventListener('click', handleLeftClick);
arrowRightEl.addEventListener('click', handleRightClick);

getVisibleSlidesCount();
function getVisibleSlidesCount() {
    if (window.innerWidth > 1530) {
        setValuesSlider(4);
    }

    if (window.innerWidth <= 1530) {
        setValuesSlider(3);
    }

    if (window.innerWidth <= 1200) {
        setValuesSlider(2);
    }

    if (window.innerWidth <= 768) {
        setValuesSlider(1);
    }
}

function setValuesSlider(start) {
    startCardNumber = start;
    offset = start;
}

function handleLeftClick() {
    if (offset <= startCardNumber) {
        return;
    }

    offset -= shift;
    offsetAmount -= offsetX;
    sliderContainer.style.transform = `translateX(-${offsetAmount}px)`;
}

function handleRightClick() {
    if (offset >= maxDisplayCards) {
        return;
    }

    offset += shift;
    offsetAmount += offsetX;
    sliderContainer.style.transform = `translateX(-${offsetAmount}px)`;
}