document.addEventListener("DOMContentLoaded", function () {
    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");
    const images = document.querySelectorAll(".image");
    let currentIndex = 0;

    function showImage(index) {
        images.forEach((image, i) => {
            image.style.display = i === index ? "block" : "none";
        });
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    function showPrevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }

    prevButton.addEventListener("click", showPrevImage);
    nextButton.addEventListener("click", showNextImage);

    // Показать первую картинку при загрузке страницы
    showImage(currentIndex);
});