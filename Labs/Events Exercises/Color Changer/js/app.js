document.addEventListener("DOMContentLoaded", function () {
    const colorDisplay = document.getElementById("colorDisplay");
    const currentRGB = document.getElementById("currentRGB");
  
    let redValue = 0;
    let greenValue = 0;
    let blueValue = 0;
    //update the color display and current RGB display
    function updateColorDisplay() {
      const color = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
      colorDisplay.style.backgroundColor = color;
      currentRGB.textContent = `Current RGB: ${color}`;
    }
  
    function handleButtonClick(event) {
      const button = event.target;
      const colorClass = button.classList[0];
      const value = parseInt(button.getAttribute("data-value"));
      //update the corresponding RGB value based on the clicked button
      switch (colorClass) {
        case "red-button":
          redValue += value;
          break;
        case "green-button":
          greenValue += value;
          break;
        case "blue-button":
          blueValue += value;
          break;
      }
      //update the color display and current RGB display
      updateColorDisplay();
    }
    //get all the buttons and add event listeners to handle button clicks
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => button.addEventListener("click", handleButtonClick));
  });
  