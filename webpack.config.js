// const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');

module.exports = {
	entry: './src/js/index.js',
    output: {
        filename: "main.js",
        path: path.resolve(__dirname,'dist')
	},
	devServer: {
		contentBase: 'dist',
		port: 3000

	},
	// module: {
	// 	rules: [
	// 		{
	// 			test: /\.(scss|css)$/,
	// 			use: [
	// 				"style-loader",
	// 				"css-loader",
	// 				"sass-loader"
	// 			]
	// 		}
	// 	]
	// },
	// pplugins: [
	// 	new ExtractTextPlugin("styles.css"),
	// ]
};