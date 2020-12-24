const path = require('path');
require("@babel/polyfill");

const DIST_DIR = path.resolve(__dirname, "dist");
const SRC_DIR = path.resolve(__dirname, "src");

const config = {
    devtool: "source-map",
    entry: SRC_DIR + "/app/index.js",
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app"
    },
    module: {
        rules: [
            {
                test: /\.js?/,
                include: SRC_DIR,
                loader: "babel-loader",
                query: {
                    presets: ["@babel/env", "@babel/react"]
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(woff)$/,
                use: [
                    'file-loader',
                ],
            },
            {
                test: /\.(jpg|png|svg)$/,
                loader: 'file-loader',
            }
        ],
    },
    devServer: {
        historyApiFallback: true,
    }
};

module.exports = config;
