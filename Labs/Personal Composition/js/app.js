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

//Create chef
function draw() {
  background(backgroundColor);
  
  //Draw circles
  fill(circleColor);
  noStroke();
  ellipse(500, 200, 400, 150);
  ellipse(280, 200, 50, 50);
  
  //Draw rectangles
  fill(0, 3440, 255);
  noStroke();
  rect(160, 175, 100, 50);
  rect(350, 190, 20, 40);
  
}

function mouseClicked() {
  //Changes colors of background and circles on mouse click
  backgroundColor = color(random(255), random(255), random(255));
  circleColor = color(random(255), random(255), random(255));
}