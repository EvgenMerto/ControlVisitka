// Функция для последовательного появления текста
function typeText(elementId, text, index, interval) {
    if (index < text.length) {
        document.getElementById(elementId).innerHTML += text.charAt(index);
        index++;
        setTimeout(function () { typeText(elementId, text, index, interval); }, interval);
    }
}

// Функция для анимации появления секций
function showSections() {
    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => {
        section.classList.add(section.className.includes("left") ? "slide-from-left" : "slide-from-right");
    });
}

// Вызываем функции после загрузки страницы
window.onload = function() {
    typeText("welcome-message", "Добро пожаловать на мою страницу!", 0, 50);
    showSections();
};
