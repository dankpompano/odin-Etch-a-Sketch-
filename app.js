const container = document.querySelector(".container");
const button = document.querySelector("#button");
const squaresSelector = document.querySelector(".squares");

for (let i = 0; i < 16; ++i) {
  for (let j = 0; j < 16; ++j) {
    const squares = document.createElement("div");
    squares.classList.add("squares");
    squares.addEventListener("mouseover", function () {
      squares.style.backgroundColor = "#40E882";
    });
    squares.addEventListener("mouseout", function () {
      squares.style.backgroundColor = "";
    });
    container.appendChild(squares);
  }
}

function newSquares() {
  button.addEventListener("click", function () {
    container.innerHTML = ""; //clear the original grid
    const userInput = prompt("How many squares per side would you like?");
    if (userInput <= 100) {
      for (let i = 0; i < userInput; ++i) {
        for (let j = 0; j < userInput; ++j) {
          const squares = document.createElement("div");
          squares.classList.add("squares");
          squares.addEventListener("mouseover", function () {
            squares.style.backgroundColor = "#40E882";
          });
          squares.addEventListener("mouseout", function () {
            squares.style.backgroundColor = "";
          });
          container.appendChild(squares);
        }
      }
    }
  });
}
