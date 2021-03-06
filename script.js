const container = document.querySelector('#container');
let gridClass = document.querySelectorAll('.grid-class');
function makeGrid(squares) {
    for (i = 0; i < squares * squares; i++) {
        let div = document.createElement('div');
        container.style.display = 'grid';
        container.style.gridTemplateColumns = `repeat(${squares}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${squares}, 1fr)`;
        div.classList.toggle('grid-class');
        container.appendChild(div);
    }
}
makeGrid(16);

// Reset button that turns backgroundColor to white on click
const reset = document.querySelector('#reset');
reset.addEventListener('click', resetGrid);
function resetGrid() {
    gridClass = document.querySelectorAll('.grid-class');
    gridClass.forEach(div => div.style.backgroundColor = 'white');
}

// Remake grid based on number given by user on prompt
const remake = document.querySelector('#remake');
remake.addEventListener('click', remakeGrid);
let userNumber;
function remakeGrid (userNumber) {
    userNumber = prompt('Give number per sides between 1 - 99');
    if (userNumber === null || userNumber < 1 || userNumber > 100) {
        userNumber = prompt('Give number per sides between 1 - 99');
    } else if (userNumber > 1 || userNumber < 100) {
        gridClass.forEach((div) => {
            div.remove();
        })
        makeGrid(userNumber);
        resetGrid();
        turnCyan();
    }
}

const blackBtn = document.querySelector('#black');
blackBtn.addEventListener('click', turnBlack);
function turnBlack() {
    gridClass = document.querySelectorAll('.grid-class');
    gridClass.forEach((div) => {
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = "black";
        });
    })
};

const cyanBtn = document.querySelector('#cyan');
cyanBtn.addEventListener('click', turnCyan);
function turnCyan() {
    let gridClass = document.querySelectorAll('.grid-class');
    gridClass.forEach((div) => {
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = "cyan";
        });
    })
};
turnCyan();

const rgbBtn = document.querySelector('#rgb');
rgbBtn.addEventListener('click', turnRGB);
function turnRGB() {
    let gridClass = document.querySelectorAll('.grid-class');
    gridClass.forEach((div) => {
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        });
    })
};