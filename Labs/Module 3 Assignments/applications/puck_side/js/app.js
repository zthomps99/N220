function setup() {
    createCanvas(400, 300);
  }
  
  function draw() {
    background(220);
    
    if (mouseX < width / 2) {
      fill("blue");
    } else {
      fill("red");
    }
    
    circle(mouseX, mouseY, 50);
  }