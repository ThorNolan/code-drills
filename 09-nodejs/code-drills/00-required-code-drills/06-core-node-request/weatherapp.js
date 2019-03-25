
var request = require("request");

// grab arguments from the command line
var zipcode = process.argv[2];

var key = "edd92394664e330329ca122112237ee8";

// construct query url using my API key
var queryURL = "http://api.openweathermap.org/data/2.5/forecast?units=imperial&zip="+ zipcode +",us&APPID="+ key;


// make call to API using request
request(queryURL, function (error, response, body) {

    if (!error && response.statusCode === 200) {

      var forecast = JSON.parse(body).list;

      for (var i = 0; i < 5; i++) {
        console.log(forecast[i].dt_txt, forecast[i].main.temp)
      }

    } else {
      console.log("Uh oh! an error occured: " + error)
    }
});

