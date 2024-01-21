const container = document.querySelector('.container');
const resetBtn = document.querySelector('button');
let sizeOfGrid = 16;

//*function randomize color 
function colorRandomize() {
    const colors = [];

    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`; 

    return randomColor;
}

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

                const currentOpacity = gridbox.style.opacity;
                gridbox.style.backgroundColor = colorRandomize();

                    if (currentOpacity) {
                        gridbox.style.opacity = Math.min(
                        Number(currentOpacity) * 1.5,
                        1
                        );
                    } else {
                        gridbox.style.opacity = 0.1;
                    }

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
