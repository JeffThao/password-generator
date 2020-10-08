var generateBtn = document.querySelector("#generate");

var passwordLength;

var passwordChar = {
  number: "0123456789",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  specialChar: "~!@#$%&-+=_"
};


//Write password to the #password input
function writePassword() {
  passwordLength = prompt("How long would you like your password to be? (8-128 characters)");

  while ((passwordLength == null) || (passwordLength < 8) || (passwordLength > 128)) {

    prompt("Please choose a password length between 8 to 128 characters.");
  }
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;

  
}
 



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
