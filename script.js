// Функция для последовательного появления текста
function typeText(elementId, text, index, interval) {
    if (index < text.length) {
        document.getElementById(elementId).innerHTML += text.charAt(index);
        index++;
        setTimeout(function () { typeText(elementId, text, index, interval); }, interval);
    }
}

// Функция для плавного появления секций
function slideUp(sectionClass) {
    var sections = document.querySelectorAll(`.${sectionClass}`);
    for (var i = 0; i < sections.length; i++) {
        sections[i].classList.add("slide-up");
    }
}

// Вызываем функции после загрузки страницы
window.onload = function() {
    typeText("welcome-message", "Добро пожаловать на мою страницу!", 0, 50);
    slideUp("section");
};
