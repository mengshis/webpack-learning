var path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin =require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    entry: {
        app: './app/main.js',
        vendor:[
            'lodash'
        ]
    },
    devtool: "inline-source-map",
    devServer: {
        contentBase:'./dist',
        hot:true
    },
    plugins: [
        //new CleanWebpackPlugin(['dist']),
       // new HtmlWebpackPlugin({title:"cashing"}),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.HashedModuleIdsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'runtime'
        }),


    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react', 'es2015'],
                        plugins: ['react-html-attrs']
                    }
                }
            },
            {
                test:/\.css$/,
                use: ['style-loader','css-loader']
            }
        ]
    },
    output: {
        filename:'[name].[hash].js',
        path: path.resolve(__dirname, 'dist'),
    }
};
