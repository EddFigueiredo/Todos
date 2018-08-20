const webpackConfig = require('./webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')

webpackConfig.devtool = false
webpackConfig.output.publicPath = '/'
webpackConfig.plugins = [
  new HtmlWebpackPlugin({
    title: 'AdQuick',
    template: './src/index.ejs',
    config: '/config/local.js'
  })
]

module.exports = webpackConfig
