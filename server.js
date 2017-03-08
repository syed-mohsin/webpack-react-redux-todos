var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('build'));

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3001, function() {
	console.log('starting server on port: ', 3001);
});