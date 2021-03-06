import ExtractTextPlugin from 'extract-text-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const baseConfig = {
  entry: {
    main: './src/entry.js'
  },
  output: {
    filename: 'index.js',
    path: 'public',
    publicPath: '/'
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.json$/, loader: 'json' },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css-loader?modules&importLoaders=1&localIdentName=[path]__***[local]***__[emoji:1]!postcss!sass') },
      { test: /\.otf$/, loader: 'url' }
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html'
    })
  ],
  postcss: function () {
    return [require('postcss-cssnext')]
  }
}

module.exports = baseConfig
