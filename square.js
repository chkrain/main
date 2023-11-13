// Объявление переменных для Педиатрии
var squarePed = document.getElementById("myPediatricsSquare");
var squareContainerPed = document.getElementById("myPediatricsContainer");

// Объявление переменных для Кардиологии
var squareCard = document.getElementById("myCardiologySquare");
var squareContainerCard = document.getElementById("myCardiologyContainer");

// Объявление переменных для Терапии
var squareTher = document.getElementById("myTherapySquare");
var squareContainerTher = document.getElementById("myTherapyContainer");

// Объявление переменных для Гинекологии
var squareGyn = document.getElementById("myGynecologySquare");
var squareContainerGyn = document.getElementById("myGynecologyContainer");

// Объявление переменных для УЗИ
var squareUzi = document.getElementById("myUziSquare");
var squareContainerUzi = document.getElementById("myUziContainer");

// Объявление переменных для Больничных Листов
var squareBL = document.getElementById("myBLSquare");
var squareContainerBL = document.getElementById("myBLContainer");

// Объявление переменных для Неврологии
var squareNev = document.getElementById("myNevSquare");
var squareContainerNev = document.getElementById("myNevContainer");

// Объявление переменных для Лабораторной Диагностики
var squareLab = document.getElementById("myLabSquare");
var squareContainerLab = document.getElementById("myLabContainer");

// Объявление переменных для Логопеда
var squareLog = document.getElementById("myLogSquare");
var squareContainerLog = document.getElementById("myLogContainer");

// Объявление переменных для Психолога
var squarePsi = document.getElementById("myPsiSquare");
var squareContainerPsi = document.getElementById("myPsiContainer");

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

    // Square for Gynecology
    const isInsideMySquareGyn = isInsideElement(event, squareGyn);
    if (isInsideMySquareGyn) {
        toggleSquareContainer(squareContainerGyn);
    } else {
        hideSquareContainer(squareContainerGyn);
    }

    // Square for UZI
    const isInsideMySquareUzi = isInsideElement(event, squareUzi);
    if (isInsideMySquareUzi) {
        toggleSquareContainer(squareContainerUzi);
    } else {
        hideSquareContainer(squareContainerUzi);
    }

    // Square for BL
    const isInsideMySquareBL = isInsideElement(event, squareBL);
    if (isInsideMySquareBL) {
        toggleSquareContainer(squareContainerBL);
    } else {
        hideSquareContainer(squareContainerBL);
    }

    // Square for Neurology
    const isInsideMySquareNev = isInsideElement(event, squareNev);
    if (isInsideMySquareNev) {
        toggleSquareContainer(squareContainerNev);
    } else {
        hideSquareContainer(squareContainerNev);
    }

    // Square for Laboratory Diagnostics
    const isInsideMySquareLab = isInsideElement(event, squareLab);
    if (isInsideMySquareLab) {
        toggleSquareContainer(squareContainerLab);
    } else {
        hideSquareContainer(squareContainerLab);
    }

    // Square for Speech therapist
    const isInsideMySquareLog = isInsideElement(event, squareLog);
    if (isInsideMySquareLog) {
        toggleSquareContainer(squareContainerLog);
    } else {
        hideSquareContainer(squareContainerLog);
    }

    // Square for Psychology
    const isInsideMySquarePsi = isInsideElement(event, squarePsi);
    if (isInsideMySquarePsi) {
        toggleSquareContainer(squareContainerPsi);
    } else {
        hideSquareContainer(squareContainerPsi);
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