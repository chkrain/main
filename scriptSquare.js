var square = document.getElementById("mySquare");
var squareContainer = document.getElementById("mySquareContainer");

square.addEventListener("click", function() {
    squareContainer.style.display = "block";
});

document.addEventListener("click", function(event) {
    if (event.target !== square && event.target !== squareContainer) {
        squareContainer.style.display = "none";
    }
});