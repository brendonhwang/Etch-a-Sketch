let opacity = 0; // Initialize opacity to 0 for the darkening effect

// Function to create the grid
function createGrid(size) {
  const container = document.getElementById('gridContainer');
  container.innerHTML = '';  // Clear any existing grid

  // Calculate the size of each square based on the grid size
  const squareSize = Math.floor(960 / size); // Use Math.floor to ensure no fractional sizes

  // Set the grid container to have a fixed width and height
  container.style.width = '960px';
  container.style.height = '960px';

  // Ensure the container uses Flexbox and wraps the squares
  container.style.display = 'flex';
  container.style.flexWrap = 'wrap';

  for (let i = 0; i < size * size; i++) {
    let square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    container.appendChild(square);

    // Reset opacity for each new square
    let squareOpacity = 0;

    // Event listener for hover effect
    square.addEventListener('mouseenter', () => {
      // Random color effect
      const randomColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
      square.style.backgroundColor = randomColor;

      // Progressive darkening effect (opacity increases with each hover)
      if (squareOpacity < 1) {
        squareOpacity += 0.1;  // Increase opacity by 10% on each hover
      }
      square.style.backgroundColor = `rgba(0, 0, 0, ${squareOpacity})`; // Apply darkening with opacity
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
