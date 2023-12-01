const containers = document.querySelectorAll('.container');
let currentIndex = 0;

function showContainer(index) {
    containers.forEach((container, i) => {
        container.classList.toggle('active', i === index);
    });
}

function showPreviousContainer(event) {
    event.preventDefault();
    currentIndex = (currentIndex - 1 + containers.length) % containers.length;
    showContainer(currentIndex);
}

function showNextContainer(event) {
    event.preventDefault();
    currentIndex = (currentIndex + 1) % containers.length;
    showContainer(currentIndex);
}

showContainer(currentIndex);

const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');

leftArrow.addEventListener('click', showPreviousContainer);
leftArrow.addEventListener('touchstart', showPreviousContainer);

rightArrow.addEventListener('click', showNextContainer);
rightArrow.addEventListener('touchstart', showNextContainer);