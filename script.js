// Select the container where the grid will go
const gridContainer = document.getElementById("gridContainer");

// Function to create the grid
function createGrid(size) {
    // Clear the grid container before creating a new one
    gridContainer.innerHTML = '';

    // Calculate the total number of squares needed for the grid
    const totalSquares = size * size;

    // Create the grid squares
    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('gridSquare');

        // Add an event listener for the hover effect
        square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = 'black'; // Change to black on hover
        });

        gridContainer.appendChild(square);
    }
}

// Initialize with a 16x16 grid
createGrid(16);

// Event listener for the change grid button
document.getElementById('changeGridBtn').addEventListener('click', () => {
    let gridSize = prompt("Enter grid size (max 100):");

    // Ensure the input is within range and a valid number
    gridSize = parseInt(gridSize);
    if (gridSize > 0 && gridSize <= 100) {
        createGrid(gridSize);
    } else {
        alert("Please enter a valid grid size between 1 and 100.");
    }
});
