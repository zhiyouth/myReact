const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const config = require('./webpack.prod.js');
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

app.use('/api', createProxyMiddleware({
  target: "http://106.54.155.93:8080",
  changeOrigin: true,     // target是域名的话，需要这个参数，
  pathRewrite: {"^/api" : ""}
}))

// Serve the files on port 80.
app.listen(80, function () {
  console.log('Example app listening on port 80!\n');
});