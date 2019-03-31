var weather = require('./weather');

weather.getWeather(function(data) {
	console.log('In ' + data.name + ' temperature is ' + data.main[1].temp + ' degrees above zero');
});


	






