// Open/Close mobile menu

let hamburgerIcon = document.getElementById('nav__hamburger');
let navList = document.querySelector('.nav__list');

hamburgerIcon.addEventListener('click', () => {
    navList.classList.toggle('open');
});

// Close mobile menu when click on nav link
let navLinks = navList.querySelectorAll('.nav__list__link');
navLinks.forEach((link) => {

    link.addEventListener('click', () => {
        navList.classList.remove('open');
    });
});

// Close mobile menu when we scroll down
window.addEventListener('scroll', () => {
    navList.classList.remove('open');
});



// Dynamic date

getYear();

function getYear() {

    let copy = document.querySelector('FOOTER .date');
    let date = new Date();

    copy.innerHTML = date.getFullYear();

}