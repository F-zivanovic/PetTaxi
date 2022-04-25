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

