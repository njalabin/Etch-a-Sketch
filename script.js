let container = document.querySelector('#container');

function makeRows(rows, colums) {
    for (i = 0; i < rows * colums; i++) {
        let div = document.createElement('div');
        div.classList.toggle('grid-class');
        container.appendChild(div);
    }
}

makeRows(16, 16);