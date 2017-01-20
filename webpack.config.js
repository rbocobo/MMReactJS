const webpack = require('webpack');

const config = {
    devtool: 'inline-source-map',
    entry: __dirname + '/app/main.js',
    output:{
        path: "./public/js/",
        publicPath: "/js/",
        filename: "bundle.js"
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
            loader: "file-loader" 
        },
        {
            test: /\.css$/, // Only .css files
            loader: 'style!css' // Run both loaders
        },
        ]
    },
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