// Обработчик события клика на ссылки с якорем
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Получаем идентификатор якоря из атрибута href
        const targetId = this.getAttribute('href').substring(1);

        // Находим элемент с соответствующим идентификатором
        const targetElement = document.getElementById(targetId);

        // Прокручиваем до элемента
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});