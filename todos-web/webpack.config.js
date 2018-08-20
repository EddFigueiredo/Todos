const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    app: [
      'regenerator-runtime/runtime',
      './src/index.jsx'
    ]
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
    publicPath: '/'
  },

  performance: {
    hints: false
  },

  resolve: {
    alias: {
      core: path.resolve(__dirname, './src/core'),
      state: path.resolve(__dirname, './src/state'),
      containers: path.resolve(__dirname, './src/containers')
    },
    modules: [path.resolve(__dirname, 'node_modules')],
    extensions: ['.jsx', '.js']
  },

  devtool: 'source-map',

  module: {
    loaders: [
      { test: /\.(png|svg|woff|woff2|ttf|eot)/, loader: 'file-loader' },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      },
      { test: /\.js(x)?$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'AdQuick',
      template: './src/index.ejs',
      config: `/config/${process.env.NODE_ENV}.js`
    })
  ]
}
