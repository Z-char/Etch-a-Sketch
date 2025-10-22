let gridSize = 16;
const GRID_WIDTH = 960; // by px
const MAX_GRID_SIZE = 100;

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

            square.style.backgroundColor = GetRandomColor();
        });

        container.appendChild(square);
    }

    container.style.width = GRID_WIDTH + "px";
    container.style.height = GRID_WIDTH + "px";
}

function GetRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}