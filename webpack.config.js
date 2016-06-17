var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'eval',
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'file?name=[path][name].[ext]'
            },
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader?sourceMap']
            },
            {
                test: /\.less/,
                loaders: ['less-loader','style-loader', 'css-loader?sourceMap']
            },
            {
                test: /\.(png|jpeg|jpg|mp3|ogg|ico)$/,
                loader: 'file?name=[path][name].[ext]'
            }
        ]
    }
};
