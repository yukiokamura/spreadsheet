
if(process.argv[2].substr(2) != 'watch'){
  console.log(`
                _                      _
               | |                    | |
  __      _____| |__  _ __   __ _  ___| | __
  \\ \\ /\\ / / _ \\ '_ \\| '_ \\ / _  |/ __| |/ /
   \\ V  V /  __/ |_) | |_) | (_| | (__|   <
    \\_/\\_/ \\___|_.__/| .__/ \\__,_|\\___|_|\\_\\
                     | |
                     |_|

  MODE ------------>   ${process.argv[2].substr(2)}

  `);
}

const MODE = process.argv[2].substr(2) == 'watch' ? 'none' : process.argv[2].substr(2);

const path = require('path');
const enabledSourceMap = (MODE == 'development' || MODE == 'none');
const webpack = require('webpack');
module.exports = {
  mode:'development',
  entry:{
    'app':'./src/js/main.es6'
  },
  devtool: enabledSourceMap  ? 'inline-source-map' : '',
  output:{
    path:__dirname+'/dist/assets/js',
    filename:'[name].js'
  },
  devServer: {
   inline: true,
   contentBase: path.join(__dirname, 'dist'),
   open: true,
   port: 3080,
   watchContentBase: true
  },
  module: {
    rules: [
      {
        test: /\.(es6|jsx)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/react'
              ]
            }
          }
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.scss/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false,
              sourceMap: enabledSourceMap,
              importLoaders: 2
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: enabledSourceMap,
            }
          }
        ],
      },
      {test: /\.(glsl|frag|vert|vs|fs)$/, exclude: /node_modules/, loader: 'glslify-import-loader'},
      {test: /\.(glsl|frag|vert|vs|fs)$/, loader: 'raw-loader'},
      {test: /\.(glsl|frag|vert|vs|fs)$/, loader: 'glslify-loader'},

    ],
  },
  resolve: {
    modules: [
      path.resolve(__dirname, "./"),
      path.join(__dirname, 'node_modules')
    ]
  },

};
