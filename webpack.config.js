const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');//每次npm run build 都会生成新的 html文件
const {CleanWebpackPlugin} = require('clean-webpack-plugin');//每次npm run build 都会把历史遗留的多余文件(这里可以理解为以前不用的文件删除掉了，但是/dist文件夹里面还有)删除掉
const webpack = require('webpack');
module.exports = {
    entry: {
        index: './src/pages/index/rootComponent.js',
        login: './src/pages/login/rootComponent.js'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Output management',
            filename: 'index.html',
            chunks: ['index'],
            minify:{
                removeComments:true, //是否压缩时 去除注释
                collapseWhitespace: false
            }
        }),
        new HtmlWebpackPlugin({
            title: 'Output management',
            filename: 'login.html',
            chunks: ['login'],
            minify:{
                removeComments:true, //是否压缩时 去除注释
                collapseWhitespace: false
            }
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
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
    mode: 'development',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.js|jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        'presets': [
                            'env',
                            'stage-0',
                            'react'
                        ]
                    }
                }
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            }
        ]
    }
};