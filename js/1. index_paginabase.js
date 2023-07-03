'use strict';

document.addEventListener('DOMContentLoaded', () => {
    alert('Hola Mundo');
});

document.addEventListener('DOMContentLoaded', () => {
    const header = console.log(document.querySelector('.header'));
    const nav = console.log(document.querySelector('.nav'));

    document.addEventListener('scroll', () => {
        header.classList.add('header--scroll');
    });
});
