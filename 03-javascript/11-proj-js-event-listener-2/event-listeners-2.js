
var userHistory = [];

var alphabet = "abcdefghijklmnopqrstuvwxyz"

document.onkeyup = function(input){

  var userKey = input.key.toLowerCase();

  if (alphabet.includes(userKey)){

    document.getElementById("user-key").textContent = userKey;

    userHistory.push(userKey);

    document.getElementById("user-history").textContent = userHistory;
  } else {

    document.getElementById("user-key").textContent = "Please press a valid letter";
  }

}