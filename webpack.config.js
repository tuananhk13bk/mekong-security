const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const path = require('path')

// paths that should be cleaned by CleanWebpackPlugin
let pathsToClean = [
  'dist'
]

let cleanOptions = {
  verbose: true,
  dry: false
}

module.exports = {
  entry: './src/client/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new CleanWebpackPlugin(pathsToClean, cleanOptions)
  ],
  devServer: {
    port: 3000,
    open: true,
    proxy: {
      '/api': 'http://localhost:8000'
    }
  },
}