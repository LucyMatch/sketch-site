const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin }  = require('clean-webpack-plugin');

const outputDirectory = 'dist';

module.exports = {
	entry: ['babel-polyfill', './src/client/index.js'],
	output: {
		path: path.join(__dirname, outputDirectory),
		filename: 'bundled.js',
		publicPath: '/',
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.(s*)css$/,
				use: [
					'style-loader', //creates style nodes from JS strings
					'css-loader', //translates CSS into common JS
					'sass-loader', // compiles Sass to Css
				],
			},
			{
				test: /\.(png|woff|woff2|gif|eot|ttf|svg)$/,
				loader: 'url-loader?limit=100000',
			},
		],
	},
	resolve: {
		extensions: ['*', '.js', '.jsx'],
	},
	devServer: {
		port: 3000,
		open: true,
		host: '0.0.0.0',
		inline: true,
		historyApiFallback: true,
		proxy: {
			'/api/**': {
				// target: 'http://[::1]:8080',
				//pathRewrite: { '^/api': '' },
				target: 'http://localhost:8080',
				secure: false,
				changeOrigin: true,
			},
		},
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
	],
}