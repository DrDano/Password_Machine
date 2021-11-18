// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  

  // character variables defined here
  var charArrays = {
    charNumbers: [1,2,3,4,5,6,7,8,9],
    charSpecial: ["!","\"","#","$","%","&","\'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","\`","{","|","}","~"],
    charUpperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    charLowerCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  };

  var validate = false
  while (validate === false) {
  // user decisions defined here
  var confirmCharLen = window.prompt("How many characters do you want your password to be? [8-128]");
  while (confirmCharLen < 8 || confirmCharLen > 128) {
    alert("Password must be between 8-128 characters in length, please try again.")
    var confirmCharLen = window.prompt("How many characters do you want your password to be? [8-128]");
  }

  var confirmCharNum = confirm("Would you like numbers in your password?");
  var confirmCharSpecial = confirm("Would you like special characters in your password?");
  var confirmCharUpper = confirm("Would you like upper case letters in your password?");
  var confirmCharLower = confirm("Would you like lower case letters in your password?");

  while(confirmCharNum === false && confirmCharSpecial === false && confirmCharUpper === false && confirmCharLower === false) {
    alert("You did not select any character types, please select at least one type.")
    var confirmCharNum = confirm("Would you like numbers in your password?");
    var confirmCharSpecial = confirm("Would you like special characters in your password?");
    var confirmCharUpper = confirm("Would you like upper case letters in your password?");
    var confirmCharLower = confirm("Would you like lower case letters in your password?");
  }

  validate = confirm("Are you sure you want to use these character types?")

  };

  // count types of characters used
  var charTypes = 0
  if (confirmCharNum) {charTypes += 1}
  if (confirmCharSpecial) {charTypes += 1}
  if (confirmCharUpper) {charTypes += 1}
  if (confirmCharLower) {charTypes += 1}
  else if (charTypes === 0) {charTypes = 1}

  // Determine the count of each character to use. If the count of a character type is not evenly divisible by 1 then round it down.
  function charCounter(pwLength) {

    var characterNum = pwLength/charTypes
    if (characterNum % 1 != 0) {characterNum = Math.floor(characterNum)}

    return characterNum
  }

  // used to get a random index for any array
  var randomIndex = function(indexLen) {
    var randInd = Math.floor((indexLen * Math.random()));
    return randInd;
  }

  // if the user selected the type, then randomly index out the amount of characters for that type, and do this for each type the user desires
  function pwCharSelector(charTypeCount) {
    var password = ""
    if (confirmCharNum) {
      for (var i=0; i<charTypeCount; i++) {
        password += charArrays.charNumbers[randomIndex(charArrays.charNumbers.length)]
      };
    }
    if (confirmCharSpecial) {
      for (var i=0; i<charTypeCount; i++) {
        password += charArrays.charSpecial[randomIndex(charArrays.charSpecial.length)]
      };
    }
    if (confirmCharUpper) {
      for (var i=0; i<charTypeCount; i++) {
        password += charArrays.charUpperCase[randomIndex(charArrays.charUpperCase.length)]
      };
    }
    if (confirmCharLower) {
      for (var i=0; i<charTypeCount; i++) {
        password += charArrays.charLowerCase[randomIndex(charArrays.charLowerCase.length)]
      }
    }
    return password;
  }



  //define function generatePassword which will be the final step in generating the password
  function generatePassword() {

    var password = pwCharSelector(charCounter(parseInt(confirmCharLen)));
    var remainder = confirmCharLen % charTypes

    // if there is a remainder, find the index of a type that is true and use that type's array to fill the remainder
    if (remainder > 0 && confirmCharLen <= 128) {
      var indext = 0

      var confirmArr = [confirmCharNum, confirmCharSpecial, confirmCharUpper, confirmCharLower]

      for (let i = 0; i < confirmArr.length; i++) {
        if (confirmArr[i]) {indext = i};
      }
      
      for(var i=0; i<remainder; i++) {
        newChar = Object.values(charArrays)[indext]
        password += newChar[1]
      }
    }

    return password

  };

  // create copy to clipboard button?

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
