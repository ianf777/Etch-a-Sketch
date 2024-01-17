//Select the container
const container = document.querySelector(".container");

function createGrid() {
    //creates a div then adds squareRow class to said div 16x
  for (let i = 0; i < 16; i++) {
    const squareRow = document.createElement("div");
    squareRow.classList.add("squareRow");
    //Creates a div 16x, adds 'square' class to each div before appending it to the newly created row.
    for (let j = 0; j < 16; j++) {
      const square = document.createElement("div");
      square.classList.add("square");
      squareRow.appendChild(square);
    }
    //Adds the row containing 16 squares to the div 16x
    container.appendChild(squareRow);
  }
}

createGrid();
