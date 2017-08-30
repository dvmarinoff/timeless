const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
      app: './src/js/main.js',
  },
  // devtool: 'inline-source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/js/')
  },
  devServer: {
      contentBase: './public',
    //   hot: true,
  },
  // module: {
  //    rules: [{
  //        test: /\.css$/,
  //        use: ['style-loader', 'css-loader']
  //    },
  //    {
  //        test: /\.(png|svg|jpg|gif)$/,
  //        use: [
  //            'file-loader'
  //        ]
  //   },
  //   {
  //       test: /\.(woff|woff2|eot|ttf|otf)$/,
  //       use: [
  //           'file-loader'
  //       ]
  //   }
  //   ]
  // },
  plugins: [
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
    }),
    // new HtmlWebpackPlugin({
    //     title: 'Output Management'
    // }),
    // new webpack.HotModuleReplacementPlugin()
  ]
};
