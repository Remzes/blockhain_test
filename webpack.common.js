const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')

const htmlPlugin = new HtmlWebPackPlugin({
  template: path.join(__dirname, 'public', 'index.html')
})

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            code: true,
            comments: false,
            cacheDirectory: true,
            babelrc: true
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader',
          {loader: 'css-loader', options: {importLoaders: 1}},
          {loader: 'postcss-loader', options: {config: {path: './postcss.config.js'}}
        }]
      }
    ]
  },
  plugins: [htmlPlugin]
}