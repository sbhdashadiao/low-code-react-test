const { CleanWebpackPlugin } = require('clean-webpack-plugin');     // 这里需要把CleanWebpackPlugin写在{}里
const path  =require('path');
const webpack = require('webpack');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: './src/index.tsx',



    output: {
    
    filename:  'main.js'

    },

    resolve: {
        fallback:{
            "fs":require.resolve('fs')
        },
        // fallback: {
        //     assert: require.resolve('assert'),
        //     buffer: require.resolve('buffer'),
        //     console: require.resolve('console-browserify'),
        //     constants: require.resolve('constants-browserify'),
        //     crypto: require.resolve('crypto-browserify'),
        //     domain: require.resolve('domain-browser'),
        //     events: require.resolve('events'),
        //     http: require.resolve('stream-http'),
        //     https: require.resolve('https-browserify'),
        //     os: require.resolve('os-browserify/browser'),
        //     path: require.resolve('path-browserify'),
        //     punycode: require.resolve('punycode'),
        //     process: require.resolve('process/browser'),
        //     querystring: require.resolve('querystring-es3'),
        //     stream: require.resolve('stream-browserify'),
        //     string_decoder: require.resolve('string_decoder'),
        //     sys: require.resolve('util'),
        //     timers: require.resolve('timers-browserify'),
        //     tty: require.resolve('tty-browserify'),
        //     url: require.resolve('url'),
        //     util: require.resolve('util'),
        //     vm: require.resolve('vm-browserify'),
        //     zlib: require.resolve('browserify-zlib'),
        //   },
        extensions:  ['.ts', '.tsx', '.js'],     //  这里不要漏写圆点
        alias:{
            "process":"process/browser"
        },

    },

    module: {

        rules: [{
            test: /\.(ts|tsx)$/,
            exclude: path.resolve(__dirname, './node_modules'),
            use: {
              loader: 'babel-loader',
            }
          },
          {
            test:/\.(less|css)$/i,
            exclude:/node_modules/,
            // include:[path.resolve(__dirname,/(less|css)/)],
            use:[
                'style-loader',
                {
                    loader:'css-loader',
                    options:{

                        modules:true
                    }
                },
                // {
                //     loader:'less-loader',
                // }
                // 'less-loader',
                {
                    loader:'less-loader',
                    options:{
                        lessOptions:{
                            javascriptEnabled:true
                        }
                        
                        //不应该exclude

                    }
                }
            ]
        },
        {
            test: /\.(less|css)$/,
            include:/node_modules/,
            use: ['style-loader',{
                loader:'css-loader',
                options:{
                    modules:false
                }
            },
            {
                loader:'less-loader',
                options:{
                    lessOptions:{
                        javascriptEnabled:true
                    }
                }
            }
        ]
          },
    ]

    },


    devServer: {

        // contentBase:  './dist',

        compress:  false,

        port:  9010,

        // static:  {
        //     directory:path.join(__dirname,)
        // },

        host:  'localhost'

    },
mode:'none',
    plugins: [
        new NodePolyfillPlugin(),
        new CleanWebpackPlugin({

            cleanOnceBeforeBuildPatterns: ['./dist']

        }),

        new  HtmlWebpackPlugin({

            template:'./src/index.html'

        }),

        new webpack.ProvidePlugin({
            process: "process/browser",
          })

    ]

}