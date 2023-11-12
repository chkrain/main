// Объявление переменных для Педиатрии
var squarePed = document.getElementById("myPediatricsSquare");
var squareContainerPed = document.getElementById("myPediatricsContainer");

// Объявление переменных для Кардиологии
var squareCard = document.getElementById("myCardiologySquare");
var squareContainerCard = document.getElementById("myCardiologyContainer");

// Объявление переменных для Терапии
var squareTher = document.getElementById("myTherapySquare");
var squareContainerTher = document.getElementById("myTherapyContainer");

const mySquare = document.getElementById('mySquare');
const container3Background = document.querySelector('.container-3-background');

// Общий обработчик для всех квадратов
document.addEventListener('click', function (event) {
    // Square for Pediatrics
    const isInsideMySquarePed = isInsideElement(event, squarePed);
    if (isInsideMySquarePed) {
        toggleSquareContainer(squareContainerPed);
    } else {
        hideSquareContainer(squareContainerPed);
    }

    // Square for Cardiology
    const isInsideMySquareCard = isInsideElement(event, squareCard);
    if (isInsideMySquareCard) {
        toggleSquareContainer(squareContainerCard);
    } else {
        hideSquareContainer(squareContainerCard);
    }

    // Square for Therapy
    const isInsideMySquareTher = isInsideElement(event, squareTher);
    if (isInsideMySquareTher) {
        toggleSquareContainer(squareContainerTher);
    } else {
        hideSquareContainer(squareContainerTher);
    }

    // Square 1
    const isInsideMySquare = isInsideElement(event, mySquare);
    if (isInsideMySquare) {
        toggleContainer3Background();
    } else {
        container3Background.style.height = '496px'; // Исходная высота
    }
});

function isInsideElement(event, element) {
    return element && element.contains(event.target);
}

function toggleSquareContainer(container) {
    container.style.display = (container.style.display === 'block') ? 'none' : 'block';
}

function hideSquareContainer(container) {
    container.style.animation = 'fadeOut 0.3s ease forwards';
    setTimeout(function () {
        container.style.display = 'none';
        container.style.animation = '';
    }, 300);
}

function toggleContainer3Background() {
    if (container3Background.style.height === '1500px') {
        container3Background.style.height = '496px'; // Исходная высота
    } else {
        container3Background.style.height = '1500px';
    }
}