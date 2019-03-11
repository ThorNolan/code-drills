// Firebase Chat

// creating a variable that references our database, so we don't have to type
// it out every time
var database = firebase.database();

// Document.ready shorthand
$(function() {

  // -------------------- Your Code Here --------------------
  database.ref().on("child_added", function (childsnapshot) {

    var chatItem = $("<p>");

    chatItem.text(childSnapshot.val());

    $("#chat-display").append(chatItem);

  });

  // on click listener

  $(document).on("click", "button[type=submit]", function (event) {

    event.preventDefault();

    var chatMessage = $("input[type=text").val().trim();

    $("#chat-input").val("");

    database.ref().push(chatMessage);

  });
  
  
 

  // --------------------- End Code Area --------------------

})

