const callBackBtn = document.querySelector('.header-call-back__button');
const iconCloseBtn = document.querySelector('.callback-form__close');
const callBackForm = document.querySelector('.callback-form');
const blackoutBackground = document.querySelector('.blackout-background');

let isOpen = false;

[callBackBtn, iconCloseBtn].forEach(item => item.addEventListener('click', handleClick));

document.addEventListener('click', (e) => {
    if (isOpen) {
        if (e.target !== callBackBtn && !callBackForm.contains(e.target)) {
            closeForm();
        }
    }
});

function handleClick(e) {
    if (!callBackForm.classList.contains('callback-form__active')) {
        openForm();
    } else {
        closeForm();
    }
}

function openForm() {
    isOpen = true;
    document.querySelector('body').style.overflow = 'hidden';
    blackoutBackground.classList.add('blackout-background--active');
    callBackForm.classList.add('callback-form__active');
}

function closeForm() {
    isOpen = false;
    document.querySelector('body').style.overflow = 'unset';
    blackoutBackground.classList.remove('blackout-background--active');
    callBackForm.classList.remove('callback-form__active');
}