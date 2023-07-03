'use strict';

document.addEventListener('DOMContentLoaded', () => {
    alert('Hola Mundo');
});

document.addEventListener('DOMContentLoaded', () => {
    const header = console.log(document.querySelector('.header'));
    document.addEventListener('scroll', () => {
        header.classList.toggle('header--scroll', window.scrollY > 0);
        //const nav = document.querySelector('.nav');
    });
});
