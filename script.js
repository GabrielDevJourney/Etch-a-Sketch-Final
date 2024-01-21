const container = document.querySelector('.container');
const resetBtn = document.querySelector('button');
let sizeOfGrid = 16;

const createGrid = (amtOfGrids) => {
    container.innerHTML = '';

    for (let i = 0; i < amtOfGrids; i++) { 
        
        const row = document.createElement('div');
        row.className = 'grid-row';

        for (let j = 0; j < amtOfGrids; j++){
            const widthAndHeight = 960 / sizeOfGrid;
            const gridbox = document.createElement('div');
            gridbox.className = 'grid-box';
            gridbox.style.width = `${widthAndHeight}px`;
            gridbox.style.height = `${widthAndHeight}px`;
            //*adding mouse enter hover 
            gridbox.addEventListener('mouseenter', () => {
                gridbox.style.backgroundColor = 'black';
            })
            row.appendChild(gridbox);
        }

        container.appendChild(row);
    }
}

resetBtn.addEventListener('click', () => {
    let userSize = Number(prompt("What dimensions do you want for the new Etch a Sketch?")
    );

    while (userSize > 100){
            userSize = Number(prompt(
            "Pick a number equal or less then 100"
            ));
        }
        
        sizeOfGrid = userSize; //*update global variable of grid
        createGrid(sizeOfGrid); //* create the new grid

    })

createGrid(sizeOfGrid);
