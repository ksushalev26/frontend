//Task 1

var http = require('http');

var port = 3000;

var fs = require('fs');

http.createServer(function (req, res) {
    if (req.url === '/') {
        res.write('Hello World!');
        res.end();
    } else if (req.url === '/about') {
        console.log(req.method);
        console.log(req.headers);
        console.log(req.url);
        res.write('Hello World!');
        res.end();
    } else if (req.url === '/contact') {
        fs.readFile('index.html', function (err, data) {
            if (err) throw err;
            res.write(data);
            res.end();
        });
    }
}).listen(port, function () {
    console.log('Server at http://localhost:3000');
});


// Task 2

var Event = require('events').EventEmitter;
var emt = new Event();

function logger() {
    logIn();
    readArticle();
    readAnotherArticle();
    stopReadArticle();
    logOut();
}

function logIn() {
    emt.on('logIn', function () {
        var date = new Date();
        console.log('User is logged in ', date);
    });
    return emt.emit('logIn');
}

function readArticle() {
    emt.on('readArticle', function () {
        console.log('User is reading article...');
    });
    return emt.emit('readArticle');
}

function readAnotherArticle() {
    emt.on('readAnotherArticle', function () {
        console.log('User is reading another article...');
    });
    return setTimeout(function () {
        emt.emit('readAnotherArticle');
    }, 1000)
}

function stopReadArticle() {
    emt.on('stopReadArticle', function () {
        console.log('User stop reading articles');
    });
    return setTimeout(function () {
        emt.emit('stopReadArticle');
    }, 2000)
}

function logOut() {
    emt.on('logOut', function () {
        var date = new Date();
        console.log('User are successfully logged out in', date);
    });
    return setTimeout(function () {
        emt.emit('logOut');
    }, 3000)
}

logger();


// Task 3

var request = require('request');
var http = require('http');
var port = 3000;

request('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3&fbclid=IwAR11i1U07wwN-gpaZUCj0BEzqfZ-yMXTsS_lIBzt3UEHFVkYI8V0OHnU1BQ', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        data = JSON.parse(body);
        for (var i = 0; i < data.length; i++) {
            console.log('Currency: ' + data[i].ccy + '\n' + ' Buy: ' + data[i].buy + ' Sale: ' + data[i].sale);
        }
    } else {
        console.warn(error);
    }
});


// Task 4

var request = require('request');
var http = require('http');
var port = 3000;
var result = 0;


request('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3&fbclid=IwAR11i1U07wwN-gpaZUCj0BEzqfZ-yMXTsS_lIBzt3UEHFVkYI8V0OHnU1BQ', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        result = body;
    } else {
        console.warn(error);
    }
});

http.createServer(function (req, res) {
    if (req.url === '/cur_rates') {
        var data = JSON.parse(result);
        for (var i = 0; i < data.length; i++) {
            var a = '\n' + 'Currency: ' + data[i].ccy + '\n' + ' Buy: ' + data[i].buy + ' Sale: ' + data[i].sale;
            res.write(a);
        }
        res.end();
    } else {
        res.write('<h1>Do you want to know currency rates? You are welcome to <a href="http://localhost:3000/cur_rates">our page</a></h1>');
        res.end();
    }
}).listen(port, function () {
    console.log('Server at http://localhost:3000');
});


// Task 5

var xhr = new XMLHttpRequest();
xhr.onload = function () {
    if (xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        console.log(data);
        var rates = document.getElementById('rates');

        data.forEach(function (element) {
            var p = document.createElement('p');
            p.innerHTML = `Purchase rate of ${JSON.stringify(element.ccy)}: ${JSON.stringify(element.buy)}. Selling rate of ${JSON.stringify(element.ccy)}: ${JSON.stringify(element.sale)}. `;
            rates.appendChild(p);
        });
    } else {
        console.log('Error');
    }
}
xhr.open('GET', 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3&fbclid=IwAR11i1U07wwN-gpaZUCj0BEzqfZ-yMXTsS_lIBzt3UEHFVkYI8V0OHnU1BQ');
xhr.send();


