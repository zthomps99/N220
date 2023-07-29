let colors = ['red', 'yellow', 'green'];
let circleSize = 100;
let spacing = 120;
let yPosition = 100;

function setup() {
  createCanvas(400, 400);
  background(255);
  drawStoplight();
}

function drawStoplight() {
  for (let i = 0; i < colors.length; i++) {
    fill(colors[i]);
    circle(width / 2, yPosition + (i * spacing), circleSize);
  }
}
