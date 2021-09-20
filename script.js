// Assignment Code
var generateBtn = document.querySelector("#generate");



var uppers = "QWERTYUIOPASDFGHJKLZXCVBNM";
var lowers = "qwertyuiopasdfghjklzxcvbnm";
var specials = "!@#$%^&*()_+[]\{}|;<>?:";
var nums = "1234567890";

function generatePassword() {
  var finalPassword = "";
  var numberOfCharacters = parseInt(prompt("How many characters do you want?"));

  if(numberOfCharacters < 8 || numberOfCharacters >  128) {
    alert("Try again");
    return;
  }

  var wantLowers = confirm("Do you want lower case letters?");
  var wantUppers = confirm("Do you want upper case letters?");
  var wantSpecials = confirm("Do you want special characters?");
  var wantNums = confirm("Do you want numbers?");

  var possibilities = "";

  if (wantLowers) {
    possibilities += lowers;
  }
  if (wantUppers) {
    possibilities += uppers;
  }
  if (wantSpecials) {
    possibilities += specials;
  }
  if (wantNums) {
    possibilities += nums;
  }

  for (var i = 0; i < numberOfCharacters; i++) {
    var rand = Math.floor(Math.random() * possibilities.length);
    var randChar = possibilities[rand];
    finalPassword += randChar;
  }

  return finalPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
