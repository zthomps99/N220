//function to calculate the tip and total bill
function calculateTipAndTotal(billAmount) {
    const tipPercentage = 0.15; // 15% tip, this can be changed to any desired percentage
    const tipAmount = billAmount * tipPercentage;
    const totalAmount = billAmount + tipAmount;
    return { tipAmount, totalAmount };
  }
  
  //reference to the input and button elements
  const billInput = document.getElementById('billInput');
  const calculateButton = document.getElementById('calculateButton');
  
  //add click event listener to the button
  calculateButton.addEventListener('click', () => {
    //get the value entered by the user
    const billAmount = parseFloat(billInput.value);
  
    //check if the input is numerical
    if (!isNaN(billAmount)) {
      // Calculate the tip and total bill using the function
      const { tipAmount, totalAmount } = calculateTipAndTotal(billAmount);
  
      //output result to the console
      console.log(`Tip: $${tipAmount.toFixed(2)}. Total: $${totalAmount.toFixed(2)}`);
    } else {
      console.log("Invalid input. Please enter a numerical value.");
    }
  });
  