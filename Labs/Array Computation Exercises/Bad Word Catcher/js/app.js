document.addEventListener("DOMContentLoaded", function () {
    //list of bad words to check against
    const badWords = ["clear", "water", "tires"];
    const textInput = document.getElementById("textInput");
    const checkButton = document.getElementById("checkButton");
    const result = document.getElementById("result");

    //add an event listener to the "Check for Bad Words" button
    checkButton.addEventListener("click", function () {
      const sentence = textInput.value.trim();
      //check if the input sentence is empty
      if (sentence === "") {
        result.textContent = "Please enter a sentence.";
        return;
      }
      //split the input sentence into an array of words using spaces as the delimiter
      const wordsArray = sentence.split(" ");
      //initialize a counter to keep track of the number of bad words found
      let badWordsCount = 0;

      //loop through each word in the wordsArray and check if it is a bad word
      wordsArray.forEach((word) => {
        if (badWords.includes(word.toLowerCase())) {
          badWordsCount++;
        }
      });
      //display the result to the user based on the number of bad words found
      if (badWordsCount > 0) {
        result.textContent = `Found ${badWordsCount} bad word(s) in the sentence.`;
      } else {
        result.textContent = "No bad words found in the sentence.";
      }
      //clear the input field for the user to input a new sentence
      textInput.value = "";
    });
  });
  