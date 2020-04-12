const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new UglifyJSPlugin(),
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('production')
        })
   ]
})