const webpack = require('webpack');
var combineLoaders = require('webpack-combine-loaders');
const  ExtractTextPlugin = require("extract-text-webpack-plugin");
const config = {
    devtool: 'inline-source-map',
    entry: __dirname + '/app/main.js',
    output:{
        path: "./public",
        publicPath: "/public/",
        filename: "/js/bundle.js"
    },
    module:{
        loaders:[{
            test:/\.jsx?$/,
            exclude:/node_modules/,
            loader: "babel",
            query:{
                presets:["es2015","react"]
                }
        },
        
        { 
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
            loader: "url-loader?limit=10000&minetype=application/font-woff" 
        },
        { 
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
            loader: "file-loader" ,
        },
        {
            test: /\.css$/, // Only .css files
            loader: ExtractTextPlugin.extract(
                'style-loader',
                combineLoaders([{
                    loader: 'css-loader',
                    query: {
                    modules: true,
                    localIdentName: '[name]__[local]___[hash:base64:5]'
                    }
                }])
                )
        },
        ]
    },
    plugins:[
        new ExtractTextPlugin("/css/styles.css")
    ],
    devServer:{
        contentBase:"./public",
        colors: true,
        historyApiFallback: true,
        inline: true
    },
}
if(process.env.NODE_ENV === 'production'){
    config.devtool = false;
    config.plugins = [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({comments: false}),
        new webpack.DefinePlugin({
            'process.env': {NODE_ENV: JSON.stringify('production')}
        })
    ]
};
module.exports = config;