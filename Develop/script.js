// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  // character variables defined here
  var charNumbers = [1,2,3,4,5,6,7,8,9];
  var charSpecial = ["!","\"","#","$","%","&","\'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","\`","{","|","}","~"];
  var charUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var charLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  //define function generatePassword which will be the final step in generating the password
  // series of if evaluators to determine which characters the user desires, using randCharCount to determine how many of each character to include.
  // if totalCharCount > confirmCharCount Then 
  function generatePassword() {

  };

  // function to output number of each array of characters to use in password
  var charCounter = function(pwLength) {
    var charTypes = 0
    if (confirmCharNum) {charTypes += 1}
    if (confirmCharSpecial) {charTypes += 1}
    if (confirmCharUpper) {charTypes += 1}
    if (confirmCharLower) {charTypes += 1}

    return pwLength/charTypes
  }


  // prompt user for input of 8-128 characters
  var confirmCharLen = window.prompt("How many characters do you want your password to be? [8-128]");


  // prompt user with confirm alerts to allow use of variety of characters
    // confirm use of numbers
  var confirmCharNum = confirm("Would you like numbers in your password?");
    // confirm use of special characters
  var confirmCharSpecial = confirm("Would you like special characters in your password?");
    // confirm use of upper case characters
  var confirmCharUpper = confirm("Would you like upper case letters in your password?");
    // confirm use of lower case characters
  var confirmCharLower = confirm("Would you like lower case letters in your password?");

  // create copy to clipboard button



}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);









  // random number generator to determine how many of each character desired by user are in password
  var randCharCount = function(userCharNum) {
    var charNum = randomNumber(8, userCharNum);
    return charNum;
  }