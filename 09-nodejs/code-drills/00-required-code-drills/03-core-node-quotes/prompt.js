// ======== You are given NOTHING to start with 😱 ========
var fs = require("fs");

var person = process.argv[2] + " " + process.argv[3];
var defaultMessage = "That person never said anything...";



function readMe() {
    fs.readFile("quotes.txt", "utf8", function(err, data){

        if (err){ 
            return console.log("Uh oh! An error occured: " + err);
        }

        // split contents of random.txt on the semicolon
        var dataArr = data.split(";");

        for (var i=0; i < dataArr.length; i++) {
            var quote = dataArr[i].split("-");

            if (quote[1] === person) {
                defaultMessage = quote[0];
                console.log(defaultMessage);
                return;
            }
        }
        console.log(defaultMessage);
    });
}

readMe();
