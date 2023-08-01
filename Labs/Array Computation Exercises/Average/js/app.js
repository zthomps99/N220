document.addEventListener("DOMContentLoaded", function () {
    //get references to the HTML elements
    const numbersInput = document.getElementById("numbersInput");
    const calculateButton = document.getElementById("calculateButton");
    const averageResult = document.getElementById("averageResult");
    const sumResult = document.getElementById("sumResult");

    //add an event listener to the "Calculate" button
    calculateButton.addEventListener("click", function () {
      //get the input string of numbers from the user and remove leading/trailing spaces
      const numbersString = numbersInput.value.trim();
      const numbersArray = numbersString.split(",").map((number) => Number(number));
      
      //check if any of the elements in the numbersArray are NaN (Not a Number)
      //if so, display an alert message and stop the calculation
      if (numbersArray.some(isNaN)) {
        alert("Please enter valid numbers separated by commas.");
        return;
      }
  
      const sum = numbersArray.reduce((acc, current) => acc + current, 0);
      //calculate the average by dividing the sum by the number of elements in the array
      const average = sum / numbersArray.length;
  
      //display the average and sum results to the user with two decimal places
      averageResult.textContent = "" + average.toFixed(2);
      sumResult.textContent = "" + sum;
  
      numbersInput.value = "";
    });
  });
  