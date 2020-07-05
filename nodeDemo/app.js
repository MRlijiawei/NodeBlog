// HelloWorld
var http = require('http')
http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write('<h1>Node.js</h1>');
	res.end('<p>Hello World</p>');
}).listen(3000);
console.log("HTTP server is listening at port 3000.")

var http = require('http');
var url = require('url');
var util = require('util');
http.createServer(function(req, res) {
res.writeHead(200, {'Content-Type': 'text/plain'});
res.end(util.inspect(url.parse(req.url, true)));
}).listen(3000);

http.createServer(function(req, res) {
var post = '';
req.on('data', function(chunk) {
post += chunk;
});
req.on('end', function() {
post = querystring.parse(post);
res.end(util.inspect(post));
});
}).listen(3000);

// 读取文件
var fs = require('fs');
// readFileSync同步读取//open(),readFile()read()等等
fs.readFile('note.txt', 'utf-8', function(err, data) {
	if (err) {
		console.error(err);
	} else {
		console.log(data);
	}
});
console.log('end.');

// EventEmitter 
var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();
event.on('some_event', function() {
	console.log('some_event occured.');
});
setTimeout(function() {
	event.emit('some_event');
}, 1000);