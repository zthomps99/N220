document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
  
    //set up the canvas size
    canvas.width = 600;
    canvas.height = 200;
  
    //defines the array of colors
    const colors = ["#FFC0CB", "#FFF8DC", "#8B4513"];
  
    //calculate the width of each rectangle based on the canvas size and number of colors
    const rectWidth = canvas.width / colors.length;
  
    //loop to draw the rectangles
    for (let i = 0; i < colors.length; i++) {
      const x = i * rectWidth;
      const y = 0;
      const color = colors[i];
  
      ctx.fillStyle = color;
      ctx.fillRect(x, y, rectWidth, canvas.height);
    }
  });
  