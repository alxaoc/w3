// Зміна теми
function toggleTheme() {
    var body = document.querySelector('body');
    body.classList.toggle('dark');
}

// Іконка
// function toggleTheme() {
//     var body = document.querySelector('body');
//     var themeIcon = document.getElementById('theme-icon');
//
//     body.classList.toggle('dark');
//     themeIcon.src = body.classList.contains('dark') ? './img/icon-dark.png' : './img/icon-light.png';
// }