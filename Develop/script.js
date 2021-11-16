// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  //define function generatePassword which will be the final step in generating the password


  // prompt user for input of 8-128 characters

  // prompt user with confirm alerts to allow use of variety of characters
    // confirm use of numbers
    // confirm use of special characters
    // confirm use of upper case characters
    // confirm use of lower case characters

  // create copy to clipboard button



}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
