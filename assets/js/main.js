const toggle = document.querySelector('.toggle');
const hamburgerMenu = document.querySelector('.hamburger-menu');


// Close hamburger menu when click on link
let linkovi = document.querySelectorAll('#list > li');

for (link of linkovi) {
    link.addEventListener('click', () => {
        hamburgerMenu.classList.add('hidden');
    });
}


// Open hamburger menu when click on it
toggle.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('hidden');
});
