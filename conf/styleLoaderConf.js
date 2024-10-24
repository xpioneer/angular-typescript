const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const _PROD_ = process.env.NODE_ENV === 'production'

const postcssLoader = {
  loader: 'postcss-loader',
  options: {
    sourceMap: _PROD_ ? false : true,
    postcssOptions: {
      plugins: [
        require('tailwindcss'),
        ['postcss-preset-env', {
          browsers: '> 0.5%, not dead, iOS >= 12, Android >= 4.5'
        }]
      ]
    },
    // plugins: [
    //   require('autoprefixer')({
    //     browsers: ["Android 4.1", "iOS 7.1", "Chrome > 31", "ff > 31", "ie >= 8"]
    //   })
    // ]
  }
}

const styleRules = [
  // {
  //   test: /\.less$/,
  //   use: [
  //     'raw-loader',
  //     'less-loader'
  //   ]
  // },
  {
    test: /\.less$/,
    use: [
      'style-loader',
      'css-loader',
      postcssLoader,
      {
        loader: 'less-loader',
        options: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#8514f5',
              '@link-color': '#8514f5',
            },
            javascriptEnabled: true
          }
        }
      }
    ]
  },
  {
    test: /\.css$/,
    use: [
      'style-loader',
      'css-loader',
      postcssLoader
    ]
  },
]

if(_PROD_) {
  styleRules.forEach(rule => {
    rule.use.splice(0, 1, MiniCssExtractPlugin.loader)
  })
}

module.exports = styleRules
