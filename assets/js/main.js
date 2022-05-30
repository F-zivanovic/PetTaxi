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


// Validate contact form
const submitBtn = document.querySelector('.sbm-btn');
submitBtn.addEventListener('click', validateForm);


function validateForm() {

    var a = document.forms["contact"]["name"].value;
    var b = document.forms["contact"]["email"].value;
    var c = document.forms["contact"]["date"].value;
    var d = document.forms["contact"]["time"].value;
    var e = document.forms["contact"]["location_a"].value;
    var f = document.forms["contact"]["location_b"].value;
    var g = document.forms["contact"]["contact_phone"].value;
    if (a == null || a == "", b == null || b == "", c == null || c == "", d == null || d == "",
        e == null || e == "", f == null || f == "", g == null || g == "") {
        alert("Popunite obavezna polja u formi");
        return false;
    }
    else {
        alert("Podaci su uspešno prosleđeni");
    }
}

// Reset form  when click on button
const resetBtn = document.getElementById('reset-btn');
resetBtn.addEventListener('click', resetForm);

function resetForm() {
    const inputi = document.querySelectorAll('.form-control');

    for (input of inputi) {
        input.value = '';
    }
}


// Hide gallery popup
const closeBtn = document.querySelector('.gallery-popup > i');
closeBtn.addEventListener('click', hidePopup);

function hidePopup() {
    let popup = document.getElementById('gallery-preview');
    popup.classList.remove('visible');
}

// Show gallery popup
function init() {
    bindGalleryItems();
    bindKeyDown();
}

function bindGalleryItems() {
    let images = document.querySelectorAll('.gallery  a');

    for (let image of images) {
        image.addEventListener('click', showImage);
    }
}

function showImage(event) {
    event.preventDefault();

    let link = event.target.parentElement.href;

    let image = document.querySelector('.gallery-popup img');

    image.src = link;

    let popup = document.getElementById('gallery-preview');
    popup.classList.add('visible');

}

function bindKeyDown() {
    window.addEventListener('keydown', bindKeyDownHandler);
}

function bindKeyDownHandler(event) {
    switch (event.key) {
        case "Escape":
            hidePopup();
            break;

    }
}

window.addEventListener('load', init);