// STORE THE GRID CONTAINER

const gridContainer = document.querySelector("div.container");

// SET THE GRID'S WIDTH AND HEIGHT

gridContainer.style.width = "720px";
gridContainer.style.height = "720px";
gridContainer.style.outline = "3px solid black";
gridContainer.style.display = "flex";
gridContainer.style.flexWrap = "wrap";

// ADD AN ELEMENT BEFORE THE GRID
// THIS ELEMENT SHOULD SHOW THE DIMENSIONS OF THE CURRENT GRID
const body = document.querySelector("body");

const currentGrid = document.createElement("p");
currentGrid.style.fontSize = "1.5rem";
currentGrid.textContent = "Current grid: 16x16";
body.insertBefore(currentGrid, gridContainer);

// CREATE A CELL FOR THE GRID

function createIndividualCell(squaresPerSide) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.style.width = `${720 / squaresPerSide}px`;
  cell.style.height = `${720 / squaresPerSide}px`;
  cell.style.border = "2px solid gray";
  return cell;
}

function createAllCells(squaresPerSide = 16) {
  for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
    const cell = createIndividualCell(squaresPerSide);
    gridContainer.appendChild(cell);
    cell.addEventListener("mouseenter", (e) => {
      e.target.style.backgroundColor = "deeppink";
    });
  }
}

createAllCells();

// PROMPT THE USER TO CHANGE THE GRID WHEN THE BUTTON IS CLICKED

const btnChangeGrid = document.querySelector("button.grid-change-btn");
btnChangeGrid.addEventListener("click", gridChange);

function gridChange() {
  gridContainer.replaceChildren();
  let squaresPerSide = prompt(
    "Write the number of squares per side for the new grid."
  );
  for (let i = 0; !(squaresPerSide >= 1 && squaresPerSide <= 100); i++) {
    if (squaresPerSide > 100) {
      squaresPerSide = prompt("The maximun is 100. Try again.");
    } else if (!squaresPerSide) {
      squaresPerSide = prompt("Enter a number between 0 and 100");
    }
  }
  currentGrid.textContent = `Current grid: ${squaresPerSide}x${squaresPerSide}`;

  createAllCells(squaresPerSide);
}
