const toggle = document.querySelector('.toggle');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const resetBtn = document.getElementById('reset-btn');

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

// Reset form  when click on button
resetBtn.addEventListener('click', resetForm);

function resetForm() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('date').value = '';
    document.getElementById('time').value = '';
    document.getElementById('location_a').value = '';
    document.getElementById('location_b').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('comment').value = '';
}