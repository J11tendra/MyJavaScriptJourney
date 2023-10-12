const randomColorBtn = document.querySelector("#random-color-btn");
const colorPickerBtn = document.querySelector("#color-picker-btn");
const colorPicker = document.querySelector("#color-picker");
const resetBtn = document.querySelector("#reset-btn");
const sizeInput = document.querySelector("#grid-range");
const sizeIndicator = document.querySelector("#size-indicator");

const board = document.querySelector(".board");



function createGrid(size) {
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size*size; i++) {

        const gridItem = document.createElement("div");
        gridItem.style.cssText = 'background: white;';
        gridItem.addEventListener("mouseover", changeColor);
        board.appendChild(gridItem);

    }
} 

function changeColor(e) {
    
    for (let x = 0; x < 7; x++) {

        randomRed = Math.floor(Math.random()*256);
        randomGreen = Math.floor(Math.random()*256);
        randomBlue = Math.floor(Math.random()*256);
        randomAlpha = Math.random();

    }

    e.target.style.backgroundColor = `rgba(${randomRed},${randomGreen},${randomBlue},${randomAlpha})`
}

// function setCurrentSize(newSize) {
//     currentSize = newSize;
// }

// function changeSize(value) {
//     setCurrentSize(value);
//     reloadGrid(value);
// }

// function reloadGrid(value) {
//     createGrid(value);
// }

function clearGrid() {

    board.innerHTML = "";
    createGrid(5);
}

resetBtn.onclick = () => clearGrid();

sizeInput.onclick = (e) => {
    sizeIndicator.textContent = `${e.target.value} X ${e.target.value}`;
    clearGrid();
    createGrid(e.target.value);
} 








createGrid(5);


