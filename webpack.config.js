const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: 'sangrid.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    globalObject: 'this',
    library: {
        name: 'sangrid',
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
  optimization: {
    minimize: false
  },  
  externals: {
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_',
    }
  },
};