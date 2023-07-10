document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
  
    //set up the canvas size
    canvas.width = 400;
    canvas.height = 400;
  
    const mousePositions = [];
    const numPositions = 10;
    const circleRadius = 10;

    //draws the circle by defining the radius
    function drawCircle(x, y) {
      ctx.beginPath();
      ctx.arc(x, y, circleRadius, 0, 2 * Math.PI);
      ctx.fill();
    }
  
    function updateMousePositions(x, y) {
      mousePositions.push({ x, y });
  
      if (mousePositions.length > numPositions) {
        mousePositions.shift();
      }
    }
    
    //clear canvas
    function clearCanvas() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  
    function drawMousePositions() {
      for (let i = 0; i < mousePositions.length; i++) {
        const { x, y } = mousePositions[i];
        const alpha = 1 - i / numPositions;
  
        ctx.fillStyle = `rgba(0, 0, 0, ${alpha})`;
        drawCircle(x, y);
      }
    }
    //updates the mouse positions array
    function handleMouseMove(event) {
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
  
      updateMousePositions(x, y);
    }
  
    canvas.addEventListener("mousemove", handleMouseMove);
    //redraws the canvas based on mouse position
    function animate() {
      clearCanvas();
      drawMousePositions();
      requestAnimationFrame(animate);
    }
  
    animate();
  });
  