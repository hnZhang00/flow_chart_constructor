const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('../config');
const webpackConfig = require('./webpack.dev.conf.js');
const proxyMiddleware = require('http-proxy-middleware');

const port = process.env.PORT || config.dev.port;
const host = process.env.HOST || config.dev.host;
const proxyTable = config.dev.proxyTable;

// Object.keys(config.entry).forEach(function (name) {
//   config.entry[name] = ['./dev-client'].concat(config.entry[name])
// })
console.log(JSON.stringify(webpackConfig))
const compiler = webpack(config);
const app = express();

const devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
    chunks: false
  }
});

const hotMiddleware = require('webpack-hot-middleware')(compiler);
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' });
    cb();
  });
});

// Object.keys(proxyTable).forEach(function (context) {
//   let options = proxyTable[context]
//   if (typeof options === 'string') {
//     options = { target: options }
//   }
//   app.use(proxyMiddleware(context, options))
// });

app.use(require('connect-history-api-fallback')())

app.use(devMiddleware);
app.use(hotMiddleware);

const staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory);
app.use(staticPath, express.static('./static'));

app.listen(9001, function (err) {
  if (err) {
    console.log(err);
    return;
  }
	console.log('Listening at http://' + host + ':' + port + '\n');
});