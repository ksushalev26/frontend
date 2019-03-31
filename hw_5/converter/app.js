var request = require('request');
var Converter = require('./converter');


function getCurrencyUS(callback) {
    request('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3&fbclid=IwAR11i1U07wwN-gpaZUCj0BEzqfZ-yMXTsS_lIBzt3UEHFVkYI8V0OHnU1BQ', { json: true }, function (error, response, body) {
    if (!error && response.statusCode == 200) { 
        console.log(body); 
        var baseCurrencyUS = 0;          
        baseCurrencyUS = parseFloat(body[2].sale);
        console.log(baseCurrencyUS);
    } else {
        console.warn(error);
    }
    callback (baseCurrencyUS);  
    });       
}

getCurrencyUS(function(data) {    
    var conv = new Converter(data);    
    console.log(conv.convertToUa(1000));
    console.log(conv.convertToUs(1000));
})






     
    




// var Converter = require('./converter');
// var request = require('request');

// getCurrencyUS(function(data){
//     createObj(data)
// })

// function getCurrencyUS(callback){
//     request('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5', { json: true }, function (error, res, body) {
//         var baseCurrencyUS = null;
//         if (!error && res.statusCode == 200) {
//             console.log(body);
//         baseCurrencyUS = parseFloat(body[0].sale) 
//         } else {
//             baseCurrencyUS = 27;
//         }
//         callback(baseCurrencyUS) 
//     })
// }


// function createObj(data){
//     var conv = new Converter(data);
//     console.log(conv.convertToUa(1000))
//     console.log(conv.convertToUs(1000))
// }