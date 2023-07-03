'use strict';

document.addEventListener('DOMContentLoaded', () => {
    alert('Hola Mundo');
});

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const nav = document.querySelector('.nav');
    /*Se selecciona con querySelector para poder utilizar selectores CSS*/
    document.addEventListener('scroll', () => {
        header.classList.toggle('header--scroll', window.scrollY > 0);
        nav.classList.toggle('nav--scroll', window.scrollY > 0);
        /*Toggle es para que aparezca la separación cuando estoy lejos y desaparezca cuando estoy cerca*/

    });
});
