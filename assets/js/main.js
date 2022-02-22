const toggle = document.querySelector('.toggle');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLink = document.querySelector('.nav-links');
const navLink1 = document.querySelector('.nav-links1');
const navLink2 = document.querySelector('.nav-links2');
const navLink3 = document.querySelector('.nav-links3');
const navLink4 = document.querySelector('.nav-links4');


// Close hamburger menu when click on link
navLink.addEventListener('click', closeHamburgerMenu);
navLink1.addEventListener('click', closeHamburgerMenu);
navLink2.addEventListener('click', closeHamburgerMenu);
navLink3.addEventListener('click', closeHamburgerMenu);
navLink4.addEventListener('click', closeHamburgerMenu);

function closeHamburgerMenu() {
    hamburgerMenu.classList.add('hidden');
}

// Open hamburger menu
toggle.addEventListener('click', openHamburgerMenu);

function openHamburgerMenu() {
    hamburgerMenu.classList.toggle('hidden');
}

