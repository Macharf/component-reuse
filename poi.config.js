// poi.config.js
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin


module.exports = {
  vendor: false,
  filename: {
    js: 'component-reuse.js',
    css: 'style.css',
    images: 'assets/images/[name].[ext]',
    fonts: 'assets/fonts/[name].[ext]',
    chunk: '[id].chunk.js'
  },
  webpack: {
    externals: {
      'vue/dist/vue': 'Vue'
    },
    //plugins: [ new BundleAnalyzerPlugin() ]
  }
}