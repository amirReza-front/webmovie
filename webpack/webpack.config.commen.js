const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

const pathResolve = resolve => path.resolve(process.cwd(), resolve)

module.exports = {
    context: pathResolve('src'),
    entry: 
    {
        bundle:{
            import: pathResolve('src')
        }
    },
    output:{
            filename:"./[name]-[hash].js",
            path:pathResolve('bundle')
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/env', '@babel/react']
                }
            },
            {
                test: /\.(png|jpe?g|gif|webp|ico)$/i,
                loader: 'file-loader',
                options: {
                    name: 'assets/images/[name].[ext]',
                },
            },  
            {
                test: /\.(eot|woff|ttf)$/i,
                loader: 'file-loader',
                options: {
                    name: 'assets/fonts/[name].[ext]',
                },
            },  
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:pathResolve('public/index.html'),
            filename: 'index.html',
            title: 'web-movie',
            favicon: pathResolve('public/favicon.ico'),
            manifest: pathResolve('public/manifest.json'),
        })
    ],
    resolve: {
        alias: {
            ASSETS:pathResolve('src/assets')
        }
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    }
}