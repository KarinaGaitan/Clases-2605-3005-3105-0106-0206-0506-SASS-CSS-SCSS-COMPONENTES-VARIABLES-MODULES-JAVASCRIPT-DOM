'use strict';

document.addEventListener('DOMContentLoaded', () => {
    alert('Hola Mundo');
})

document.addEventListener('DOMContentLoaded', () => {
    console.log(document.querySelector('.header'));
    console.log(document.querySelector('.nav'));

    document.addEventListener('scroll', () => {
        console.log('Arena')
    });
});
