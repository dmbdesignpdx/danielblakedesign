const path = require('path')


module.exports = (_, argv) => {
  const dev = argv.mode === 'development'

  return {
    entry: {
      main: './assets/scripts/main.ts',
    },
    output: {
      filename: dev ? '[name].js' : '[name].min.js',
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
}
