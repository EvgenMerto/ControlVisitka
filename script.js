document.addEventListener("DOMContentLoaded", function() {
    // Находим все секции с классом "section"
    const sections = document.querySelectorAll(".section");
    
    // Проходим по каждой секции и добавляем соответствующий класс
    sections.forEach((section, index) => {
        if (index % 2 === 0) {
            section.classList.add("slide-from-left");
        } else {
            section.classList.add("slide-from-right");
        }
    });

    // Находим все подменю с классом "subsection"
    const subsections = document.querySelectorAll(".subsection");
    subsections.forEach(subsection => {
        subsection.addEventListener("mouseenter", () => {
            subsection.classList.add("active"); // Добавляем класс active при наведении
        });
        subsection.addEventListener("mouseleave", () => {
            subsection.classList.remove("active"); // Убираем класс active при уходе курсора
        });
    });
});
