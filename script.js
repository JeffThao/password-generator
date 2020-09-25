var generateBtn = document.querySelector("#generate");
var passwordLength;
var confirmNum;
var confirmLower;
var confirmUpper;
var confirmSpecial;
var password;

var passwordChar = {
  num: "0123456789",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  specialChar: "~!@#$%&-+=_"
};

//Write password to the #password input
function writePassword() {

  var passwordLength = prompt("How long would you like your password to be? (8-128 characters)");

  while ((passwordLength === null) || (passwordLength < 8) || (passwordLength > 128)) {
    passwordLength = prompt("Please choose a password length between 8 to 128 characters.");
    //
    console.log(passwordLength);

    if ((passwordLength > 8) || (passwordLength < 128)) {
      //
      console.log(passwordLength)

      confirmNum = confirm("Do you want numbers?");
      confirmLower = confirm("Do you want lowercase letters?");
      confirmUpper = confirm("Do you want uppercase letters?");
      confirmSpecial = confirm("Do you want special characters? (~!@#$%&-+=_)");
    }

    if (confirmNum !== true) {

      passwordChar = remove(passwordChar.num);
    }

    if (confirmLower !== true) {
      passwordChar = remove(passwordChar.lowerCase);
    }

    if (confirmUpper !== true) {
      passwordChar = remove(passwordChar.upperCase);
    }

    if (confirmSpecial !== true) {
      passwordChar = remove(passwordChar.specialChar);
    }

    if ((confirmNum !== true) && (confirmLower !== true) && (confirmUpper !== true) && (confirmSpecial !== true)) {
      prompt("Please select AT LEAST two of the criterias.");
    }

    for (var i = 0; i < passwordLength; i++) {
      var words = Math.floor(Math.random() * passwordChar.length);
      password = passwordChar[words];
    }
    var passwordText = document.querySelector("#password");
    passwordText.value = password;

  }
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);