﻿const randomColorBtn = document.querySelector("#random-color-btn");
const eraserBtn = document.querySelector("#eraser-btn");
const colorBtn = document.querySelector("#color-btn");
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

    board.style.cursor = "crosshair";
    sizeIndicator.textContent = `${sizeInput.value} X ${sizeInput.value}`;
} 


function setCurrentMode(newMode) {
    currentMode = newMode;
}

randomColorBtn.onclick = function() {
    setCurrentMode("rainbow"); 
    randomColorBtn.classList.add("active");
    eraserBtn.classList.remove("active");
}

eraserBtn.onclick = function() {
    setCurrentMode("eraser");
    eraserBtn.classList.add("active");
    randomColorBtn.classList.remove("active");
}

colorBtn.onclick = function() {
    setCurrentMode("color");
    eraserBtn.classList.remove("active");
    randomColorBtn.classList.remove("active");
}

colorBtn.addEventListener("input", function() {
    color = colorBtn.value;
    return color;
});


function changeColor(e) {
    
    for (let x = 0; x < 7; x++) {

        randomRed = Math.floor(Math.random()*256);
        randomGreen = Math.floor(Math.random()*256);
        randomBlue = Math.floor(Math.random()*256);
        randomAlpha = Math.random();

    }

    if (currentMode === "rainbow") {
        e.target.style.backgroundColor = `rgba(${randomRed},${randomGreen},${randomBlue},${randomAlpha})`;
    }
    else if (currentMode === "eraser") {
        e.target.style.backgroundColor = "#ffffff";
    }
    else if (currentMode === "color") {
        e.target.style.backgroundColor = color;
    }
}


function clearGrid(e) {

    board.innerHTML = "";
    size = sizeInput.value;
    sizeIndicator.textContent = `${sizeInput.value} X ${sizeInput.value}`;
    createGrid(sizeInput.value);
}

resetBtn.onclick = () => clearGrid();

sizeInput.onclick = (e) => {
    sizeIndicator.textContent = `${e.target.value} X ${e.target.value}`;
    clearGrid();
    createGrid(e.target.value);
} 


createGrid(sizeInput.value);