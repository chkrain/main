// Объявление переменных и массива для квадратов
const squareIds = ["myPediatrics", "myCardiology", "myTherapy", "myGynecology", "myUzi", "myBL", "myNev", "myLab", "myLog", "myPsi"];
const squares = squareIds.map(id => ({
  square: document.getElementById(`${id}Square`),
  container: document.getElementById(`${id}Container`)
}));

const mySquare = document.getElementById('mySquare');
const container3Background = document.querySelector('.container-3-background');

// Общий обработчик для всех квадратов
document.addEventListener('click', function (event) {
  squares.forEach(({ square, container }) => {
    const isInsideSquare = isInsideElement(event, square);
    if (isInsideSquare) {
      toggleSquareContainer(container);
      updateContainer3BackgroundHeight(container.id);
    } else {
      hideSquareContainer(container);
    }
  });
});

// Дополнительные функции
function toggleSquareContainer(container) {
  container.style.display = (container.style.display === 'block') ? 'none' : 'block';
}

function hideSquareContainer(container) {
  container.style.animation = 'fadeOut 0.3s ease forwards';
  setTimeout(function () {
    container.style.display = 'none';
    container.style.animation = '';

    // Проверка, открыты ли еще какие-то окна
    const anyOpenSquares = squares.some(({ container }) => {
      return container.style.display === 'block';
    });

    // Если нет открытых окон, установите исходную высоту container-3-background
    if (!anyOpenSquares) {
      container3Background.style.height = '496px';
    }
  }, 300);
}

function isInsideElement(event, element) {
  return element && element.contains(event.target);
}

function updateContainer3BackgroundHeight(squareId) {
  const heightMapping = {
    myPediatricsContainer: 1530,
    myCardiologyContainer: 944,
    myTherapyContainer: 1530,
    myGynecologyContainer: 2482,
    myUziContainer: 2908,
    myBLContainer: 536, 
    myNevContainer: 1530,
    myLabContainer: 2020,
    myLogContainer: 1418,
    myPsiContainer: 1448
  };

  if (heightMapping.hasOwnProperty(squareId)) {
    const newHeight = heightMapping[squareId];
    console.log(`Setting container-3-background height to ${newHeight}px`);
    container3Background.style.height = newHeight + 'px';
  } else {
    console.log(`SquareId ${squareId} not found in heightMapping.`);
  }
}