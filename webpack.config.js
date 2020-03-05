const path = require('path');

module.exports = (env, argv) => {
  return {
    entry: './frontend/eris.jsx',
    output: {
      path: path.resolve(__dirname, "app", "assets", "javascripts"),
      filename: 'bundle.js',
    },
    optimization: {
      splitChunks: {
        chunks: 'all'
      },
      minimize: argv.mode === "production"
    },
    module: {
      rules: [
        {
          test: [/\.jsx?$/],
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            query: {
              presets: ['@babel/env', '@babel/react']
            }
          },
        }
      ]
    },
    devtool: 'source-map',
    resolve: {
      extensions: ['.js', '.jsx', '*']
    },
  }
};