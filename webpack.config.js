const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const WasmPackPlugin = require('@wasm-tool/wasm-pack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const distPath = path.resolve(__dirname, 'dist');

module.exports = (env, argv) => {
    return {
        devServer: {
            contentBase: distPath,
            compress: argv.mode === 'production',
            port: 8000,
            historyApiFallback: true,
            liveReload: true,
        },
        entry: path.resolve(__dirname, 'bootstrap.js'),
        output: {
            path: distPath,
            filename: 'bundle.min.js',
            webassemblyModuleFilename: 'bundle.wasm'
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                    ],
                },
            ]
        },
        plugins: [
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin({filename: 'bundle.min.css'}),
            new WasmPackPlugin({crateDirectory: '.', extraArgs: '--no-typescript',}),
            new OptimizeCSSAssetsPlugin({}),
            new HtmlWebpackPlugin({title: "Portfolio test project"}),
        ],
        watch: argv.mode !== 'production'
    };
};
