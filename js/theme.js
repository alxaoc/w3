// Зміна теми
function toggleTheme() {
    var body = document.querySelector('body');
    body.classList.toggle('dark');
}

// Зміна теми
// function toggleTheme() {
//     var body = document.querySelector('body');
//     body.classList.toggle('dark');
//
//     // Знайдіть всі елементи з класом "column-next"
//     var columnNextElements = document.querySelectorAll('.column-next');
//
//     // Пройдіться по всіх елементах і додайте або видаліть клас "dark" відповідно до поточного стану
//     columnNextElements.forEach(function(element) {
//         element.classList.toggle('dark');
//     });
// }

// Іконка
// function toggleTheme() {
//     var body = document.querySelector('body');
//     var themeIcon = document.getElementById('theme-icon');
//
//     body.classList.toggle('dark');
//     themeIcon.src = body.classList.contains('dark') ? './img/icon-dark.png' : './img/icon-light.png';
// }