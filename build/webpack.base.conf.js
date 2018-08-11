const config = require('../config');
const path = require('path');

module.exports = {
	mode: 'development',
	entry: [
		// 'webpack-hot-middleware/client',
		'./dev-client.js',
		'../src/main.js'
	],
	output: {
		filename: 'app.js',
		path: config.build.assetsRoot,
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				use: ['babel-loader'],
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ]
			},
			{
				test: /\.(png|jpe?g|svg|jpg|gif)$/,
				use: [
					'url-loader'
				]
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [
					'url-loader'
				]
			},
			{
				test: /\.ico$/,
				use: [
					'file-loader'
				]
			}
		]
	}
}