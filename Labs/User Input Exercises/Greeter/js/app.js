//reference to the input and button elements
const nameInput = document.getElementById('nameInput');
const greetButton = document.getElementById('greetButton');

//add click event listener to the button
greetButton.addEventListener('click', () => {
  //get the value entered by the user
  const name = nameInput.value;

  //output the greeting to the console
  console.log(`Hello ${name}`);
});
