var fs = require("fs");

var quotePerson = process.argv.slice(2);

var quotePersonString = quotePerson.join(" ");
    quotePerson = quotePersonString.split(" said ");

    console.log(quotePerson);

var fileString = '"' + quotePerson[1] + '"' + "-" + quotePerson[0];

fs.appendFile("quotes.txt", ";" + fileString, function(error, data) {
    console.log("Your quote has been added!")
});