let input = 32;

// const resetButton = document.querySelector('#reset');

// function gridSize(){
//     let userChoice = prompt('Please enter desired size (maximum of 100 and must be positive)');
//     console.log(userChoice);
//     return userChoice;    
// }

// resetButton.addEventListener('on click', gridSize());

function createGrid(input) {
    for (let i = 0; i < input;i++){
        const container = document.querySelector('#container');
        const gridRow = document.createElement('div');
        gridRow.classList.add('grid-row');
        container.appendChild(gridRow);
        for (let j = 0; j < input;j++){
            const gridDiv = document.createElement('div');
            gridDiv.classList.add('grid-item');
            gridRow.appendChild(gridDiv);
        }
    }  
}

createGrid(input);



