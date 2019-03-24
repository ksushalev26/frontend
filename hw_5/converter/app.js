var request = require('request');
var http = require('http');
var port = 3000;
var result = 0;
var express = require('express');
var app = express();
var resObj = [];
var baseCurrencyUS = 0;


request('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3&fbclid=IwAR11i1U07wwN-gpaZUCj0BEzqfZ-yMXTsS_lIBzt3UEHFVkYI8V0OHnU1BQ', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        result = body;
    } else {
        console.warn(error);
    }
});

http.createServer(function (req, res) {
    res.write(result);
    res.end();    
}).listen(port, function () { 
    console.log('Server at http://localhost:3000');
});

app.get('/', function (req, res) {
    res.send('Hello world!')
});

app.get('/courses', function (req, res) {
    res.send(result);
    console.log(typeof result);
    resObj = JSON.parse(result);
    console.log(resObj);    
});

app.get('/courses/:ccy', function (req, res) {
    console.log(req.params)
    var course = resObj.find(function (course) {        
        return course.ccy === req.params.ccy;        
    });    
    res.send(course);
    console.log(course);
    for (var base in course) {
        baseCurrencyUS = course['sale'];
    }
    
    var Converter = require('./converter');    
    var conv = new Converter(baseCurrencyUS);
    
    console.log(conv.convertToUa(1000));
    console.log(conv.convertToUs(1000));
});

app.listen(3001, function () {
    console.log('Server on http://localhost:3001')
});


