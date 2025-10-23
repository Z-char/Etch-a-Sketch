let gridSize = 16;
const GRID_WIDTH = 960; // by px
const MAX_GRID_SIZE = 100;
let isDrawing = false;

function CreateGrid(size) {
    const container = document.getElementById('gridContainer');
    container.innerHTML = '';

    const squareWidth = GRID_WIDTH / size; // calc the px each square side.

    for (let i = 0; i < size * size; ++i) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        
        square.style.width = squareWidth + 'px';
        square.style.height = squareWidth + 'px';

        square.addEventListener('mouseenter', (e) => {
            const square = e.target;
            if (isDrawing === false) return;
            square.style.backgroundColor = GetRandomColor();
        });

        container.appendChild(square);
    }

    container.style.width = GRID_WIDTH + "px";
    container.style.height = GRID_WIDTH + "px";
}

document.addEventListener('mousedown', (e) => {
    if (e.button === 0) {
        isDrawing = true;
    }
});
document.addEventListener('mouseup', (e) => {
    if (e.button === 0) {
        isDrawing = false;
    }
});

CreateGrid(gridSize);

function GetRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

document.getElementById('resetBtn').addEventListener('click', () => {
    gridSize = prompt("What is the new side length?");
    gridSize = parseInt(gridSize);
    if (isNaN(gridSize) || gridSize < 1 || gridSize > 100) {
        alert("Please input a valid number between 1 and 100");
        return;
    }
    CreateGrid(gridSize);
});