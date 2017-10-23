const merge = require('webpack-merge');
const common =require('./webpack.common.js');
const webpack = require('webpack');
module.exports=merge(common,{
    devtool: "inline-source-map",
    devServer: {
        contentBase:'./dist',
        hot:true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        /*new webpack.HashedModuleIdsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'runtime'
        }),*/
    ],
});



