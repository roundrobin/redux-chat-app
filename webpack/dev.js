var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var WebpackErrorNotificationPlugin = require('webpack-error-notification');

//------------------------------------------------------------------------------
// Plugins
//------------------------------------------------------------------------------
var plugins = [
    new ExtractTextPlugin('../build/css/main.css', {
        allChunks: true
    })
    , new webpack.optimize.CommonsChunkPlugin(/* chunkName= */'vendor', /* filename= */'../build/js/vendor.js')
    ,new WebpackErrorNotificationPlugin(/* strategy */)
];
//------------------------------------------------------------------------------
// Module definition
//------------------------------------------------------------------------------
module.exports = {
    entry: {
        app: './main.jsx',
        vendor: ['react', 'react-dom', 'redux']
    },
    devtool: 'source-map',
    output: {
        filename: '../build/js/bundle.js',
        path: __dirname
    },
    module: {
        loaders: [{
              test: /\.jsx?$/,
              exclude: /(node_modules|bower_components)/,
              loader: 'babel?presets[]=react,presets[]=es2015'
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('css!sass')
        }
        ]
    },
    plugins: plugins
};
