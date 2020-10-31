
// Assignment Code
var generateBtn = document.querySelector("#generate");

//requirement arrays
var passwordCharacter = {
  lowerCase: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
  upperCase: ["A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z"],
  specialCharacters: ["!,@,#,$,%,^,&,*,,~,`,+,=,/,\,{,,},[,],<,>,?,,,:,;,."],
  numbers: ["0,1,2,3,4,5,6,7,8,9"],
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//prompt ask user for password criteria
//user's password between 8-128 characters
function generatePassword() {
  
  //prompt ask user for password length.
  var totalLength= prompt ("How long would you like your password to be? (Must be between 8-128 characters)?");
  
    if (totalLength >= 8 || totalLength <= 128) {
      alert ("Must be between 8-128 characters!");
      return;
    }
  }
  //confirm use of lowercase letters
  //var useLowercase = confirm ("Would you like to include lowercase letters?");
   // if (useLowercase === true) { }
  //confirm use of uppercase letters.
  //var useUppercase = confirm ("Would you like to include uppercase letters?");
    //if (useUppercase === true) {}
  //confirm use of special characters.
  //var useSpecial= confirm ("Would you like to include special characters?");
    //if (useSpecial === true) {}
  //confirm use of numbers.
  //var useNumber= confirm = ("Would you like to include numbers?");
    //if (useNumber === true) {}
  
  
    //passwordCharacter += passwordCharacter.charAt(
    //Math.floor(Math.random() * passwordCharacter.length)
//var num = Math.random() * 10) +1;
//Math.ceil
//for (i =0; i < totalLength; i++) {
//   [Math.floor(Math.random() * passwordCharacter.length)];
//  console.log();
//}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


