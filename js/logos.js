var logos = [
    "./img/logo.png",
    "./img/logo_1.png",
    "./img/logo_2.png",
    "./img/logo_3.png"
];

var logoContainer = document.getElementById("logo-container");
var logoImage = document.getElementById("logo-image");

function getRandomLogo() {
    var randomIndex = Math.floor(Math.random() * logos.length);
    return logos[randomIndex];
}

function displayRandomLogo() {
    var randomLogo = getRandomLogo();
    logoImage.src = randomLogo;
}

displayRandomLogo(); // Відображення випадкового логотипу

// Оновлення логотипу при кожному кліку
logoContainer.addEventListener("click", function() {
    displayRandomLogo();
});
