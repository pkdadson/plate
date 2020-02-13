const webpack = require('webpack');
const isProd = process.env.NODE_ENV === "production";

module.exports = {
    publicPath: isProd ? "/" : "",
    configureWebpack: {
        // Set up all the aliases we use in our app.
        plugins: [
            new webpack.optimize.LimitChunkCountPlugin({
                maxChunks: 6
            })
        ]
    },
    pwa: {
        name: 'Plate',
        themeColor: '#9CCD64',
        msTileColor: '#9CCD64',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: '#9CCD64',
    },
    css: {
        // Enable CSS source maps.
        sourceMap: process.env.NODE_ENV !== 'production'
    }
};