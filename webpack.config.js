const path = require('path')


module.exports = {
  entry: {
    main: './src/main.ts',
  },
  output: {
    filename: '[name].min.js',
    path: path.join(__dirname, 'assets/dist'),
  },
  module: {
    rules: [
      {
        test: /.ts$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
}
