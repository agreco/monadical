
const fs = require('fs');
let fileList = fs.readdirSync('./src/');
fileList = fileList.filter(file => !file.startsWith('base'));

module.exports = {
  mode: 'production',

  devtool: 'source-map',

  entry: fileList.reduce((memo, val) => (memo[val] = val, memo), {}),

  output: {
    path: __dirname,
    filename: '[name]',
    sourceMapFilename: '[name].map',
    library: 'monadical',
    libraryTarget: 'commonjs2'
  },

  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },

  resolve: {
    modules: ['src'],
    extensions: ['.js']
  }
};
