const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Currently: Dev mode with inline source map
// Server looks into /dist file for auto reload

// Config looks for entry (main.js)
// outputs as [name].bundle.js in dist folder
// Looks for css files and images file inside src folder
// to render the page. (import in JS to add into HTML)
// Allows for font types as well (via css @font family)
// plugin with HTML = auto attach the scripts/css into html

// If want to parse files (csv etc) to JSON 
// use npm install --save-dev csv-loader xml-loader

// If theres any common imports in component :
// use dependOn in entry!

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Todo List',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  optimization: {
    runtimeChunk: 'single',
  },
};

