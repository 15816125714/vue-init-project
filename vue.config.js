// 设置快捷路径
const path = require('path');
function resolve (dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  devServer: {
    port: 8000,
    open: true,
  },
  productionSourceMap: false,
  chainWebpack: config => {
    // alias设置目录别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('m', resolve('src/modules/'))
      .set('assets', resolve('src/assets/'))
      .set('#', resolve('src/components/'))
      .set('api', resolve('src/api'))

    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, { limit: 10240 }))

    // 移除 preload 插件
    config.plugins.delete('preload')

    // 移除 prefetch 插件
    config.plugins.delete('prefetch')
  },
}