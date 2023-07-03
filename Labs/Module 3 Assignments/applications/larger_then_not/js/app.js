let diameter = 1;

//create canvas
function setup() {
  createCanvas(400, 300);
}

//draws a circle
function draw() {
  background(220);
  //circle dimensions
  circle(width / 2, height / 2, diameter);
  //increases diameter
  diameter++;
  //once the circle hits a diameter of GREATER THAN 200, set diameter back to 1
  if (diameter > 200) {
    diameter = 1;
  }
}