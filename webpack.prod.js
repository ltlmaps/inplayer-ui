const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const pkg = require('./package.json');

module.exports = {
  entry: ['./src/index'],
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'inplayer-ui.min.js',
    library: pkg.name,
    libraryTarget: 'umd',
    publicPath: '/',
    umdNamedDefine: true,
  },
  module: {
    rules: [
      { test: /\.(js|jsx|ts|tsx)$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.(jpe?g|png|gif|ico|svg)$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: 'url-loader',
          },
        ],
      },
      {
        test: /\.(css)$/,
        include: [/stylesheets/, /node_modules/],
        use: ['css-loader'],
      },
      {
        test: /\.css$/,
        exclude: [/stylesheets/, /node_modules/],
        use: ['css-loader?sourceMap&modules,localIdentName=[local]-[hash:base64]'],
      },
    ],
  },
  resolve: {
    modules: [path.resolve('./'), path.resolve('./node_modules')],
    extensions: ['.ts', '.tsx', '.js', 'jsx', '.json'],
    alias: {
      assets: path.resolve(__dirname, './src/assets'),
      components: path.resolve(__dirname, './src/components'),
      blocks: path.resolve(__dirname, './src/blocks'),
      elements: path.resolve(__dirname, './src/elements'),
      modifiers: path.resolve(__dirname, './src/modifiers'),
      utils: path.resolve(__dirname, './src/utils'),
      theme: path.resolve(__dirname, './src/theme'),
      previews: path.resolve(__dirname, './src/previews'),
    },
  },
  plugins: [
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /(en)/),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new CopyWebpackPlugin([{ from: './src/index.d.ts', to: './index.d.ts' }]),
  ],
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
    },
    'styled-components': {
      commonjs: 'styled-components',
      commonjs2: 'styled-components',
      amd: 'styled-components',
    },
  },
};
