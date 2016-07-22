module.exports = {
  entry: {
    'main.js': ['./main.js', './styl/react-ui.styl']
    //'react-ui.js': './dist.js',
    //'react-ui.css': './styl/react-ui.styl'
  },
  output: {
    path: './',
    filename: 'index.js'
  },
  devServer: {
    inline: true,
    port: 3333
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.styl$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader!stylus-loader'
      }
    ]
  }
}
