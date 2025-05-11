let opacity = 0; // Initialize opacity to 0 for the darkening effect

// Function to create the grid
function createGrid(size) {
    const container = document.getElementById('gridContainer');
    container.innerHTML = '';  // Clear any existing grid

    for (let i = 0; i < size * size; i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);

        // Event listener for Random RGB color effect
        square.addEventListener('mouseenter', () => {
            const randomColor = rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255});
            square.style.backgroundColor = randomColor;
        });

        // Event listener for Progressive darkening effect
        square.addEventListener('mouseenter', () => {
            if (opacity < 1) {
                opacity += 0.1; // Darken by 10% on each hover
            }
            square.style.backgroundColor = rgba(0, 0, 0, ${opacity}); // Darken with opacity
        });
    }
}

// Event listener for the change grid size button
document.getElementById('changeGridBtn').addEventListener('click', () => {
    let gridSize = prompt("Enter grid size (max 100):");

    // Ensure the input is within range and a valid number
    gridSize = parseInt(gridSize);
    if (gridSize > 0 && gridSize <= 100) {
        createGrid(gridSize);  // Create a new grid with the entered size
    } else {
        alert("Please enter a valid grid size between 1 and 100.");
    }
});

// Initialize the grid with a default size (e.g., 16x16)
createGrid(16);