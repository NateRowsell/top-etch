let input = 16;

//add input error handling serialization
function getGridSize(){
    input = prompt('Choose size');
    return input;
}



const resetButton = document.querySelector('#resetButton');
resetButton.addEventListener('click', () => {
    let grid = document.querySelectorAll('.gridItemHoverState');
    grid.forEach((gridItem) => {
        gridItem.setAttribute('class', 'gridItem');
        })
    getGridSize();
    createGrid(input);
    })
    
function onHover(){
    let grid = document.querySelectorAll('.gridItem');
    grid.forEach((gridItem) => {
        gridItem.addEventListener('mouseover', () => {
            gridItem.setAttribute('class', 'gridItemHoverState')

        })
    })
}
    
    
    
function createGrid(input) {
    const parent = document.getElementById("container")
    while (parent.firstChild) {
        parent.firstChild.remove()
    }
    for (let i = 0; i < input;i++){
        const container = document.querySelector('#container');
        const gridRow = document.createElement('div');
        gridRow.classList.add('grid-row');
        container.appendChild(gridRow);
        for (let j = 0; j < input;j++){
            const gridDiv = document.createElement('div');
            gridDiv.classList.add('gridItem');
            gridRow.appendChild(gridDiv);
        }
    }
    onHover();  
}


createGrid(input);
onHover();





