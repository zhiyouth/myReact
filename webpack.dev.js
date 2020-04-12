const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true,
        https: true,
        proxy: {
            "/api": {
              target: "http://106.54.155.93:8080",
              changeOrigin: true,     // target是域名的话，需要这个参数，
              pathRewrite: {"^/api" : ""}
            }
          }
    },
})