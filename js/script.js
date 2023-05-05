const hamburger_menu = document.querySelector('.hamburger-menu');
const container = document.querySelector('.container');

hamburger_menu.addEventListener('click', function () {
    container.classList.toggle('active');
})


const btn = document.querySelector('.close');
const nav = document.querySelector('nav');

btn.addEventListener('click', () => {
    btn.classList.toggle('closeBtn');
    nav.classList.toggle('show')
})