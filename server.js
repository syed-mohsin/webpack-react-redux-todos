var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('build'));

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, 'build/index.html'));
});

app.listen(process.env.PORT || 3001, function() {
	console.log('starting server on port: ', process.env.PORT || 3001);
});