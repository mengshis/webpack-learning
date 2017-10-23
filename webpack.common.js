const webpack=require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
module.exports={
    entry: {
        app:'./app/main.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react', 'es2015'],
                        plugins: ['react-html-attrs'],//["import", { libraryName: "antd", style: "css" }] // `style: true` 会加载 less 文件
                        cacheDirectory: true,
                    },

                }
            },
            {
                test: /\.css$/,
                use: [
                    require.resolve('style-loader'),
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            importLoaders: 1,
                        },
                    },
                    {
                        loader: require.resolve('postcss-loader'),
                        options: {
                            // Necessary for external CSS imports to work
                            // https://github.com/facebookincubator/create-react-app/issues/2677
                            ident: 'postcss',
                            plugins: () => [
                                require('postcss-flexbugs-fixes'),
                                autoprefixer({
                                    browsers: [
                                        '>1%',
                                        'last 4 versions',
                                        'Firefox ESR',
                                        'not ie < 9', // React doesn't support IE8 anyway
                                    ],
                                    flexbox: 'no-2009',
                                }),
                            ],
                        },
                    },
                    /*{
                        loader: require.resolve('file-loader'),
                        options: {
                            name: 'dist/static/css/[name].[hash:8].[ext]',
                        }
                    }*/
                ],
            },
            {
                test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                use: [
                    {
                        loader:'url-loader',
                        options: {
                            limit: 10000,
                            name: './images/[name].[hash:8].[ext]',
                        },
                    }
                ]
            },
            {
                test:/\.(woff|woff2|eot|TTF|ttf|otf|svg)$/,
                use:[{
                    loader:'file-loader',
                    options: {
                        name: './font/[name].[hash:8].[ext]',
                    },
                }]

            },

        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist/**/*']),
        new HtmlWebpackPlugin({
            title:'production',
            template: 'app/index.html',
        }) ,
       /* new webpack.HashedModuleIdsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'runtime'
        }),*/
    ],
    output: {
      /*  filename: "[name].bundle.js",/!*filename:'[name].[hash].js',*!/
        path: path.resolve(__dirname,'dist'),*/
        /*path: __dirname,
        filename: "./dist/[name].bundle.js"*/
        pathinfo: true,
        path: path.resolve(__dirname,'dist'),
        filename: './js/bundle.js',
        chunkFilename: 'dist/js/[name].[hash].js',
    }
}


