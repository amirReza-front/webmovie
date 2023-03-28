const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config.commen.js');

module.exports =  merge(baseConfig,{
    mode:'development',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [ "style-loader","css-loader","sass-loader"],
            }
        ],
    },
    devServer: {
        static:__dirname,
        compress: true,
        port: 9000,
        open:true
    }
})