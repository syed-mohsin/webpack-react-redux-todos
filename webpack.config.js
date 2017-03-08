var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: __dirname + '/reactApp/index.html',
	filename: 'index.html',
	inject: 'body'
});

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
	devtool: 'source-map',
	plugins: [HtmlWebpackPluginConfig]
};