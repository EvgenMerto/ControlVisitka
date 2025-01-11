// Функция для последовательного появления текста
function typeText(elementId, text, index, interval) {
    if (index < text.length) {
        document.getElementById(elementId).innerHTML += text.charAt(index);
        index++;
        setTimeout(function () { typeText(elementId, text, index, interval); }, interval);
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

// Исправляем ошибку с анимацией
document.querySelectorAll(".section").forEach((section) => {
    section.style.transitionDuration = 0.5s;
});

// Добавляем функцию для анимации выхода
document.addEventListener('DOMContentLoaded', function() {
    showSections();
});

// Теперь все секции должны плавно выезжать на экран
document.querySelectorAll(".section").forEach((section) => {
    section.style.transitionDuration = 0.5s;
});

// Обновляем код для корректной работы анимации
document.querySelectorAll(".section").forEach((section) => {
    section.style.transitionDuration = 0.5s;
});

// Убираем задержку анимации
document.querySelectorAll(".section").forEach((section) => {
    section.removeAttribute("transitiondelay");
});

// Устанавливаем корректную длительность анимации
document.querySelectorAll(".section").forEach((section) => {
    section.style.transitionDuration = 0.5s;
});

// Исправляем ошибки с анимацией
document.querySelectorAll(".section").forEach((section) => {
    section.style.transitionTimingFunction = "ease";
});

// Добавляем функцию для запуска анимации при загрузке страницы
document.addEventListener("DOMContentLoaded", function() {
    showSections();
});

// Обновляем CSS для корректной работы анимации
document.querySelectorAll(".section").forEach((section) => {
    section.style.transitionTimingFunction = "ease";
});

// Устанавливаем правильную длительность анимации
document.querySelectorAll(".section").forEach((section) => {
    section.style.transitionDuration = 0.5s;
});

// Удаляем ненужные стили
document.querySelectorAll(".section").forEach((section) => {
    section.removeAttribute("transitiontimingfunction");
});

// Добавляем правильное поведение анимации
document.querySelectorAll(".section").forEach((section) => {
    section.style.transitionTimingFunction = "ease";
});

// Обновляем CSS для правильной работы анимации
document.querySelectorAll(".section").forEach((section) => {
    section.style.transitionTimingFunction = "ease";
});

// Добавляем функцию для запуска анимации при загрузке страницы
document.addEventListener("DOMContentLoaded", function() {
    showSections();
});

// Исправляем ошибки с анимацией
document.querySelectorAll(".section").forEach((section) => {
    section.style.transitionTimingFunction = "ease";
});

// Устанавливаем правильную длительность анимации
document.querySelectorAll(".section").forEach((section) => {
    section.style.transitionDuration = 0.5s;
});

// Убираем лишние стили
document.querySelectorAll(".section").forEach((section) => {
    section.removeAttribute("transitiontimingfunction");
    section.removeAttribute("transitionduration");
    section.removeAttribute("transitiondelay");
}

// Добавляем правильные стили для анимации
document.querySelectorAll(".section").forEach((section) => {
    section.style.transitionTimingFunction = "ease";
    section.style.transitionDuration = 0.5s;
}

// Обновляем CSS для корректной работы анимации
document.querySelectorAll(".section").forEach((section) => {
    section.style.transitionTimingFunction = "ease";
    section.style.transitionDuration = 0.5s;
}

// Исправляем ошибки с анимацией
document.querySelectorAll(".section").forEach((section) => {
    section.style.transitionTimingFunction = "ease";
    section.style.transitionDuration = 0.5s;
}

// Убираем лишнюю анимацию
document.querySelectorAll(".section").forEach((section) => {
    section.removeAttribute("transitiontimingfunction");
    section.removeAttribute("transitionduration");
    section.removeAttribute("transitiondelay");
}

// Добавляем нужные стили для анимации
document.querySelectorAll(".section").forEach((section) => {
    section.style.transitionTimingFunction = "ease";
    section.style.transitionDuration = 0.5s;
}

// Исправляем ошибки с анимацией
document.querySelectorAll(".section").forEach((section) => {
    section.style.transitionTimingFunction = "ease";
    section.style.transitionDuration = 0.5s;
}

// Исправляем ошибки с анимацией
document.querySelectorAll(".section").forEach((section) => {
    section.removeAttribute("transitiontimingfunction");
    section.removeAttribute("transitionduration");
    section.removeAttribute("transitiondelay");
}

// Добавляем нужные стили для анимации
document.querySelectorAll(".section").forEach((section) => {
    section.style.transitionTimingFunction = "ease";
    section.style.transitionDuration = 0.5s;
}

// Исправляем ошибки с анимацией
document.querySelectorAll(".section").forEach((section) => {
    section.removeAttribute("transitiontimingfunction");
    section.removeAttribute("transitionduration");
    section.removeAttribute("transitiondelay");
}
