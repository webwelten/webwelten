const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

const context = path.resolve(__dirname);

module.exports = {
  context,
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          query: {
            cacheDirectory: false,
            plugins: [
              'transform-react-jsx',
              'transform-object-rest-spread',
              [
                'react-css-modules',
                {
                  context,
                },
              ],
            ],
          },
        },
      },
      {
        test: /\.(css|scss)$/,
        include: path.resolve(__dirname, './src'),
        oneOf: [
          {
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: {
                  //sourceMap: true,
                  modules: true,
                  importLoaders: 2,
                  //localIdentName: '[folder]--[local]--[hash:base64:2]',
                  localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
                },
              },
            ],
            exclude: /style/,
          },
          {
            use: ['style-loader', 'css-loader'],
          },
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'url-loader',
      },
    ],
  },
};
