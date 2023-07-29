//array that stores four colors to pick from at random on click
let colors = ['#FF0000', '#00FF00', '#0000FF', '#FF00FF'];
let circleSize = 100;
let xPosition, yPosition;

//create canvas
function setup() {
  createCanvas(400, 400);
  xPosition = width / 2;
  yPosition = height / 2;
  background(255);
  drawCircle();
}
//based on the x/y position and size, fill with new color
function drawCircle() {
  fill(random(colors));
  ellipse(xPosition, yPosition, circleSize, circleSize);
}
//mouse click change color
function mouseClicked() {
  drawCircle();
}
