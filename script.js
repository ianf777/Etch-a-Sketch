//Select the container
const container = document.querySelector(".grid");

function createGrid(SPS = 16) {
  //creates a div then adds squareRow class to said div 16x
  for (let i = 0; i < SPS; i++) {
    const squareRow = document.createElement("div");
    squareRow.classList.add("squareRow");
    //Creates a div 16x, adds 'square' class to each div before appending it to the newly created row.
    for (let j = 0; j < SPS; j++) {
      const square = document.createElement("div");
      square.classList.add("square");
      squareRow.appendChild(square);
    }
    //Adds the row containing 16 squares to the div 16x
    container.appendChild(squareRow);
  }
}
//Calls the grid function, placing the 16x16 default grid on the page
createGrid();

//selects every div with the 'square' class on the page, use forEach() method to apply an event listener to every square on the page that adds the "yellow" class to the classlist of the square when hovered over.
function lightUpSquares() {
  const squares = document.querySelectorAll(".square");
  squares.forEach(function (square) {
    square.addEventListener("mouseover", function () {
      square.classList.add("yellow");
    });
  });
}
lightUpSquares();

//removes the "yellow" class from squares
function resetSquares() {
  const squares = document.querySelectorAll(".square");
  squares.forEach(function (square) {
    square.classList.remove("yellow");
  });
}

//Selects the button with 'gridCreatorButton' class, create a function called 'setGrid()' that selects the input field then sets the value for our userInput equal to the value of the userInput field, set userInput equal to SPS(squares per side) parameter
function deleteCurrentGrid() {
  //Creates a nodelist with every element with "squareRow" class
  const allRows = document.querySelectorAll(".squareRow");
  allRows.forEach(function (row) {
    container.removeChild(row);
  });
}

const button = document.querySelector(".gridCreatorButton");
function setGrid() {
  const gridInputField = document.getElementById("userInput");
  const userInput = parseFloat(gridInputField.value);
  //if the input is less than 50 and is a number, then the function is called with the parameter of userInput. Before the grid is created, the previous grid is deleted, and then we enable the new grid to have its functions persist.
  if (userInput < 50 && !isNaN(userInput)) {
    deleteCurrentGrid();
    createGrid(userInput);
    lightUpSquares();
  }
}

//Event listener for edit grid button, calls the setGrid() function on click
button.addEventListener("click", function () {
  console.log("button clicked");
  setGrid();
});
//Event listener for reset grit button, calls the resetSquares function
const resetButton = document.querySelector(".resetGrid");
resetButton.addEventListener("click", function () {
  resetSquares();
});
