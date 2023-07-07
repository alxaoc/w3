const text = "Ваш текст заголовка"; // Ваш текст, який буде набиратися
const terminalText = document.getElementById("terminal-text");

function typeText() {
    let index = 0;
    const typingInterval = setInterval(() => {
        terminalText.textContent = text.slice(0, index);
        index++;
        if (index > text.length) {
            clearInterval(typingInterval);
        }
    }, 100); // Швидкість набору тексту (в мілісекундах)
}

typeText();
