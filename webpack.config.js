const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	mode: 'development',
	entry: './src/main.js',
	output: {
		filename: 'app.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/'
	},
  resolve: {
    extensions: ['.js'],
    alias: {
    }
  },
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				use: ['babel-loader'],
				exclude: /node_modules/
			},
			{
				test: /\.(css|less)$/,
				// use: ExtractTextPlugin.extract({
				// 	fallback: 'style-loader',
	        use: [
	          'style-loader',
	          { loader: 'css-loader', options: { modules: true, importLoaders: 1 } },
	          {
	            loader: 'postcss-loader',
	            options: {
	              plugins: (loader) => [
	                require('postcss-import')({ root: loader.resourcePath }),
	                require('autoprefixer')(),
	              ]
	            }
	          },
				    { loader: 'less-loader' }
	        ]
				// })
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
	},
	plugins: [
		// new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			title: 'FLOW_CHART_CONSTRUCTOR',
			filename: 'index.html',
      template: 'index.html'
		}),
		// new ExtractTextPlugin('style/[name].css', {
  //     allChunks: true
  //   }),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
	devtool: 'eval-source-map',
	devServer: {
		contentBase: './dist',
		hot: true
	}
}