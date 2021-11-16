// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  

  // character variables defined here
  var charNumbers = [1,2,3,4,5,6,7,8,9];
  var charSpecial = ["!","\"","#","$","%","&","\'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","\`","{","|","}","~"];
  var charUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var charLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var allCharacters = [1,2,3,4,5,6,7,8,9,"!","\"","#","$","%","&","\'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","\`","{","|","}","~","A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z","a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

  // user decisions defined here
  var confirmCharLen = window.prompt("How many characters do you want your password to be? [8-128]");
  var confirmCharNum = confirm("Would you like numbers in your password?");
  var confirmCharSpecial = confirm("Would you like special characters in your password?");
  var confirmCharUpper = confirm("Would you like upper case letters in your password?");
  var confirmCharLower = confirm("Would you like lower case letters in your password?");


  function charCounter(pwLength) {
    var charTypes = 0
    if (confirmCharNum) {charTypes += 1}
    if (confirmCharSpecial) {charTypes += 1}
    if (confirmCharUpper) {charTypes += 1}
    if (confirmCharLower) {charTypes += 1}
    else charTypes = 1

    var characterNum = pwLength/charTypes
    if (characterNum % 1 != 0) {characterNum = Math.floor(characterNum)}

    return characterNum
  }


  var randomIndex = function(indexLen) {
    var randInd = Math.floor((indexLen * Math.random()));
    return randInd;
  }


  function pwCharSelector(charTypeCount) {
    var password = ""
    if (confirmCharNum) {
      for (var i=0; i<charTypeCount; i++) {
        password += charNumbers[randomIndex(charNumbers.length)]
      };
    }
    if (confirmCharSpecial) {
      for (var i=0; i<charTypeCount; i++) {
        password += charSpecial[randomIndex(charSpecial.length)]
      };
    }
    if (confirmCharUpper) {
      for (var i=0; i<charTypeCount; i++) {
        password += charUpperCase[randomIndex(charUpperCase.length)]
      };
    }
    if (confirmCharLower) {
      for (var i=0; i<charTypeCount; i++) {
        password += charLowerCase[randomIndex(charLowerCase.length)]
      }
    }
    return password;
  }



  //define function generatePassword which will be the final step in generating the password
  // series of if evaluators to determine which characters the user desires, using randCharCount to determine how many of each character to include.
  // if totalCharCount > confirmCharCount Then 
  function generatePassword() {

    var charTypes = 0
    if (confirmCharNum) {charTypes += 1}
    if (confirmCharSpecial) {charTypes += 1}
    if (confirmCharUpper) {charTypes += 1}
    if (confirmCharLower) {charTypes += 1}
    else charTypes = 1

    var password = pwCharSelector(charCounter(parseInt(confirmCharLen)));
    var remainder = confirmCharLen % charTypes
    debugger;
    if (remainder > 0) {
      for(var i=0; i<remainder; i++) {
        password += allCharacters[randomIndex(allCharacters.length)]
      }
    }

    return password

  };

  // prompt user for input of 8-128 characters

  // create copy to clipboard button

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

