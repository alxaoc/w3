// var logos = [
//     "./img/logo.png",
//     "./img/logo_1.png",
//     "./img/logo_2.png",
//     "./img/logo_3.png",
//     "./img/logo_4.png",
//     "./img/logo_5.png",
//     "./img/logo_6.png",
//     "./img/logo_7.png",
//     "./img/logo_8.png",
//     "./img/logo_9.png"
// ];
//
// var logoContainer = document.getElementById("logo-container");
// var logoImage = document.getElementById("logo-image");
//
// function getRandomLogo() {
//     var randomIndex = Math.floor(Math.random() * logos.length);
//     return logos[randomIndex];
// }
//
// function displayRandomLogo() {
//     var randomLogo = getRandomLogo();
//     logoImage.src = randomLogo;
// }
//
// displayRandomLogo(); // Відображення випадкового логотипу
//
// // Оновлення логотипу при кожному кліку
// logoContainer.addEventListener("click", function() {
//     displayRandomLogo();
// });

// Постійно новий логотипб який не повторюється при кліку
// var logos = [
//     "./img/logo.png",
//     "./img/logo_1.png",
//     "./img/logo_2.png",
//     "./img/logo_3.png",
//     "./img/logo_4.png",
//     "./img/logo_5.png",
//     "./img/logo_6.png",
//     "./img/logo_7.png",
//     "./img/logo_8.png",
//     "./img/logo_9.png"
// ];
//
// var logoContainer = document.getElementById("logo-container");
// var logoImage = document.getElementById("logo-image");
//
// var currentIndex = -1;
//
// function getNextLogoIndex() {
//     currentIndex = (currentIndex + 1) % logos.length;
//     return currentIndex;
// }
//
// function displayNextLogo() {
//     var nextLogoIndex = getNextLogoIndex();
//     var nextLogo = logos[nextLogoIndex];
//     logoImage.src = nextLogo;
// }
//
// displayNextLogo(); // Відображення першого логотипу
//
// // Оновлення логотипу при кожному кліку
// logoContainer.addEventListener("click", function() {
//     displayNextLogo();
// });

var logos = [
    "./img/logo.png",
    "./img/logo_1.png",
    "./img/logo_2.png",
    "./img/logo_3.png",
    "./img/logo_4.png",
    "./img/logo_5.png",
    "./img/logo_6.png",
    "./img/logo_7.png",
    "./img/logo_8.png",
    "./img/logo_9.png"
];

var logoContainer = document.getElementById("logo-container");
var logoImage = document.getElementById("logo-image");

function getRandomLogo() {
    var randomIndex = Math.floor(Math.random() * logos.length);
    return logos[randomIndex];
}

function displayRandomLogo() {
    var randomLogo = getRandomLogo();
    // Додаємо параметр запиту до URL логотипу, який змінюється при кожному виклику
    logoImage.src = randomLogo + "?t=" + Date.now();
}

displayRandomLogo(); // Відображення випадкового логотипу

// Оновлення логотипу при кожному кліку
logoContainer.addEventListener("click", function() {
    displayRandomLogo();
});

