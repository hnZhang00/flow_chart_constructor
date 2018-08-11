const config = require('../config');
const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const baseWebpackConfig = require('./webpack.base.conf');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(baseWebpackConfig, {
	mode: 'development',
	devtool: 'eval-source-map',
	devServer: {
		contentBase: './dist',
		hot: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
      template: 'index.html',
      inject: true
		}),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
	]
});