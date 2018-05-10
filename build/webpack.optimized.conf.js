const merge = require('webpack-merge')
const prodConf = require('./webpack.prod.conf')

module.exports = merge(prodConf, {
    module: {
        rules: [
            {
                test: /\.(jpg|png|gif|svg)$/,
                loader: 'image-webpack-loader',
                // Specify enforce: 'pre' to apply the loader
                // before url-loader/svg-url-loader
                // and not duplicate it in rules with them
                enforce: 'pre'
            }

        ]
    }
})
