let currentSlide = 0;
const slides = document.querySelectorAll('.without-arr-li');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

function showSlide(n) {
    slides[currentSlide].style.display = 'none';
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].style.display = 'block';
}

prevButton.addEventListener('click', () => showSlide(currentSlide - 1));
nextButton.addEventListener('click', () => showSlide(currentSlide + 1));

showSlide(currentSlide);
