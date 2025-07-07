// STORE THE GRID CONTAINER

const gridContainer = document.querySelector("div.container");

// SET THE GRID'S WIDTH AND HEIGHT

gridContainer.style.width = "720px";
gridContainer.style.height = "720px";
gridContainer.style.outline = "3px solid black";
gridContainer.style.display = "flex";
gridContainer.style.flexWrap = "wrap";

// CREATE A CELL FOR THE GRID

function createCell() {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.style.width = "45px";
  cell.style.height = "45px";
  cell.style.border = "2px solid gray";
  return cell;
}

for (let i = 0; i < 256; i++) {
  const cell = createCell();
  gridContainer.appendChild(cell);
  cell.addEventListener("mouseenter", (e) => {
    e.target.style.backgroundColor = "deeppink";
  });
}
