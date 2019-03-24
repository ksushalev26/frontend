<<<<<<< HEAD
var http = require('http');
var port = 3000;
var fs = require('fs');

var myWriteFile = fs.createWriteStream('text.txt');

for (var i = 0; i < 100; i++) {
    myWriteFile.write('<p>Incididunt deserunt sit duis in voluptate amet deserunt aute deserunt fugiat et cillum qui. Sint exercitation quis irure voluptate labore veniam veniam nisi id. Dolore ipsum cupidatat pariatur velit cillum magna magna enim. Ullamco in cillum fugiat adipisicing dolor exercitation. Exercitation sint reprehenderit dolor nulla do ut est occaecat eiusmod occaecat ullamco aute quis. Anim sunt nostrud tempor ex esse occaecat cupidatat reprehenderit.</p>');
}
myWriteFile.end();

http.createServer(function(req, res) {
    if (req.url === '/stream') {
        var stream = fs.createReadStream('text.txt');
        stream.pipe(res);
        console.log('stream');
    } else if (req.url === '/file') {
        fs.readFile('text.txt', function(err, data) {
            res.write(data);
            res.end();
            console.log('not a stream');
        });
    } else if (req.url === '/'){        
        res.write('You can read file in stream or not a stream');
        res.end();
    }   
}).listen(port, function() {
    console.log('Server at http://localhost:3000')
});

=======
var http = require('http');
var port = 3000;
var fs = require('fs');

var myWriteFile = fs.createWriteStream('text.txt');

for (var i = 0; i < 100; i++) {
    myWriteFile.write('<p>Incididunt deserunt sit duis in voluptate amet deserunt aute deserunt fugiat et cillum qui. Sint exercitation quis irure voluptate labore veniam veniam nisi id. Dolore ipsum cupidatat pariatur velit cillum magna magna enim. Ullamco in cillum fugiat adipisicing dolor exercitation. Exercitation sint reprehenderit dolor nulla do ut est occaecat eiusmod occaecat ullamco aute quis. Anim sunt nostrud tempor ex esse occaecat cupidatat reprehenderit.</p>');
}
myWriteFile.end();

http.createServer(function(req, res) {
    if (req.url === '/stream') {
        var stream = fs.createReadStream('text.txt');
        stream.pipe(res);
        console.log('stream');
    } else if (req.url === '/file') {
        fs.readFile('text.txt', function(err, data) {
            res.write(data);
            res.end();
            console.log('not a stream');
        });
    } else if (req.url === '/'){        
        res.write('You can read file in stream or not a stream');
        res.end();
    }   
}).listen(port, function() {
    console.log('Server at http://localhost:3000')
});

>>>>>>> 1e440cb4ca311ee4c0d2ff7895c61f4b72637910
