const path = require('path')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'script.js'
    },
    module: {
      rules: [{
          test: /\.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
              cacheDirectory: true,
              presets: ["@babel/preset-env", "@babel/preset-react"]
          }
      }]
  }
}
