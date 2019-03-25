// require inquirer
var inquirer = require("inquirer");


// define our initial quotes
var quotes = [
    {
      author: "Theon Greyjoy",
      quote: "What is dead may never die."
    },
    {
      author: "Michael Scott",
      quote: "You miss 100% of the shots you don't take - Wayne Gretsky."
    }
]
  

// call on the function that displays our main menu
beginPrompt(); 
function beginPrompt() {
    console.log("Welcome to the quote library my dude.")
    displayMenu();
}


// define a function that displays the main menu
function displayMenu() {

  // prompt the user to choose between three options
  inquirer.prompt([
    {
        type: "list",
        name: "action",
        message: "What would you like to do?",
        choices: ["Add Quote", "Display Quote", "Exit"]
    }
  ]).then(function (userChoice) {

    // depending on the user selection, 
    switch (userChoice.action) {
    
      // call on a function to add a new quote
      case "Add Quote":  
      addQuotes();
      break;

      // call on a function to display a quote
      case "Display Quote":
      showQuotes();
      break;  
      
      // exit the application by not calling on any functions
      case "Exit":
      console.log("Alright bye then.")  
    }
  })   
};


// define a function that will show the user all the quotes to choose from
function showQuotes() {

  // create a new array of all the authors of the quotes to use for the user prompt
    var authors = [];
    for (var i = 0; i < quotes.length; i++) {
        authors.push(i + ") " + quotes[i].author);
    }
  
  // ask the user to choose which author's quote they want to see
  inquirer.prompt([
    {
      type: "list",
      name: "authorChoice",
      message: "Which author do you want to see a quote from? ",
      choices: authors
    }
  ]).then(function(userChoice) {

    // find the quote by the chosen author and display it
    var authorIndex = authors.indexOf(userChoice.authorChoice);
    console.log(quotes[authorIndex].quote, "\n");
    displayMenu();
  })
}

// define a function that lets the user add quotes to the display list
function addQuotes() {

  // ask the user to input the author and then the quote
  inquirer.prompt([
    {
      type: "input",
      name: "author",
      message: "Author's name: "
    },
    {
      type: "input",
      name: "quote",
      message: "Author's quote: "
    }
  ]).then(function(userInput) {
  

    // add the new quote with the corresponding author into our quote storage
    quotes.push({author: userInput.author, quote: userInput.quote});
    displayMenu();

  });
}
