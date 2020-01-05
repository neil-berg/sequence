const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, 'build');

module.exports = {
    entry: './src/client/index.js',
    output: {
        path: BUILD_DIR,
        publicPath: '/',
        filename: 'bundle.js'
    },
    // target: "node",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000
                        }
                    }
                ]
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Sequence',
            template: './src/client/index.html'
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        open: true,
        hot: true
    },
    devtool: 'source-map'
};
