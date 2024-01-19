const container = document.querySelector('.container');
let sizeOfGrid = 16;

const createGrid = (amtOfGrids) => {

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
createGrid(sizeOfGrid);
