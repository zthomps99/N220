//reference to the input, button, and result elements
const usernameInput = document.getElementById('usernameInput');
const passwordInput = document.getElementById('passwordInput');
const loginButton = document.getElementById('loginButton');
const resultDiv = document.getElementById('resultDiv');

//add click event listener to the button
loginButton.addEventListener('click', () => {
  //get the values entered by the user
  const enteredUsername = usernameInput.value.trim();
  const enteredPassword = passwordInput.value.trim();

  //define expected values for username and password
  const expectedUsername = "Username";
  const expectedPassword = "Password";

  //check if the entered values match the expected values using a single if statement
  if (enteredUsername == expectedUsername && enteredPassword == expectedPassword) {
    resultDiv.textContent = "Success";
  } else {
    resultDiv.textContent = "Wrong information";
  }
});
