const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//Setup canvas 
const size = 30;
const spacing = 40;
const startY = canvas.height / 2 - size / 2;

//Loop for drawing shapes
for (let i = 1; i <= 25; i++) {
  const x = (i - 1) * spacing + size / 2;
  const y = startY;

  if (i % 3 === 0 && i % 5 === 0) {  // Divisible by both 3 and 5
    drawShape(x, y, "blue", "square");
  } else if (i % 3 === 0) {  // Divisible by 3 only
    drawShape(x, y, "purple", "circle");
  } else if (i % 5 === 0) {  // Divisible by 5 only
    drawShape(x, y, "green", "square");
  } else {  // Not divisible by 3 or 5
    drawShape(x, y, "black", "circle");
  }
}

//Function for drawing shapes
function drawShape(x, y, color, shape) {
  ctx.fillStyle = color;
  if (shape === "circle") {
    ctx.beginPath();
    ctx.arc(x, y, size / 2, 0, 2 * Math.PI);
    ctx.fill();
  } else if (shape === "square") {
    ctx.fillRect(x - size / 2, y - size / 2, size, size);
  }
}
