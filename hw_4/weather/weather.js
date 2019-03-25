var request = require('request');
var cheerio = require('cheerio');

module.exports.getWeather = function() {
	request('https://api.openweathermap.org/data/2.5/weather?q=Dnipropetrovsk,ua&units=metric&appid=417c0f89e42ea2bb6fd8d3687faceef3&lang=ru', function (error, response, body) {
  	   if (!error) {
    		var $ = cheerio.load(body);
    		//console.log(body);
    		var data = JSON.parse(body);
    		console.log(data);
         } else {
    		 console.log("We've encountered an error: " + error);
  	   }
	 });	
};




// https://openweathermap.org/api










