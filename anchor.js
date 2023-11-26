document.addEventListener("DOMContentLoaded", function () {
    // Проверяем, есть ли якорь в URL
    if (window.location.hash) {
        // Используем якорь из URL для скролла
        const targetId = window.location.hash.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            setTimeout(function () {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }, 0);
        }
    }
});