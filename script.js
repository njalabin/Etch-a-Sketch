let container = document.querySelector('#container');
function makeGrid(squares) {
    for (i = 0; i < squares * squares; i++) {
        let div = document.createElement('div');
        div.classList.toggle('grid-class');
        container.appendChild(div);
    }

}

makeGrid(16);

let gridClass = document.querySelectorAll('.grid-class');
gridClass.forEach((div) => {
    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = "cyan";
    });
})

let reset = document.querySelector('#reset');
reset.addEventListener('click', resetGrid);
function resetGrid() {
    gridClass = document.querySelectorAll('.grid-class');
    gridClass.forEach(div => div.style.backgroundColor = 'white');
}

// set container max width to 960px wide
// set limit for user to input max 100x100 square divs