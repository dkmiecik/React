var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './src/app/index'
    ],
    output: {
        path: BUILD_DIR,
        filename: 'app.js',
        publicPath: '/assets/'
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('app.css', {allChunks: true}),
        new HtmlWebpackPlugin({
            title: 'React Test Task',
            filename: 'index.html',
            template: 'index.template.html'
        })
    ],

    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['react-hot', 'babel-loader'],
                exclude: /node_modules/,
                include: APP_DIR
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!cssnext-loader')
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ],
        resolve: {
            extensions: ['', '.js', '.jsx', '.css'],
            modulesDirectories: [
                'node_modules'
            ]
        }
    },
    cssnext: {
        browsers: 'last 2 versions'
    }
};

module.exports = config;
