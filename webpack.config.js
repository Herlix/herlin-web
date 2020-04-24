const path = require('path');
const WasmPackPlugin = require('@wasm-tool/wasm-pack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanCSSPlugin = require('less-plugin-clean-css');

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
            filename: 'bundle.js',
            webassemblyModuleFilename: 'bundle.wasm'
        },
        module: {
            rules: [
                {
                    test: /\.less$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader
                        },
                        {
                            loader: 'css-loader',
                        },
                        {
                            loader: 'less-loader',
                            options: {
                                plugins: [
                                    new CleanCSSPlugin({ advanced: true })
                                ]
                            },
                        }
                    ],
                },
            ]
        },
        plugins: [
            new CopyWebpackPlugin([
                {
                    from: './static',
                    to: distPath
                }
            ]),
            new WasmPackPlugin({
                crateDirectory: '.',
                extraArgs: '--no-typescript',
            }),
            new MiniCssExtractPlugin({
                filename: 'bundle.min.css'
            }),
        ],
        watch: argv.mode !== 'production'
    };
};
