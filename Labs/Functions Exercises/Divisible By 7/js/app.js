//function to check if a number is divisible by 7
function isDivisibleBySeven(number) {
    return number % 7 === 0;
  }
  
  //get reference to the input, button, and result elements
  const numberInput = document.getElementById('numberInput');
  const checkButton = document.getElementById('checkButton');
  const resultDiv = document.getElementById('resultDiv');
  
  //add click event listener to the button
  checkButton.addEventListener('click', () => {
    //get the value entered by the user
    const userInput = parseInt(numberInput.value);
  
    //check if the number is divisible by 7
    const isDivisible = isDivisibleBySeven(userInput);
  
    //update the resultDiv with the appropriate message
    if (isDivisible) {
      resultDiv.textContent = `${userInput} is divisible by 7.`;
    } else {
      resultDiv.textContent = `${userInput} is not divisible by 7.`;
    }
  });
  