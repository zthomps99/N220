document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
  
    //Defines canvas size
    canvas.width = 300;
    canvas.height = 300;
  
    //Initial circle properties
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const numCircles = 100;
    const initialRadius = 150;
    const radiusStep = 5;
  
    //Loop that draws the composition
    //Increments the amount of circles 
    for (let i = 0; i < numCircles; i++) {
        //Defines radius
      const radius = initialRadius - i * radiusStep;
      //Start path      
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
      ctx.stroke();
    }
  });
  