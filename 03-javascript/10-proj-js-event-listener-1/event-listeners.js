var userConfirm;

// event listener
document.onkeyup = function(input) {

var userKey = input.key.toLowerCase();

  console.log(userKey);

  if (userKey === "h") {
    userConfirm = confirm('Would you like to change the behavior of the "k" button?');
  }

  if (userKey === "k") {
    if (userConfirm === true) {
      alert("Hello");
    } else {
      alert("No Thanks");
    }
  }
}