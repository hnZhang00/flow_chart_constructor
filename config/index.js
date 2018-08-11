const path = require('path');

module.exports = {
  build: {
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,
    productionGzip: false,
    productionGzipExtensions: ['js', 'css']
  },
  dev: {
    host: 'http://localhost',
    port: 9009,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
    }
  }
}
