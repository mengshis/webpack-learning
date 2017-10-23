const common= require('./webpack.common.js');
const webpack = require('webpack');
const merge= require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const cssFilename = 'dist/static/css/[name].[contenthash:8].css';
const ExtractTextPlugin =require('extract-text-webpack-plugin');
module.exports=merge(common,{
    devtool:'source-map',
    plugins:[
        new HtmlWebpackPlugin({
            inject: true,
            template: 'app/index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            },
        }),
        new UglifyJSPlugin({
            compress: {
                warnings: false,
                comparisons: false,
            },
            output: {
                comments: false,
                ascii_only: true,
            },
            sourceMap:true
        }),
        new ExtractTextPlugin({
            filename: cssFilename,
        }),
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV':JSON.stringify('production')
            }
        })
    ]
});