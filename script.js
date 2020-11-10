var generateBtn = document.querySelector("#generate");
var passwordLength;
var confirmNum;
var confirmLower;
var confirmUpper;
var confirmSpecial;

var specialArr=["~","!","@","#", "$","%","&", "-", "+", "=", "_"];
var numArr=[0,1,2,3,4,5,6,7,8,9];
var lowerArr=["a","b","c", "d", "e", "f", "g" ,"h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperArr=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var userArr=[];

//Write password to the #password input
function writePassword() {

  var passwordLength = prompt("How long would you like your password to be? (8-128 characters)");

  while ((passwordLength === null) || (passwordLength < 8) || (passwordLength > 128)) {
    passwordLength = prompt("Please choose a password length between 8 to 128 characters.");
  }
  
    console.log(passwordLength);

    if ((passwordLength > 8) || (passwordLength < 128)) {
    
      console.log(passwordLength)

      confirmNum = confirm("Do you want numbers?");
      confirmLower = confirm("Do you want lowercase letters?");
      confirmUpper = confirm("Do you want uppercase letters?");
      confirmSpecial = confirm("Do you want special characters? (~!@#$%&-+=_)");
    }
    if(confirmLower){
      //push the lowerArr into userArr
      userArr.push(lowerArr);
    }
    if(confirmNum){
      //push the lowerArr into userArr
      userArr.push(numArr);
    }
    if(confirmSpecial){
      //push the lowerArr into userArr
      userArr.push(specialArr);
    }
    if(confirmUpper){
      //push the lowerArr into userArr
      userArr.push(upperArr);
    }

    if ((confirmNum !== true) && (confirmLower !== true) && (confirmUpper !== true) && (confirmSpecial !== true)) {
      alert("Please select AT LEAST two of the criterias.");
    }
    console.log(userArr);
    var finalpw="";

    for (var i = 0; i < passwordLength; i++) {
      if(i<userArr.length){
        firstIndex=i;
      }
      else{

      firstIndex=( Math.floor(Math.random() * ((userArr.length) - 0) + 0))
      }

     var secondIndex=( Math.floor(Math.random() * ((userArr[firstIndex].length-1) - 0) + 0))
      
      finalpw+=userArr[firstIndex][secondIndex];
    }

    var passwordText = document.querySelector("#password");
    passwordText.value = finalpw;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);