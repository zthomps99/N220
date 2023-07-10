document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
  
    //set up the canvas size
    canvas.width = 400;
    canvas.height = 600;
  
    const circleRadius = 20;
    const circleSpeed = 5;
    //determines after how many frames a new circle will be created
    const framesPerCircle = 10;
  
    let circles = [];
  
    //draws the circle by defining the radius
    function drawCircle(x, y) {
      ctx.beginPath();
      ctx.arc(x, y, circleRadius, 0, 2 * Math.PI);
      ctx.fill();
    }
    //updates the positions of existing circles, moves them down the screen, and draws them
    function updateCircles() {
      for (let i = 0; i < circles.length; i++) {
        circles[i].y += circleSpeed;
        drawCircle(canvas.width / 2, circles[i].y);
  
        if (circles[i].y > canvas.height + circleRadius) {
          circles.splice(i, 1);
          i--;
        }
      }
  
      if (frames % framesPerCircle === 0) {
        circles.push({ y: 0 });
      }
    }
  
    let frames = 0;

    //redraws the canvas based on mouse position
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  
      updateCircles();
        //increments the amount of frames
      frames++;
      requestAnimationFrame(animate);
    }
  
    animate();
  });
  