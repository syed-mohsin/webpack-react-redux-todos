var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: './reactApp/app.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'app.bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader'
			}
		]
	},
	stats: {
		color: true
	},
	devtool: 'source-map'
};