const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },

  module: {
  	rules: [
  	{
  		test: /\.css$/,
  		use: [ 'style-loader', 'css-loader' ]
  	},
  	{
  		test: /\.(png|jpeg|jpg|gif|svg)$/,
  		use: [ 'file-loader' ]
  	},
    {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }]
  }
};