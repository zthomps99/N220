//Variables
let backgroundColor;
let circleColor;

function setup() {
  //Create canvas
  createCanvas(400, 400);
  
  //Sets the initial values for variables
  backgroundColor = color(220);
  circleColor = color(255, 0, 0);
}

function draw() {
  background(backgroundColor);
  
  //Draw circles
  fill(circleColor);
  noStroke();
  ellipse(200, 200, 100, 100);
  ellipse(150, 150, 50, 50);
  
  //Draw rectangles
  fill(0, 3440, 255);
  noStroke();
  rect(135, 135, 30, 30);
  rect(250, 190, 20, 40);
  
}

function mouseClicked() {
  //Changes colors of background and circles on mouse click
  backgroundColor = color(random(255), random(255), random(255));
  circleColor = color(random(255), random(255), random(255));
}