const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js',
    print: './src/print.js',    
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    globalObject: 'this',
    library: {
        name: 'test',
        type: 'umd',
    },
  },
  module: {
    rules: [
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        }
    ],
  },
};