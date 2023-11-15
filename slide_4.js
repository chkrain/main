document.addEventListener("DOMContentLoaded", function () {
    const containers = document.querySelectorAll(".slider-with-svg > div[class^='c-4-']");
    let currentIndex = 0;

    function showContainer(index) {
        containers.forEach((container, i) => {
            container.style.display = i === index ? "block" : "none";
        });
    }

    document.querySelector(".cont-4-arr-left").addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + containers.length) % containers.length;
        showContainer(currentIndex);
    });

    document.querySelector(".cont-4-arr-right").addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % containers.length;
        showContainer(currentIndex);
    });

    // Изначально показываем первый контейнер
    showContainer(currentIndex);
});
