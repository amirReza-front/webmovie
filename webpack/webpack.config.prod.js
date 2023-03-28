const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config.commen.js');
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports =  merge(baseConfig,{
    mode:'production',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [ MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [ MiniCssExtractPlugin.loader,"css-loader","sass-loader"],
            }
        ],
    },
    plugins: [
        new MiniCssExtractPlugin()
    ],
    optimization:{
        minimizer:[
            new CssMinimizerPlugin(),
            new TerserPlugin(),
            new CleanWebpackPlugin(),
        ]
    }
})