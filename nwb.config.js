module.exports = {
  type: 'react-app',
  karma: {
    testFiles: [
      'src/**/*.spec.js'
    ],
    files: [{pattern: '**/*.spec.js', watched: true, included: false, served: true}],
    plugins: [
      require('karma-sinon-chai'),
      require('karma-mocha-reporter'),
      require('karma-notify-reporter'),
      require('karma-jsdom-launcher')
    ],
    reporters: ['mocha', 'notify'],
    browsers: [
      'jsdom'
    ],
    noInfo: true
  },
  webpack: {
    publicPath: 'https://marsch.github.io/minicrm/',
    extra: {
      devtool: '#source-map'
    },
    loaders: {
      // NOTE: not well documented on nwb site
      // this is needed to actually make react-toobox-work.
      // Background: nwb is generating this loader dynamically for
      // scss files within the node_modules directory. And react-toolbox
      // needs those adjustments in order to work properly
      'vendor-sass-css': {
        query: {
          modules: true,
          importLoaders: true,
          localIdentName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  }
}
