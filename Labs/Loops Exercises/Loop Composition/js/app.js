// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get the canvas element
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
  
    // Define the composition size and spacing
    const size = 5;
    const spacing = 100;
  
    // Define the array of colors
    const colors = ["red", "orange", "yellow", "green", "blue", "purple"];
  
    // Loop to draw the composition
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        // Randomly select a color from the array
        const color = colors[Math.floor(Math.random() * colors.length)];
  
        // Calculate the position of the current circle
        const x = j * spacing + spacing / 2;
        const y = i * spacing + spacing / 2;
  
        // Calculate the size of the circle
        const radius = Math.random() * 50 + 20;
  
        // Set the fill color and draw the circle
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
      }
    }
  });
  