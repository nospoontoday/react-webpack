const path = require('path');
const ExtractCSS = require('mini-css-extract-plugin')

module.exports = {
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index.bundle.js',
    },
    devServer: {
        port: 4101,
        watchFiles: ['src/**/*', 'public/**/*']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                use: [
                    ExtractCSS.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [new ExtractCSS()],
};