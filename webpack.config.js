const { CleanWebpackPlugin } = require('clean-webpack-plugin');     // 这里需要把CleanWebpackPlugin写在{}里
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: './src/index.ts',



    output: {
    
    filename:  'main.js'

    },

    resolve: {

        extensions:  ['.ts', '.tsx', '.js'],     //  这里不要漏写圆点
        alias:{
            "process":"process/browser"
        },

    },

    module: {

        rules: [{

            test:  /\.tsx?$/,

            use: 'ts-loader',

            exclude: /node\_modules/

        },{
            test:/\.less$/i,
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
                'less-loader'
            ]
        }]

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