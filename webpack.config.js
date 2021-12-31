const webpack = require("webpack");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require("path");
const jsconfig = require("./jsconfig.json");

const { DefinePlugin } = webpack;
const env = require("./env");

const config = {
    entry: {
        main: "./src/main.js",
    },
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.vue$/,
                loader: "vue-loader",
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
            },
        ],
    },
    plugins: [
        new DefinePlugin({
            process: { env: JSON.stringify(env) },
        }),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html',
            favicon: './public/favicon.ico'
        })
    ],
    resolve: {
        alias: Object.keys(jsconfig.compilerOptions.paths).reduce(
            (a, k) => {
                const p = jsconfig.compilerOptions.paths[k][0];
                const modulePath = p.replace(/\/\*/, "");
                const name = modulePath.replace(/\.\/src\//, "");
                const splitPath = modulePath.split("/");
                splitPath[0] = __dirname;
                a[name] = path.resolve.apply(path.resolve, splitPath);
                return a;
            },
            {}
        ),
    },
    devServer: {
        port: 9000,
        proxy: {
            "/api": {
                target: env.API,
                pathRewrite: { "^/api": "" },
                secure: false,
                changeOrigin: true,
            },
        },
    },
};

module.exports = config;
