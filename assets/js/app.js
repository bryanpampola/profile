const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

const skillCards = document.querySelectorAll('.skills_card');

skillCards.forEach((card) => {
    card.addEventListener('click', function() {
        card.classList.toggle('active');
        card.querySelector('.skills_card_front').classList.toggle('active');
        card.querySelector('.skills_card_back').classList.toggle('active');
    })
});