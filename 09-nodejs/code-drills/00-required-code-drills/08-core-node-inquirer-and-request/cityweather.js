var request = require("request");
var inquirer = require("inquirer")

var key = "edd92394664e330329ca122112237ee8"

var queryURL = "http://api.openweathermap.org/data/2.5/weather?units=imperial&APPID="+ key +"&q=";

inquirer.prompt([
    {
      type: "input",
      message: "Enter the name of a city: ",
      name: "userCity"
    }
  ]).then(function(userChoice) {
    request(queryURL + userChoice.userCity, function (error, response, body) {
      if (!error && response.statusCode === 200) {
        var cityWeather = JSON.parse(body);
        console.log(cityWeather.name, cityWeather.sys.country);
        console.log(cityWeather.weather[0].description)
      } else {
        console.log("Uh oh! An error occured: " + error)
      }
    })
  })
